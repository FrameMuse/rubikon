import { MapActions } from "store/store.types"
import { ValuesOf } from "types"

import { User, UserType } from "./types"

export const USER_GUEST: User = {
  id: 0,

  signed: false,
  type: UserType.Default,
  avatar: "/static/images/guest-avatar.jpg",
  name: "",
  surname: "",
  middleName: "",
  fullName: "",

  specialty: "",

  createdAt: new Date(-1)
}

const Petr: User = {
  id: 0,

  signed: true,
  type: UserType.Admin,
  avatar: "/static/images/avatar.png",
  name: "Пётр",
  surname: "Танчинец",
  middleName: "Петрович",
  fullName: "Танчинец Пётр Петрович",

  specialty: "Главный Врач",

  createdAt: new Date(-1)
}

const initialState: User = { ...Petr }

interface Actions {
  USER_UPDATE: Partial<User>
  USER_RESET: void
}

type Action = ValuesOf<MapActions<Actions>>


export default (state = initialState, action: Action): User => {
  switch (action.type) {

    case "USER_UPDATE":
      return { ...state, ...action.payload }

    case "USER_RESET":
      return { ...USER_GUEST }

    default:
      return state
  }
}


export const updateUser = (payload: Actions["USER_UPDATE"]) => ({
  type: "USER_UPDATE",
  payload
}) as const

export const resetUser = () => ({
  type: "USER_RESET"
}) as const
