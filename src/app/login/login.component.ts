import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth/auth.service";
import {Router} from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public user$ = this.authService.user;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
    this.router.navigate(['/posts']);
  }

  login() {
    const inputValue = this.form.value;

    this.authService.login(inputValue.email, inputValue.password)
      .subscribe(
        success => this.router.navigate(['/posts']),
        error => alert(error)
      );
  }

}