import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChartComponent = ({ chartData }) => {

  console.log('chartdata',chartData);
  const getOption = () => {
    
    return {

      color: ['#eaac64'],
      xAxis: {
        type: 'category',
        data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']//chartData.map(item => item.Month), // e.g., ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        splitLine: {
            show: false // Set to false to hide horizontal grid lines
        },
        type: 'value',
        min:0,
        max: 500
      },
      series: [
        {
          data: chartData.map(item => item.inspections), // e.g., [150, 230, 224, 218, 135, 147, 260]
          type: 'bar',
          markPoint: {
            data: [{
              type: 'max',
              name: 'Maximum Value'
              }, 
              {
              type: 'min',
              name: 'Minimum Value'
            }],
            itemStyle: {
            color: 'red'
          }
            
          }
        },
      ],
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        show: false,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
    }
  }

  return <ReactECharts option={getOption()}  />
}

export default BarChartComponent;