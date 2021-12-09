import { Component, OnInit } from '@angular/core';
import { columnsMapParamaters } from 'src/app/component/table/table.component';
import { DateService } from 'src/app/service/date.service';
import { LoadJSService } from 'src/app/service/load-js.service';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {
  object_attributes = ["fromFromId", "fromToId", "fromArea", "toFromId", "toToId", "toArea", "updateTS"];
  records = [
    {fromFromId: "scelerisque@gmail.com", fromToId: "condimentum@gmail.com", fromArea: "condimentum", toFromId: "sodales@yahoo.com", toToId: "sodales@gmail.com", toArea: "sodales", description: "", attributeInt:"0", updateTS: this.dateService.transform(new Date())}
  ];
  columnsMap:Map<string, columnsMapParamaters> = new Map([
    ["fromFromId" ,{ header_title: "From from id"}],
    ["fromToId" ,{ header_title: "From to id"}],
    ["fromArea" ,{ header_title: "From area"}],
    ["toFromId" ,{ header_title: "To from id"}],
    ["toToId" ,{ header_title: "To to id"}],
    ["toArea" ,{ header_title: "To area"}],
    ["updateTS" ,{ header_title: "Last update"}],
  ]);

  constructor(private dateService:DateService) { }

  ngOnInit(): void {
    LoadJSService.loadScript();
  }

}
