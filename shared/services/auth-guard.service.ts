import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth-service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService, private toastr: ToastrService) { }

  canActivate() {
    if  ( this.authService.isLoggedIn() ) {

      return true;

    }
    else{    
        this.router.navigate(['/']);
        this.toastr.error('You are not logged in!', 'Log In!')
        return false;
        }
  }

}