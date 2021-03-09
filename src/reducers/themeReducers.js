import { TOGGLE_THEME } from '../constants/themeConstants';

const initialState = {
  value: 'light'
}

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, value: state.value === 'light' ? 'dark' : 'light' }
    default:
      return state
  }
}