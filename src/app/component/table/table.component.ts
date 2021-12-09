import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() title = "";
  @Input() object_attributes:string[] = []; //first_name", "last_name", "anything
  @Input() records:any[] = []
  // takes: object attribute, {header title}
  @Input() columnsMap:Map<string, columnsMapParamaters> = new Map([]);
  @Input() editable:boolean = false;
  @Input() buttonActions : Map<string, any> = new Map();
  constructor() {}

  ngOnInit(): void {
  }
  
  add(){
    this.buttonActions.get("add").func();
  }

  delete(){
    this.buttonActions.get("delete").func();
  }

  edit(){
    this.buttonActions.get("edit").func();
  }

}

export interface columnsMapParamaters{
  header_title:string,
  format?:any
}