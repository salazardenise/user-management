import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './types/user';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  addNewUser(user: User) {
    return this.httpClient.post<User>(
      '/api/users',
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
    return this.httpClient.get<User[]>('/api/users');
  }

  getUser(userId: number) {
    return this.httpClient.get<User>(`/api/users/${userId}`)
  }

  deleteUser(userId: number) {
    return this.httpClient.delete(`/api/users/${userId}`);
  }

  updateUser(userId: string, user: User) {
    return this.httpClient.patch(`api/users/${userId}`, {
      "firstName": user.firstName,
      "lastName": user.lastName,
      "userName": user.userName,
      "password": user.password,
      "phone": user.phone,
      "email": user.email
    });
  }

}
