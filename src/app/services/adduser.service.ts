import { Subject } from "rxjs/internal/Subject";
import { User } from "../models/User.model";

export class AdduserService {

  private users : User[]=[
   { 
     nom:'daurian', 
    prenom:'vincia',
    datenaissance:'28-03-1998',
    sexe:'M',
    telephone:'066474000',
    fonction:'particulier',
    email:'daurian@gmail.com',
    password:'1234',
    pswrepeat: '1234'

  }
  ];

  userSubject = new Subject<User[]>();
  
  emitUser(){
    this.userSubject.next(this.users.slice());
  }

  adduser ( user:User){

     this.users.push(user);
     this.emitUser();

      };

 
}
