import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user-service/user-service.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [UserListComponent],
  providers: [UserService],
  exports: [UserListComponent]
})
export class UsersModule { }
