import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './types/user';
import {environment} from '../environments/environment';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  addNewUser(user: User) {
    return this.httpClient.post<User>(
      `${environment.apiHost}/api/users`,
      {
        "userName": user.userName,
        "firstName": user.firstName,
        "lastName": user.lastName,
        "password": user.password,
        "phone": user.phone,
        "email": user.email
      }
    );
  }

  getUsers() {
    return this.httpClient.get<User[]>(`${environment.apiHost}/api/users`);
  }

  getUser(userId: number) {
    return this.httpClient.get<User>(`${environment.apiHost}/api/users/${userId}`)
  }

  deleteUser(userId: number) {
    return this.httpClient.delete(`${environment.apiHost}/api/users/${userId}`);
  }

  updateUser(userId: string, user: User) {
    return this.httpClient.patch(`${environment.apiHost}/api/users/${userId}`, {
      "firstName": user.firstName,
      "lastName": user.lastName,
      "userName": user.userName,
      "password": user.password,
      "phone": user.phone,
      "email": user.email
    });
  }

}
