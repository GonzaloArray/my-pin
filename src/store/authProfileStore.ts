import { create } from 'zustand'
import { UserDetails } from '../type'

type State = {
  user: UserDetails
}

type Action = {
  getUser: (user: State['user']) => Promise<void>,
  resetUser: () => void
}

export const useProfileStore = create<State & Action>()((set) => ({
  user: {
    name: '',
    photo: '',
    email: '',
    uid: '',
    title: '',
    description: ''
  },
  getUser: async({title, description, uid, name, photo, email}) => {
    set(state => ({
      ...state,
      user: {
        uid,
        name,
        photo,
        email,
        title,
        description
      }
    }))
  },
  resetUser: () => {
    set((state) => ({
      ...state,
      user: {
        name: '',
        photo: '',
        email: '',
        uid: '',
        title: '',
        description: '',
      },
    }));
  }
}))