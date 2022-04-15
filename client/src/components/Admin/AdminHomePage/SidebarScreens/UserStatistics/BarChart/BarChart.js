

import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'

class Bar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [40, 30, 18, 22]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          colors:['#3BD172'],       
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: false,
              columnWidth: '20%',
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: [ '18-21', '21-25', '25-30','30-40'
            ],
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} width={600}/>
</div>)
    }
}


export default Bar;