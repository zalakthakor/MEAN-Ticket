import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../_classes/login-data';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginData = new LoginData("","");
  constructor(private authService: AuthService, private router: Router) {if(this.authService.loggedIn()){
    // this.router.navigateByUrl('/home')

  }
    
    {this.authService.isloggedin}}
  
  ngOnInit(): void {
    // const user = localStorage.getItem('user')
   
    // if(user){
   
    //   this.router.navigateByUrl('home')
    // }
  }
  onLoginSubmit() {
    const loginData = new LoginData(this.loginData.email, this.loginData.password);
    
    this.authService.authenticateUser(loginData).subscribe(res => {
      console.log(res.result)
      if(res.result) {
        this.authService.storeUserData(res.token, res.result);
        this.authService.isloggedin = true
        this.authService.user = res.result
        alert("Welcome");
        this.router.navigate(['home']);
      }
      if(res.message) {
        alert(res.message);
        this.router.navigate(['home']);
      }
    
    });
  }
}
