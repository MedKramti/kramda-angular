import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(private datepipe: DatePipe) { }

  transform(date: Date){
    return this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
   }
}
