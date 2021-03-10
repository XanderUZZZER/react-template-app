import { useDispatch } from 'react-redux'
import { themeToggle } from './actions/themeActions'
import AreaChartDemo from './components/areachartdemo/AreaChartDemo'
import ThemeProvider from './HOCs/ThemeProvider'

function App() {
  const dispatch = useDispatch()

  return (
    <ThemeProvider>
      <div>
        <h2>App</h2>
        <button onClick={() => dispatch(themeToggle())}>Toggle theme</button>
        <AreaChartDemo />
      </div>
    </ThemeProvider>
  );
}

export default App;
