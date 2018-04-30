import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService, UserService, AuthService } from '../services/index';
import {User} from "../models/user";

@Component({
  moduleId: module.id.toString(),
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  user:User= <User>{};
  loading = false;
  form:FormGroup;
  private formSubmitAttempt:boolean;

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router:Router,
              private userService:UserService,
              private alertService:AlertService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    if (this.form.valid) {
      this.loading = true;
      this.router.navigate(['/login']);

      /*this.userService.create(this.user)
        .subscribe(
          data => {
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/login']);
            console.log('data');
          },
          error => {
            console.log(error);
            this.alertService.error(error);
            this.loading = false;
          });*/
    }
    this.formSubmitAttempt = true;
  }

  isFieldInvalid(field:string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
}
