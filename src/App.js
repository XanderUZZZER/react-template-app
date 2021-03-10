import { useDispatch } from 'react-redux'
import { themeToggle } from './actions/themeActions'
import ThemeProvider from './HOCs/ThemeProvider'

function App() {
  const dispatch = useDispatch()

  return (
    <ThemeProvider>
      <div>
        <h2>App</h2>
        <button onClick={() => dispatch(themeToggle())}>Toggle theme</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
