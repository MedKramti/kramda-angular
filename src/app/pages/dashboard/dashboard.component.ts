import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public items = [
    {name: "Lorem ipsum dolor", description: "Lorem ipsum dolor", active:true},
    {name: "Vestibulum auctor", description: "Nunc dignissim risus id metus", active:true},
    {name: "Vivamus vestibulum", description: "Cras ornare tristique elit.", active:false},
    {name: "Fusce pellentesque", description: "Integer vitae libero ac risus egestas placerat", active:true}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
