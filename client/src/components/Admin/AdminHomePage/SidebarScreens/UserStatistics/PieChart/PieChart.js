
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
          
        series: props.series,
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: props.labels,        
          colors: props.colors,
          
          
                
         
        },
        
 
      
      };
   
  }

  render() {

    return (
      <div className="donut">
        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={350} />

      </div>
    );
  }
}

export default Donut;