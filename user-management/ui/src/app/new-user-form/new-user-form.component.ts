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
    //if (this.validateAllInputs) {
      this.usersService.addNewUser(this.user)
        .subscribe((response) => {
          this.router.navigate(['/']);
        });
  } 
  /*
  validateAllInputs() {
    var regexLetters = /[A-Za-z]/;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regexPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var regexUserName = /[a-z0-9_-]/;
    if (!regexLetters.test(this.user.firstName) &&
        !regexLetters.test(this.user.lastName) &&
        !regexEmail.test(this.user.email) &&
        !regexPhone.test(this.user.phone) &&
        !regexUserName.test(this.user.userName) &&
        !regexUserName.test(this.user.password)) {
          return false;
    }
    return true;
    
  }*/
}