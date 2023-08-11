import { Component, OnInit } from "@angular/core";
import {
FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import { avoidWord } from "./customValidation";
import { avoidWord1 } from "./customValidation";

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  signupForm = this.formB.group({
    username: ["",[Validators.required, avoidWord]],
    password: ["",[avoidWord1(/password/)]],
    genderselect: [],
    ageselect: [null, [Validators.required, Validators.min(18)]],

    });
    
    // signupForm = new FormGroup({
    // username: new FormControl(""),
    // password: new FormControl(""),
    // confirmedpassword: new FormControl("")
    // });
  constructor(private formB: FormBuilder) {}
  form!: FormGroup;
  ngOnInit() {
  this.form = new FormGroup({
  male: new FormControl(false),
  female: new FormControl(false),
  birthCountry: new FormControl('')
  });
  this.form.get('male')!.valueChanges.subscribe(chosen => {
  if (chosen) {
  this.form.get('birthCountry')!.setValidators([Validators.required]);
  } else {
  this.form.get('birthCountry')!.setValidators(null);
  }
  this.form.get('birthCountry')!.updateValueAndValidity();
  });
  }
  submit() {
  if(!this.form.valid) {
  console.log("invalid data"); }
  else{
  console.log("valid data");
  }
  }
  onSubmit(){
    if (!this.signupForm.valid){
    console.log("invalid");
    }
    else{
    console.log(this.signupForm.value);
    }
    }
  }
