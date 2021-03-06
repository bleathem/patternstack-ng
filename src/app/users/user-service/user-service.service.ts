import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<[object]> {
    return this.http.get('http://localhost:3000/users');
  }

}
