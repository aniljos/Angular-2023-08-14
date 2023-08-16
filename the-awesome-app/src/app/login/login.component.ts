import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginFormGroup: FormGroup;

  constructor(private httpClient: HttpClient, private router: Router, private userService: UserService){
    this.loginFormGroup = new FormGroup({
      userName: new FormControl("", [Validators.required], []),
      password: new FormControl("", [Validators.required], [])
    });
  }


  login(){

    if(this.loginFormGroup.valid){
      const userName = this.loginFormGroup.get("userName")?.value;
      const password = this.loginFormGroup.get("password")?.value;
      //console.log("username, password", userName, password);

      const  url= "http://localhost:9000/login"
      this.httpClient.post<{accessToken: string, refreshToken: string}>(url, {name: userName, password: password})
                        .subscribe({
                          next: (data) => {

                              this.userService.setUserDetails(new User(userName, true, data.accessToken))
                              this.router.navigate(["/products"]);
                          },
                          error: () => {
                            alert("invalid credentianls");
                            this.userService.setUserDetails(new User());
                          }

                        })


    }
    else{
      alert("Invalid form");
    }
     
  }
}
