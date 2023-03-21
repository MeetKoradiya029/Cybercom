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
  
  getUser(){
    try {
      return this.http.get<any>(this.baseUrl+this.userListUrl);
    } catch (error:any) {
      return throwError(()=>Error(error))
    }
  }

  getUserDetails(id:string){
    try {
      return this.http.get<any>(this.baseUrl+this.userListUrl+"/"+id);
    } catch (error:any) {
      return throwError(()=> new Error(error))
    }
  }

  updateUser(userId:string,body:UserModel){
    try {
      return this.http.put<any>(this.baseUrl+this.userListUrl+"/"+userId,body);
    } catch (error:any) {
      return throwError(()=> new Error(error));
    }
  }

  deleteUser(userId:string){
    try {
      return this.http.delete<any>(this.baseUrl+this.userListUrl+"/"+userId);
    } catch (error:any) {
      return throwError(()=>new Error(error))
    }
  }



}
