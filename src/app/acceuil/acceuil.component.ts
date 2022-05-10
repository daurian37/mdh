import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class AcceuilComponent implements OnInit {

  defaultmail='daurian@gmail.com';
  passworddefault='1234';

authStatus: boolean;

loginForm: FormGroup;

 showModal=false;
  
  
  constructor(config: NgbCarouselConfig, private fb: FormBuilder, private AuthserviceService:AuthserviceService, private router:Router) { 
 // 
 config.interval = 2000;
 config.keyboard = true;
 config.pauseOnHover = true;

  }

  login(form: NgForm){

    console.log(form.value);
  }

  ngOnInit() { 

    this.loginForm=this.fb.group({  // cree une instance de formGroup
      username: [''],                 // cree une instance de formControl
      password: [''],                 // cree une instance de formControl

    });

    this.authStatus = this.AuthserviceService.isAuth;
   
  }

  onSignIn(){
    this.AuthserviceService.signIn().then(
      ()=>{
        
        this.authStatus=this.AuthserviceService.isAuth;
        this.router.navigate(['social']);
      }
    )
  }
 
  onSignout(){
    this.AuthserviceService.signOut();
    this.authStatus=this.AuthserviceService.isAuth;
    this.router.navigate(['acceuil']);
  }

}
