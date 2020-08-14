import { Component, OnInit } from '@angular/core';
import {UserInfo} from './UserInfo';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserInfo;
  constructor() { }

  ngOnInit(): void {
  }

  loginSite(username: string, password: string): void {
    console.log(`username: ${username}; password: ${password}`);
  }

}
