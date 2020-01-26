import React, {Component} from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: [
                    'Yes','No','NOTA'
                ],
                datasets: [
                    {
                        label: 'Votes',
                        data: [
                            55,
                            23,
                            12
                        ],
                        backgroundColor: [
                            'rgba(246,219,166,0.8)',
                            'rgba(246,219,166,0.6)',
                            'rgba(246,219,166,0.3)'
                        ]
                    }
                ] 
            }
        }
    }
    
    render(){
        return(
            <div className="chart">
            <Doughnut
              data={this.state.chartData}
              options={{ 
                maintainAspectRatio: false,
                legend: {
                    display:true,
                    labels: { fontColor: '#ffffff',fontSize: 20}
                },
                layout: {
                padding: {
                        bottom: 50
                    }
                }
            }}
            />
            
            
            <Pie
              data={this.state.chartData}
              options={{ 
                maintainAspectRatio: false,
                legend: {
                    display:true,
                    labels: { fontColor: '#ffffff',fontSize: 20}
                },
                layout: {
                padding: {
                        bottom: 50
                    }
                }
            
            }}
            />
            
            </div>
            
        )
    }
}

export default Chart;