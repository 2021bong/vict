import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MouseEvent, useEffect, useRef, useState } from 'react';

const imgUrl = [
  {
    id: 1,
    url: 'https://i.pinimg.com/originals/02/ad/95/02ad9522af901a0c76d4336892573b05.jpg',
    title: '고생했3',
  },
  {
    id: 2,
    url: 'https://i.pinimg.com/originals/c0/38/9d/c0389d1bf398b380e20c5e02d6d6e719.jpg',
    title: '부릉부릉 신상왔어요',
  },
  {
    id: 3,
    url: 'https://i.pinimg.com/originals/4f/50/04/4f500442e8161291747d812ab3f2eeb2.jpg',
    title: '일반도서 이달의 신간',
  },
  {
    id: 4,
    url: 'https://i.pinimg.com/originals/c1/f2/11/c1f211d0989adc0d1573a4efa2901f83.jpg',
    title: '포텐터지다',
  },
  {
    id: 5,
    url: 'https://i.pinimg.com/originals/02/ad/95/02ad9522af901a0c76d4336892573b05.jpg',
    title: '고생했3',
  },
  {
    id: 6,
    url: 'https://i.pinimg.com/originals/c0/38/9d/c0389d1bf398b380e20c5e02d6d6e719.jpg',
    title: '부릉부릉 신상왔어요',
  },
];

const Slide = () => {
  const [slidePx, setSlidePx] = useState(-1000);
  const slideRef = useRef<HTMLUListElement>(null);
  const slideCount = imgUrl.length - 1;
  const [slideNav, setSlideNav] = useState(
    imgUrl
      .map((el, i) => {
        return { id: el.id, selected: i === 1 ? true : false };
      })
      .slice(1, imgUrl.length - 1)
  );
  const [sec, setSec] = useState(5000);

  const deleteTransition = () => {
    if (slideRef.current) {
      slideRef.current.style.transition = '';
    }
  };

  const addTransition = () => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'transform 0.3s ease-in';
    }
  };

  const moveSildeToChevron = (e: MouseEvent<SVGElement>) => {
    const id = e.currentTarget.id;
    if (id === 'left') {
      addTransition();
      setSlidePx((prev) => prev + 1000);
      if (slidePx === 0) {
        deleteTransition();
        setSlidePx((slideCount - 1) * -1000);
        return;
      }
    } else {
      addTransition();
      setSlidePx((prev) => prev - 1000);
      if (slidePx === slideCount * -1000) {
        deleteTransition();
        setSlidePx(-1000);
        return;
      }
    }
  };

  const moveSildeToNav = (e: MouseEvent) => {
    const id = e.currentTarget.id.split('nav')[1];
    setSlidePx((+id - 1) * -1000);
    setSlideNav((prev) =>
      prev.map((el) =>
        el.id === +id ? { ...el, selected: true } : { ...el, selected: false }
      )
    );
  };

  useEffect(() => {
    if (sec < 5000) setSec(5000);
    setSlideNav((prev) =>
      prev.map((el) =>
        +el.id === (slidePx / 1000) * -1 + 1
          ? { ...el, selected: true }
          : { ...el, selected: false }
      )
    );

    if (slidePx === -1000 || slidePx === slideCount * -1000) {
      setSlideNav((prev) =>
        prev.map((el) =>
          +el.id === 2 ? { ...el, selected: true } : { ...el, selected: false }
        )
      );
      if (slidePx === slideCount * -1000) setSec(500);
    }

    if (slidePx === 0) {
      setSlideNav((prev) =>
        prev.map((el) =>
          +el.id === 5 ? { ...el, selected: true } : { ...el, selected: false }
        )
      );
    }
  }, [slidePx]);

  useEffect(() => {
    const autoSlideTime = setInterval(() => {
      let newSlide = slidePx - 1000;
      addTransition();
      if (newSlide < slideCount * -1000) {
        newSlide = -1000;
        deleteTransition();
      }
      setSlidePx(newSlide);
    }, sec);
    return () => {
      clearInterval(autoSlideTime);
    };
  }, [slidePx]);

  return (
    <Container>
      <FaChevronLeft
        size='2em'
        className='chevron'
        id='left'
        onClick={moveSildeToChevron}
      />
      <FaChevronRight
        size='2em'
        className='chevron'
        id='right'
        onClick={moveSildeToChevron}
      />
      <SlideBox
        ref={slideRef}
        slide={slidePx}
        style={{ transition: 'transform 0.3s ease-in' }}
      >
        {imgUrl.map((el) => (
          <SlideImg key={el.id} url={el.url}>
            <h5 className='alt'>{el.title}</h5>
          </SlideImg>
        ))}
      </SlideBox>
      <div className='slideNavContainer'>
        {slideNav.map((el) =>
          el.selected ? (
            <div
              key={el.id}
              id={`nav${el.id}`}
              className='slideNav selected'
              onClick={moveSildeToNav}
            ></div>
          ) : (
            <div
              key={el.id}
              id={`nav${el.id}`}
              className='slideNav'
              onClick={moveSildeToNav}
            ></div>
          )
        )}
      </div>
    </Container>
  );
};

export default Slide;

const SlideImg = styled.li`
  flex-shrink: 0;
  width: 1000px;
  height: inherit;
  background: no-repeat center/110%
    ${({ url }: { url: string }) => `url(${url})`};

  .alt {
    position: absolute;
    z-index: -9999;
  }
`;

const SlideBox = styled.ul`
  position: relative;
  display: flex;
  width: inherit;
  height: inherit;
  transform: ${({ slide }: { slide: number }) => `translateX(${slide}px);`};
  /* transition: transform 0.3s ease-in; */
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 35rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.grey4};
  overflow: hidden;

  .chevron {
    position: absolute;
    color: #ffffff;
    opacity: 80%;
    z-index: 1;
    cursor: pointer;
  }

  #left {
    left: 10px;
  }

  #right {
    right: 10px;
  }

  .slideNavContainer {
    position: absolute;
    display: flex;
    left: 50%;
    bottom: 1rem;

    .slideNav {
      width: 1rem;
      height: 1rem;
      margin-right: 10px;
      border-radius: 50%;
      background-color: #fff;
      opacity: 70%;
      cursor: pointer;

      &:last-child {
        margin-right: 0;
      }
    }

    .selected {
      opacity: 100%;
    }
  }
`;
