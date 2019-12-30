import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    return this.httpClient.get('http://34.93.25.183/allProducts');
  }

  // https://jsonplaceholder.typicode.com/users

  public getUserDetails(id: String) {
    return this.httpClient.get('http://34.93.25.183/productDetails/' + id);
  }

  public getReviews(id: String) {
    return this.httpClient.get('http://35.244.58.199/productReview/' + id);
  }
}
