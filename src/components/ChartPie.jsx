import React, { useState, useEffect } from 'react'
import { Pie, defaults, Doughnut } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'
const CharPie = () => {
  const [color1, setColor1] = useState('')
  const [color2, setColor2] = useState('')

  useEffect(() => {
    let one = getComputedStyle(document.documentElement).getPropertyValue(
      '--pink'
    )
    setColor1(one)

    let two = getComputedStyle(document.documentElement).getPropertyValue(
      '--blue'
    )
    setColor2(two)
  }, [])

  return (
    <div>
      <Doughnut
        data={{
          labels: ['green', 'red'],
          datasets: [
            {
              label: 'outer',
              data: [876, 597],
              backgroundColor: ['#02b64a', '#fb4659'],
              borderColor: [color1, color2],
              // borderWidth: 10,
            },
            // {
            //   label: 'inner',
            //   data: [876, 597],
            //   backgroundColor: ['transparent ', 'transparent '],
            //   borderColor: ['transparent', 'transparent'],
            //   borderWidth: 5,
            //   weight: 10,
            // },

            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          cutoutPercentage: 80,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default CharPie
