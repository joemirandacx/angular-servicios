import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  userList!: User[];
  limit!: number;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersService.getUsers(this.limit)
      .subscribe(users => { this.userList = users });
  }

}
