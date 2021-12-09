import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styleUrls: ['./shared-form.component.css']
})
export class SharedFormComponent implements OnInit {

  @Input() parentGroup:FormGroup = this.fb.group({});
  @Input() sharedForm:any;

  characters_remaining = 2048

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  calculateCharactersRemaining(e:any){
    this.characters_remaining = 2048 - e.target.value.length;
  }
  
  get name() {
    return this.sharedForm.get("name");
  }

  get description(){
    return this.sharedForm.get("description");
  }


}
