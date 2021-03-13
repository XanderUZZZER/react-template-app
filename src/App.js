import { useDispatch } from 'react-redux'
import { toggleTheme } from './actions/themeActions'
import ThemeProvider from './components/ThemeProvider'
import ChartPie from "./components/ChartPie";

function App() {
  const dispatch = useDispatch()

  return (
    <ThemeProvider>
      <div>
        <h2>App</h2>
        <button onClick={() => dispatch(toggleTheme())}>Toggle theme</button>
        <ChartPie />
      </div>
    </ThemeProvider>
  );
}

export default App;
