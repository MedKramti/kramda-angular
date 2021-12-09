import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { columnsMapParamaters } from 'src/app/component/table/table.component';
import { DateService } from 'src/app/service/date.service';
import { LoadJSService } from 'src/app/service/load-js.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  object_attributes = ["name", "description", "updateTS"];
  columnsMap:Map<string, columnsMapParamaters> = new Map([
    ["name" ,{ header_title: "Name"}],
    ["description" ,{ header_title: "Description"}],
    ["updateTS" ,{ header_title: "Last update"}],
  ]);
  records:any[] = [
    {name: "Quisque pulvinar", description: "neque ornare velit scelerisque, non tempus mi dictum", updateTS: this.dateService.transform(new Date())},
    {name: "In a purus", description: "non elit vestibulum facilisis", updateTS: this.dateService.transform(new Date())},
    {name: "Etiam varius", description: "nisi suscipit lorem dignissim, vel blandit nisi malesuada", updateTS: this.dateService.transform(new Date())},
    {name: "Fusce at velit", description: "Mauris at sapien quis nunc convallis varius", updateTS: this.dateService.transform(new Date())},
  ]

  buttonActions : Map<string, any> = new Map([
    ["edit", { func:()=>{ this.router.navigate(["/area/edit"]); } }],
    ["delete", { func:()=>{} }],
    ["add", {func : () => { this.router.navigate(["/area/add"]); }}]
  ]);

  constructor(private router: Router,private dateService: DateService) { }

  ngOnInit(): void {
    LoadJSService.loadScript();
  }

  onSort(e:any){}

}
