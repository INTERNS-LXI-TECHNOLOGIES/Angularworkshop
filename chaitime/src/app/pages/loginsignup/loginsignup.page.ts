import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.page.html',
  styleUrls: ['./loginsignup.page.scss'],
})
export class LoginsignupPage implements OnInit {
  username = '';
  password = '';
  email = '';
  loginTab = true;
  value = 'login';
  phone: number;
  showErrorSignup = false;
  showLoginError = false;
  constructor() { }
  signupForm = new FormGroup({
  username: new FormControl('' , [
      Validators.required,
      Validators.minLength(3),
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.required
    ]),
  });

  ngOnInit() {
  }

  submit() {
    this.showErrorSignup = true;
  }

}
