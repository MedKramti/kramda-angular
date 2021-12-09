import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
@Input() chart_title = "";
@Input() sub_title = "";

public pieChartData: ChartData<'pie', number[], string | string[]> = {
  labels: [ [ 'Area' ], [ 'E-mail' ], 'Distribution' ],
  datasets: [ {
    data: [ 300, 500, 100 ],
    backgroundColor: ['#188CC2', '#b2a4d8', '#ff6ec7'],
    hoverBackgroundColor: ['#188CC2', '#b2a4d8', '#ff6ec7'],
  } ]
};
public barChartOptions = {
  responsive: true
};
public pieChartType: ChartType = 'pie';

  constructor() { }

  ngOnInit(): void {
  }

}
