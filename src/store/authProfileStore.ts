import { create } from "zustand";
import { UserDetails } from "../type";
// not-authenticated, checking, authenticated
type State = {
  loading: boolean;
  status: string;
  error: boolean;
  errorMessage: string;
  user: UserDetails;
};

type Action = {
  getUser: (user: State["user"]) => Promise<void>;
  resetUser: () => void;
  checkingCredentials: () => void;
};

export const useProfileStore = create<State & Action>()((set) => ({
  user: {
    name: "",
    photo: "",
    email: "",
    uid: "",
    title: "",
    description: "",
    job: "",
  },
  loading: false,
  status: "not-authenticated",
  error: false,
  errorMessage: "",
  checkingCredentials: () => {
    set((state) => ({
      ...state,
      status: 'checking',
      loading: true
    }))
  },
  getUser: async ({ title, job, description, uid, name, photo, email }) => {
    set((state) => ({
      ...state,
      user: {
        uid,
        name,
        photo,
        email,
        title,
        description,
        job,
      },
      status: 'authenticated',
      loading: false
    }));
  },
  resetUser: () => {
    set((state) => ({
      ...state,
      loading: false,
      status: "not-authenticated",
      error: false,
      errorMessage: "",
      user: {
        name: "",
        photo: "",
        email: "",
        uid: "",
        title: "",
        description: "",
        job: "",
      },
    }));
  },
}));
