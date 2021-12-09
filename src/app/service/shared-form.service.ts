import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedFormService {

  constructor(private fb:FormBuilder) { }

  sharedForm(name:string, description:string) : FormGroup{
    return this.fb.group({
      name : [name, Validators.compose([Validators.required, Validators.maxLength(512)])],
      description : [description, Validators.compose([Validators.required, Validators.maxLength(2048)])]
    });


  }
}
