import { Component, OnInit } from '@angular/core';
import { DemoResourceService } from 'src/app/api/services';
import { Router } from '@angular/router';
import { DemoUser } from 'src/app/api/models';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
      private demoUser: DemoResourceService,
      private router: Router,
      private user: KeycloakService
    ) { }

  ngOnInit() {
  }
  getUser() {
    console.log("kahsdajdijalojd",this.user.getUsername());

    this.demoUser.findByUsernameUsingGET(this.user.getUsername()).subscribe((data: any) => {
      console.log('p');
      if (data.present) {
        console.log('getting the data');
        this.router.navigate(['profile']);
      } else {
        console.log('else is working', this.user.getUsername());

        this.router.navigate(['profile']);
      }
    });
  }


}
