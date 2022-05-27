import { Component, OnInit } from '@angular/core';
import { User } from '../_classes/user';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model = new User("","", "", "","");

  constructor(private userService: UserService,
    private router: Router,
    
    ) { }
    onRegisterSubmit() {
      this.userService
      .registerUser(this.model)
      .subscribe(res => {
        if(res.result) {
          alert("User registered successfully")
          this.router.navigate(['/signin']);
        }
        if(res.message) {
          alert(res.message);
          this.router.navigate(['/signin']);
        }
      });
    }
  ngOnInit(): void {
  }

}
