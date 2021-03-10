import { THEME_TOGGLE } from '../constants/themeConstants';

export const themeToggle = () => (dispatch, getState) => {
  let { theme } = getState()
  let newTheme = theme.currentTheme === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', newTheme)
  dispatch({ type: THEME_TOGGLE, payload: newTheme })
}