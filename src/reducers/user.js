import { SET_USER } from '../constants/User'

const initialState = {
  name: 'Аноним'
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case SET_USER:
      return { ...state, name: action.payload }

    default:
      return state;
  }

}