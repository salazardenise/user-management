import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../types/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  user: User = {
    id: '',
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: '',
    email: ''
  }

  constructor(private usersService: UsersService, 
              private router: Router) { }

  ngOnInit() {
  }
  

  createUser() {
      this.usersService.addNewUser(this.user)
        .subscribe((response) => {
          this.router.navigate(['/']);
        });
  }

}
