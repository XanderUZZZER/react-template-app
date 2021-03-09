import { useDispatch } from 'react-redux'
import { toggleTheme } from './actions/themeActions'
import ThemeProvider from './components/ThemeProvider'

function App() {
  const dispatch = useDispatch()

  return (
    <ThemeProvider>
      <div>
        <h2>App</h2>
        <button onClick={() => dispatch(toggleTheme())}>Toggle theme</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
