import { GET_PASSANGER } from "./actionType"

const initialState = {
    passanger:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_PASSANGER:
    return { ...state, ...payload }

  default:
    return state
  }
}
