import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  public getUserDetails(id: String) {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
