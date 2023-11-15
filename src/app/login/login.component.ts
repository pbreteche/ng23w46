import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  credential = '';

  constructor(public loginService: LoginService) {
  }

  login() {
    this.loginService.username = this.credential;
  }

  logout() {
    this.loginService.username = '';
    this.credential = '';
  }
}
