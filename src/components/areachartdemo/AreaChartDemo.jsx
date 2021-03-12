import Chart from 'react-apexcharts'

const AreaChartDemo = () => {
  const state = {
    series: [
      {
        name: 'ser1',
        data: [
          {
            x: 0,
            y: 0.5,
          },
          {
            x: 2,
            y: 1,
          },
          {
            x: 3,
            y: 2,
          },
          {
            x: 4,
            y: 4,
          },
        ],
      },
      {
        name: 'ser2',
        data: [
          {
            x: 4,
            y: 4,
          },
          {
            x: 10,
            y: 4,
          },
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: ['red', 'blue'],
      },
      xaxis: {
        type: 'numeric',
      },
      tooltip: {
        enabled: false,
        show: false,
        x: {
          format: 'dd/MM/yy HH:mm',
        },
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
          height='300px'
        />
      </div>
    </div>
  )
}

export default AreaChartDemo
