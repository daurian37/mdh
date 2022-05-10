import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from "../models/User.model";
import { AdduserService } from '../services/adduser.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  userForm:FormGroup;

  defaultfunction='Particulier';
  defaultgender='M';

  constructor(private AdduserService: AdduserService, private router:Router,private formBuilder:FormBuilder) { }
  
  ngOnInit(){
     this.initForm();
  }


  initForm(){

    this.userForm=this.formBuilder.group(
      {

      nom:['', Validators.required],
      prenom:['', Validators.required],
      datenaissance:['', Validators.required],
      sexe:['', Validators.required],
      telephone:['', Validators.required],
      fonction:['', Validators.required],
       email:['', [Validators.required, Validators.email]],
       password:['', Validators.required],
       pswrepeat:['', Validators.required]

      }
    );
  }

  onSubmitForm(){

    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['nom'],
      formValue['prenom'],
      formValue['datenaissance'],
      formValue['sexe'],
      formValue['telephone'],
      formValue['fonction'],
      formValue['email'],
      formValue['password'],
      formValue['pswrepeat']
    );
    this.AdduserService.adduser(newUser);
    this.router.navigate(['acceuilsite']);
  }

}
