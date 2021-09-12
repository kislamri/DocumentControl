import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  
username = ''
password = ''

  constructor() { }

  authenticate(username : string, password: string){
    if(this.username === '' && this.password ===''){
      sessionStorage.setItem('authenticaterUser', username);
      console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)

  }
}
