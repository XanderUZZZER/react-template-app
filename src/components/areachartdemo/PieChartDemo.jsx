import Chart from 'react-apexcharts'

const PieChartDemo = () => {
  const state = {
    series: [876, 597],
    options: {
      chart: {
        type: 'donut',
        background: 'red',
        foreColor: 'green',
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          expandOnClick: true,
          offsetX: 0,
          offsetY: 0,
          customScale: 1,
          dataLabels: {
            offset: 0,
            minAngleToShowLabel: 10,
          },
          donut: {
            size: '95%',
            background: 'blue',
          },
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
          type='donut'
          height='300px'
        />
      </div>
    </div>
  )
}

export default PieChartDemo
