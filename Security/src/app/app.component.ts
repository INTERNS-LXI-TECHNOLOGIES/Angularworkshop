import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { UserService } from './services/User.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'first-project';

  constructor(
    private keyCloak: KeycloakService,
    private userService: UserService

  ) {}

  ngOnInit() {
    this.userService.loadUser();

  }

}
