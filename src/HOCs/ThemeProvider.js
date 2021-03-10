import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { themes } from './themes'

const applyTheme = (theme) => {
  const newTheme = theme === "dark" ? themes["dark"] : themes["light"];
  Object.keys(newTheme).forEach((key) => {
    const value = newTheme[key];
    document.documentElement.style.setProperty(key, value);
  });
};

function ThemeProvider({ children }) {
  const { currentTheme } = useSelector(state => state.theme)

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme])

  return <>{children}</>
}

export default ThemeProvider