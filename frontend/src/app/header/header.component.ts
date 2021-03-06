import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  public totalItem : number = 0;
  public searchTerm !: string;
  // public isLoggedIn: boolean = false;
  constructor(public AuthService:AuthService,public router: Router) {this.AuthService.user
    if(this.AuthService.loggedIn())
    {
      this.AuthService.isloggedin  = true
      this.router.navigate(['home'])
    }
  }

  ngOnInit(): void {
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.totalItem = res.length;
    // })
   
  }

  // search(event:any){
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  //   console.log(this.searchTerm);
  //   this.cartService.search.next(this.searchTerm);
  // }
  onLogoutClick() {
    // this.cartService.removeAllCart();

    this.AuthService.logout();
    this.AuthService.isloggedin = false;
    this.router.navigate(['/home']);
   
  }

}
