import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // it will perform the DI
  constructor(private http: HttpClient) {}
  registerUser = (user: User) => {
    return this.http.post('/api/v1/register', user);
  };
}
