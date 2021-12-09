import { Component, OnInit } from '@angular/core';
import { columnsMapParamaters } from 'src/app/component/table/table.component';
import { DateService } from 'src/app/service/date.service';
import { LoadJSService } from 'src/app/service/load-js.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  object_attributes = ["name", "address", "importSrc", "updateTS"];
  columnsMap:Map<string, columnsMapParamaters> = new Map([
    ["name" ,{ header_title: "Name"}],
    ["address" ,{ header_title: "Address"}],
    ["importSrc" ,{ header_title: "Import source"}],
    ["updateTS" ,{ header_title: "Last update"}],
  ]);
  records:any[] = [
    {name: "Quisque pulvinar", address:"pulvinar.quisq@gmail.com", importSrc:"LDAP-X", updateTS: this.dateService.transform(new Date())},
    {name: "Finibus interdum", address:"interdum163@hotmail.com", importSrc:"CSV", updateTS: this.dateService.transform(new Date())},
    {name: "Bibendum augue", address:"bibendum.bib@gmail.com", importSrc:"WEB", updateTS: this.dateService.transform(new Date())},
  ]
  constructor( private dateService: DateService) { }


  ngOnInit(): void {
    LoadJSService.loadScript();
  }

}
