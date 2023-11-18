import { create } from "zustand";
import { UserDetails } from "../type";

type Card = {
  title: string;
  description: string;
  url: string;
};

interface State {
  user: UserDetails
  cards: Card[];
}

type Action = {
  getUser: (user: State["user"]) => Promise<void>;
};

export const useInfoProfileStore = create<State & Action>()((set) => ({
  user: {
    uid: "",
    name: "",
    photo: "",
    email: "",
    title: "",
    description: "",
    job: "",
  },
  cards: [],
  getUser: async ({title, description, uid, name, photo, email, job }) => {
    set((state) => ({
      ...state,
      user: {
        uid,
        name,
        photo,
        email,
        title,
        description,
        job
      },
    }));
  },
}));
