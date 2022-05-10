import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from '../models/User.model';
import { AdduserService } from '../services/adduser.service';

@Component({
  selector: 'app-reseau',
  templateUrl: './reseau.component.html',
  styleUrls: ['./reseau.component.css']
})
export class ReseauComponent implements OnInit, OnDestroy{
  users: User[];
  userSubscription: Subscription;

  constructor(private AdduserService: AdduserService){}

  ngOnInit(){

    this.userSubscription=this.AdduserService.userSubject.subscribe(

      (users:User[])=>{
        this.users= users;
      }
    );
    this.AdduserService.emitUser();
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
