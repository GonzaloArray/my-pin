export interface Skill{
  id: string,
  name: string,
}

export interface StackItem {
  icon: React.ReactElement | null;
  name: string;
  id: string;
}


export interface Card {
  title: string;
  description: string;
  icon: StackItem | null;
  id?: string;
}