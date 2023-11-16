import { ReactNode } from "react";

export interface Skill{
  id: string,
  name: string,
}

export interface StackItem {
  name: string;
  id: string;
}

export interface Stack extends StackItem{
  icon: React.ReactElement
}


export interface Card {
  url: string;
  title: string;
  description: string;
  icon: StackItem | null;
  id?: string;
}

export interface ButtonStates {
  normal: ReactNode;
  add: ReactNode;
  edit: ReactNode;
  delete?: ReactNode;
}

export type StackItemType = {
  icon: React.ReactElement;
  name: string;
  id: string;
};

export type StackType = {
  [key: string]: StackItemType;
};

export interface Props {
  icon: string;
  stack: StackType;
}

export interface User{
  name: string;
  email: string;
  uid: string;
  photo: string;
}

export interface UserDetails extends User {
  title: string;
  description: string;
}

// Resume
export interface Resume {
  english: string;
  spanish: string;
}
