import { FiSun } from 'react-icons/fi';
import { BsLightningCharge, BsBox } from 'react-icons/bs';
import { AiOutlineGift, AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlinePaperAirplane, HiOutlineSparkles } from 'react-icons/hi';
import {
  RiLightbulbLine,
  RiCoupon3Line,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri';
import { SelectMenuProps } from '../utils/interface';

export const selectMenuList: SelectMenuProps[] = [
  { id: 1, title: '신작', icon: <FiSun className='icon' /> },
  { id: 2, title: '추천작', icon: <RiLightbulbLine className='icon' /> },
  { id: 3, title: '할인작', icon: <BsLightningCharge className='icon' /> },
  { id: 4, title: '기획전', icon: <AiOutlineGift className='icon' /> },
  { id: 5, title: '요일별', icon: <AiOutlineCalendar className='icon' /> },
  { id: 6, title: '장르별', icon: <BsBox className='icon' /> },
  {
    id: 7,
    title: '키워드별',
    icon: <HiOutlinePaperAirplane className='icon' />,
  },
  { id: 8, title: '이벤트', icon: <HiOutlineSparkles className='icon' /> },
  { id: 9, title: '쿠폰', icon: <RiCoupon3Line className='icon' /> },
  {
    id: 10,
    title: '무료 충전',
    icon: <RiMoneyDollarCircleLine className='icon' />,
  },
];
