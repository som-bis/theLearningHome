import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth-service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password);
  }


}
