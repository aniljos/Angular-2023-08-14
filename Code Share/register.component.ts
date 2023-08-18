import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formGroup: FormGroup;
  public message: string= "";
  public isFormValid: boolean = false;
  public cityOptions: string [];

  constructor() { 

    this.cityOptions = new Array<string>();
    this.cityOptions.push("Mumbai");
    this.cityOptions.push("Hyderabad");
    this.cityOptions.push("Bangalore");
    this.cityOptions.push("Chennai");
    this.cityOptions.push("Delhi");

    this.formGroup = new FormGroup({
      name: new FormControl("", []),
      pwd: new FormControl("",[], []),
      mobile: new FormControl("",[] , []),
      city: new FormControl("", [], []),
    })

  }

  ngOnInit(): void {
  }

  register(){

    
    if(this.formGroup.valid){
      this.message= "Valid Form";
      this.isFormValid = true;
    }
    else{
      this.message = "Invalid Form";
      this.isFormValid = false;
    }

  }
}