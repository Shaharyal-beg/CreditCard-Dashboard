import React from 'react'
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale
} from 'chart.js'
ChartJS.register(
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale
)

const Graph = () => {

    const data = {
        labels:["may 12","may 13","may 14","may 15","may 16"],
        dataSets:[{
            data:[8, 7.8, 5, 9, 3]
        }]
    };
    const options = {
        plugins: {
            legend:false
        },
        scale: {
            x:{
                grid:{
                    display:false,
                }
            },
            y:{
                min:2,
                max:10,
                ticks:{
                    stepSize:2,
                    callback : (value) => value + 'k'
                },
                grid:{
                    borderDash: [10]
                }
            }
        }

    };
  return (
    <div className='line-graph'>
        <Line data={data} options={options} ></Line>
    </div>
  )
}

export default Graph