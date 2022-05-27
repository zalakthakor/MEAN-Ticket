import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
// import {SignInComponent} from './header/sign-in/sign-in.component'
// import {SignUpComponent} from './header/sign-up/sign-up.component';
import {SigninComponent} from './header/signin/signin.component';
import {SignupComponent} from './header/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

import { FlashMessagesModule } from "angular2-flash-messages";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {TicketComponent} from './header/ticket/ticket.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwPaginationModule } from 'jw-angular-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import{MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    TicketComponent
   
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,

    AppRoutingModule,
    JwPaginationModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
