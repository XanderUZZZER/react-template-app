import { THEME_TOGGLE } from '../constants/themeConstants';

const initialState = {
  currentTheme: 'light'
}

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_TOGGLE:
      return { ...state, currentTheme: action.payload }
    default:
      return state
  }
}