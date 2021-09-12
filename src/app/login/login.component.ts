import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { UserAuthenticationService } from '../service/user-authentication.service';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
username = ''
password = ''
errorMessage = 'Invalid Credentials, Please enter correct username or password!'
invalidLogin = false
emailFormControl = new FormControl('',[Validators.required]);
passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)])

  constructor(private router:Router,
     private route: ActivatedRoute,
     private authService: AuthService,
     private formBuilder: FormBuilder,
     public userAuthenticationService: UserAuthenticationService
     
     ) { 
     
     }
     loginForm : FormGroup | undefined;
     isSubmitted = false;

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
//get return url from route parameters or default to
  get formControls(){
    return this.loginForm?.controls;
  }

  login(){
    console.log(this.username);
    //if(this.username ==="kriad@allay.us" && this.password ==='abc123'){
      // Redirect to Welcom Page
      if(this.userAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['finddoc'])
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
   
    //this.router.navigateByUrl('/finddoc');

  }
  cancel(){
    this.router.navigateByUrl('/home')
  }

}
