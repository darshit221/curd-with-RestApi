import { GET_AIRLINE, GET_PASSENGER, SELECT_DATA } from "./actionType"

const initialState = {
    passanger:[],
    airline:[],
    selecteData:{}
}

const passengerReducer=(state = initialState, { type, payload }) => {
  switch (type) {

  case GET_PASSENGER:
    return { ...state, passanger: payload }
  case GET_AIRLINE:
    return { ...state, airline: payload }
  case SELECT_DATA:
    return { ...state, selecteData: payload }

  default:
    return state
  }
}

export default  passengerReducer