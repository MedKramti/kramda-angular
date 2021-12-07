import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, Legend } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input() chart_title = "";
  @Input() sub_title = ""
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ '01/05', '02/05', '03/05', '04/05', '05/05', '06/05', '07/05' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Distribution Number', 
      hoverBackgroundColor:"#93CCEE",
      backgroundColor:"#188CC2",
      borderColor:"#188CC2"
    }
    ]
  };

  public barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
  }};

  constructor() { }

  ngOnInit(): void {
  }

}
