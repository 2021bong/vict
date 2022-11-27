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
  title: string;
  author: string;
  score: number;
  review: number;
}

export interface ThumbCardProps {
  id: number;
  title: string;
  author: string;
  score: number;
  review: number;
}

export interface ThumbListProps {
  id?: string;
  title: string;
  content: ThumbCardProps[];
}
