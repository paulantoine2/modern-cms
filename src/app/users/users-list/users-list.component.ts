import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAll().subscribe(
      (data) => {
        this.users = data;
      }
    );
  }

}
