import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  optlist: string[] = ['Create', 'Display', 'Update', 'Delete'];
constructor() { }

  ngOnInit() {
  }

}
