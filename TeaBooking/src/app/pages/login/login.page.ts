import { User } from './../../api/models/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { NavController, IonSlides } from '@ionic/angular';
import { UserResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  // user: User = {};
  showLoginError = false;
  showSignupError = false;
  value: string;
  @ViewChild('slides', { static: false }) slides: IonSlides;

  loginForm = new FormGroup({
    emailid: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  signupForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    // mobile: new FormControl('', [
    //   Validators.required,
    //   Validators.pattern('[0-9]*'),
    //   Validators.minLength(6),
    //   Validators.maxLength(15)
    // ])
  });

  constructor(private userservice: UserResourceService) {}

  ngOnInit() {}

  slide(value) {
    this.value = value.detail.value;
    if (this.value === 'login') {
      this.slides.slideTo(0);
    } else {
      this.slides.slideTo(1);
    }
  }

  slideChange() {
    let currentSlide;
    this.slides.getActiveIndex().then(num => {
      currentSlide = num;
      if (this.value === 'login' && currentSlide !== 0) {
        this.value = 'signup';
      } else if (this.value === 'signup' && currentSlide !== 1) {
        this.value = 'login';
      }
    });
  }

  login() {
    if (!this.loginForm.invalid) {
      console.log('logged in');
    } else {
      this.showLoginError = true;
    }
  }

  signup() {
    if (!this.signupForm.invalid) {
      console.log('Registered');
      // this.userservice.createUserUsingPOST(User).subscribe();
    } else {
      this.showSignupError = true;
    }
  }
}
