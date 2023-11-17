import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  credential = '';

  constructor(
    public loginService: LoginService,
    private router: Router
  ) {
  }

  login() {
    this.loginService.username = this.credential;
  }

  logout() {
    this.loginService.username = '';
    this.credential = '';
    this.router.navigate(['']);
  }
}
