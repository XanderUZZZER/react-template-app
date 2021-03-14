import { useDispatch } from 'react-redux'
import { themeToggle } from './actions/themeActions'
import AreaChartDemo from './components/areachartdemo/AreaChartDemo'
import PieChartDemo from './components/areachartdemo/PieChartDemo'
import ThemeProvider from './HOCs/ThemeProvider'

function App() {
  const dispatch = useDispatch()

  return (
    <ThemeProvider>
      <div>
        <h2>App</h2>
        <button onClick={() => dispatch(themeToggle())}>Toggle theme</button>
        <PieChartDemo />
        <AreaChartDemo />

      </div>
    </ThemeProvider>
  );
}

export default App;
