import { Injectable, OnInit } from '@angular/core';
import { DemoResourceService } from '../api/services';
import { KeycloakService } from 'keycloak-angular';
import { DemoUser } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

user: DemoUser;

  constructor(
      private demoResourceService: DemoResourceService,
      private keycloakService: KeycloakService

  ) { }

  ngOnInit() {

  }
 async loadUser() {
    this.keycloakService.loadUserProfile().then(details=>{
      console.log('deatails',details);
      this.user = {
        username: details.username,
        email: details.email,
        keycloakId: details.id
      }
      this.createUser();

    });


    return this.user;
  }

  createUser() {
  //need to fetch user is getting if not getting need creat  a new user (call from bakend)
  console.log('inside the method');

  this.demoResourceService.createUsingPOST(this.user).subscribe((data: any) => {
    console.log("creating is wrking", data);
  });
  }

  userLogout() {
    this.keycloakService.logout().then(()=>{
      console.log("user has been succesfully logout");

    })
  }

}
