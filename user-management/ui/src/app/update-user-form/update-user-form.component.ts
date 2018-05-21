import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../types/user';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.css']
})
export class UpdateUserFormComponent implements OnInit {

  user: User = {
    id: '',
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: '',
    email: ''
  };

  constructor(private usersService: UsersService, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let id = params["user_id"];
      //console.log('id: ' + id);
      if(id) {
        this.getUserToDisplay(id);
      }
    });
  }

  getUserToDisplay(id: number) {
    this.usersService.getUser(id)
        .subscribe((response) => {
          //console.log(response);
          this.user.id = response.id;
          this.user.userName = response.userName;
          this.user.firstName = response.firstName;
          this.user.lastName = response.lastName;
          this.user.password = response.password;
          this.user.phone = response.phone;
          this.user.email = response.email;
        });
  }

  updateTheUser() {
    this.usersService.updateUser(this.user.id, this.user)
      .subscribe((response) => {
        this.router.navigate(['/']);
      });
  }

  deleteTheUser(idToDelete: number) {
    this.usersService.deleteUser(idToDelete)
      .subscribe((response) => {
        this.router.navigate(['/']);
      });
  }

}
