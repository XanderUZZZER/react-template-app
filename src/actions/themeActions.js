import { TOGGLE_THEME } from '../constants/themeConstants';

export const toggleTheme = () => (dispatch, getState) => {
  let { theme } = getState()
  localStorage.setItem('theme', theme.value)
  dispatch({ type: TOGGLE_THEME })
}