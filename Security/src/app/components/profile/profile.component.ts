import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/User.service';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { EditProfileModalComponent } from '../edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user;
  modalRef;
  constructor(
      private userService: UserService,
      private modalService: MDBModalService
  ) { }

  ngOnInit() {
    this.getUserDetails();
  }

  logout() {
    this.userService.userLogout();

  }
  getUserDetails() {
 this.user = this.userService.user;
  }
  editUser() {
    this.modalRef = this.modalService.show(EditProfileModalComponent);

  }
}
