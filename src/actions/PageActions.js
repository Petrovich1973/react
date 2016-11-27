import { SET_YEAR, SET_DATA } from '../constants/Page'

export function setYear(year) {

  return {
    type: SET_YEAR,
    payload: year
  }

}

export function setData(data) {

  return {
    type: SET_DATA,
    payload: data
  }

}
