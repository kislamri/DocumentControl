import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email = ''
  password = ''
  confirmPassword = ''
 

  pageTitle: string = 'Document Control Portal SignUp for New User';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.email);
    this.router.navigateByUrl('/login')
  }
  
  cancel():void{
    this.router.navigateByUrl('/home')
  }
}