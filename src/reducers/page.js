import { SET_YEAR } from '../constants/Page'

const initialState = {
  year: 2036,
  photos: [],
  datas: [{"id": 1,"name": "Nonachka"},{"id": 2,"name": "Kirill"},{"id": 3,"name": "Liza"}],
  data: false
}

export default function page(state = initialState, action) {

  switch (action.type) {

    case SET_YEAR:
      return { ...state, year: action.payload }

    default:
      return state;
  }

}
