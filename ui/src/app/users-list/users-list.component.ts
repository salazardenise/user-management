import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../types/user';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((response) => {
        this.users = response;
      });
  }

  deleteUser(idToDelete: number, indexToDelete: number) {
    this.usersService.deleteUser(idToDelete)
      .subscribe((response) => {
        this.users.splice(indexToDelete, 1);
      });
  }

  goToUpdateForm(user: User) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "user_id": user.id
      }
    };
    this.router.navigate(['/update'], navigationExtras);
  }

}
