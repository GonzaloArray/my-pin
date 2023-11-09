export interface Skill{
  id: string,
  name: string,
}

export interface StackItem {
  icon: React.ReactElement;
  name: string;
  id: string;
}


export interface Card {
  title: string;
  description: string;
  icon: React.ReactElement | null;
  id?: string;
}