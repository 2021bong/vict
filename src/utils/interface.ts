import { ReactNode } from 'react';

export interface SelectMenuProps {
  id?: number;
  title: string;
  icon: ReactNode;
}

export interface BandAdProps {
  text: string;
  color?: string;
}

export interface StyledBandAdProps {
  bgColor: string | undefined;
}

export interface ThumbCardProps {
  id: number;
  title: string;
  author: string;
  score: number;
  review: number;
}

type CardType = 'thumb' | 'mini';

export interface CardListProps {
  id?: string;
  title: string;
  content: ThumbCardProps[];
  type: CardType;
}

export interface MiniCardProps {
  id: number;
  rank: number;
  title: string;
  author: string;
  score: number;
  review: number;
}

export interface CardListContainerType {
  type: CardType;
}

export interface SlideBoxType {
  slide: number;
  transition: boolean;
}
