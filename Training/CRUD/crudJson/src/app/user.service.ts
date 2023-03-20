import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserModel } from './Models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.base_url
  userListUrl = environment.users_url
  postUserUrl = environment.post_user_url


  constructor(private http:HttpClient) { }


  postUser(body:UserModel){
    try {
      return this.http.post<any>(this.baseUrl+this.postUserUrl,body)
    } catch (error:any) {
      return throwError(()=>Error(error))
    }
  }
  
  getUser(body:UserModel){
    try {
      return this.http.get(this.baseUrl+this.userListUrl);
    } catch (error:any) {
      return throwError(()=>Error(error))
    }
  }

}
