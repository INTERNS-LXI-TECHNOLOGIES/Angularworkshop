import { User } from './../../api/models/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { NavController, IonSlides } from '@ionic/angular';
import { UserResourceService } from 'src/app/api/services';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // user: User = {};
  value: string;
  @ViewChild('slides', { static: false }) slides: IonSlides;

loginForm = new FormGroup({
  username: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required]),
  firstname: new FormControl('', [Validators.required]),
  lastname: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  mobile: new FormControl('', [Validators.required])

});


  constructor(private userservice: UserResourceService) { }

  ngOnInit() {
  }

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
register() {
  // this.userservice.createUserUsingPOST(this.user).subscribe();
}

}
