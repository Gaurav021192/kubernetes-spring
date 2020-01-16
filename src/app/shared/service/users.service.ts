import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    return this.httpClient.get('/details/');

    // return this.httpClient.get('http://' + window.location.host + '/details/');
  }

  // https://jsonplaceholder.typicode.com/users

  public getUserDetails(id: String) {
    return this.httpClient.get('/details/' + id);
    
    // return this.httpClient.get('http://' + window.location.host + '/details/' + id);
  }

  public getReviews(id: String) {
    return this.httpClient.get('/reviews/' + id);

    // return this.httpClient.get('http://' + window.location.host + '/reviews/' + id);
  }
}
