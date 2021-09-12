import { Component } from '@angular/core';
import { UserAuthenticationService } from './service/user-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welecome to Allay Pharmaceuticals LLC';
  isUserLoggedIn: boolean = false;

  constructor(public userAuthenticationService: UserAuthenticationService){

  }

  ngOnInit():void{
    this.isUserLoggedIn = this.userAuthenticationService.isUserLoggedIn()

  }
}
