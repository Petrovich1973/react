import { SET_USER } from '../constants/User'

export function setUser(user) {

  return {
    type: SET_USER,
    payload: user
  }

}
