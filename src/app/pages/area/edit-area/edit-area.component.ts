import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedFormService } from 'src/app/service/shared-form.service';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css']
})
export class EditAreaComponent implements OnInit {
  public fg:FormGroup;
  @Input() area:any = {name : "", description: ""};

  constructor(private fb:FormBuilder, private sharedFormService:SharedFormService, private route:ActivatedRoute) {
    this.route.params.subscribe(
      (param) => {
        if (param["id"] && param["id"]== "edit"){
          this.area = {name : "Quisque pulvinar	", description: "Maecenas nisi leo, rutrum id gravida quis, dapibus vitae mauris, Maecenas nisi leo, rutrum id gravida quis, dapibus vitae mauris"};
        }
      }
    );
    this.fg = this.fb.group({
      sharedForm:this.sharedFormService.sharedForm(this.area.name, this.area.description)
    });
  }

  ngOnInit(): void {
    
  }
  
  submit(e:any){
    if (!this.fg.valid)
      return;
    console.log(this.fg.value);
  }

}
