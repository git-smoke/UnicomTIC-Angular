import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>('https://localhost:7263/api/Users')
  }

  createUsers(user: User){
    return this.http.post('https://localhost:7263/api/Users', user)
  }

  deleteUser(userId: number){
    return this.http.delete('https://localhost:7263/api/Users/' + userId)
  }

  getUser(userId: number){
    return this.http.get('https://localhost:7263/api/Users/' + userId)
  }

  updateUser(user: User){
    return this.http.put('https://localhost:7263/api/Users/' + user.id,user)
  }
}

export interface User {
  id: number,
  name: string,
  email: string,
  address: string,
  password: string
}