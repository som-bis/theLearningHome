import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import {Router  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable()


export class AuthService {

    storeEmail: string;
    storePassword: string;

    constructor(private router: Router,
        private toastr: ToastrService) {
         }

    signUp(email: string, password:string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            (success) => {
                this.router.navigate(['/user']);
                this.toastr.success('Hi' + ' '+ email + ' ' + '!', 'Successfully Logged In');
            }
        ).catch((err) => {
         
            console.log('error: ' + err)
            this.toastr.error('Try Again!', 'Invalid Credentials!')
          });
    }

    login(email: string, password:string){
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            (success) => {
                this.storeEmail = email;
                this.storePassword = password;
                if(email=="brajakishore@bk.com" && password=="bkishore2593")
                this.router.navigate(['/home']);
                else
                this.router.navigate(['/user']);
                this.toastr.success('Hi' + ' '+ email + ' ' + '!', 'Successfully Logged In');
            }
        ).catch((err) => {
         
            console.log('error: ' + err)
            this.toastr.error('Try Again!', 'Wrong Credentials!')
          });
    }

    isLoggedIn() {
        if (this.storeEmail == null || this.storePassword == null) {
            return false;
          } else {
            return true;
          }
        }

    getLoggedUser(){
        return this.storeEmail;
    }
      
}