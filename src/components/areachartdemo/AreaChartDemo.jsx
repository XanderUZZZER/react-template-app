import Chart from 'react-apexcharts'

const AreaChartDemo = () => {
  const state = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      stroke: {
        curve: 'smooth',
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: 'series-2',
        data: [null, null, 45, 50, 49, 60, null, null],
      },
    ],
    fill: {
      colors: ['#1A73E8', '#B32824'],
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
  }

  return (
    <div>
      <div className='mixed-chart'>
        <Chart
          options={state.options}
          series={state.series}
          type='area'
          width='500'
          height='200'
        />
      </div>
    </div>
  )
}

export default AreaChartDemo
