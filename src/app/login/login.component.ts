import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AuthService} from "../services/auth/auth.service";
import {AuthenticationService} from "../services/authentication.service";
import {AlertService} from "../services/alert.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
/*export class LoginComponent implements OnInit {
 loading = false;
 returnUrl: string;
 model: any = {};

 /!*constructor(private route: ActivatedRoute,private authService:AuthService, private router:Router) {
 }

 ngOnInit() {
 this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
 }

 user = {
 email: '',
 password: ''
 };

 signInWithGoogle() {
 this.authService.signInWithGoogle()
 .then((res) => {
 this.router.navigate(['returnUrl'])
 })
 .catch((err) => console.log(err));
 }*!/

 constructor(
 private route: ActivatedRoute,
 private router: Router,
 private authenticationService: AuthenticationService) { }

 ngOnInit() {
 // reset login status
 this.authenticationService.logout();

 // get return url from route parameters or default to '/'
 this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
 }

 /!*login() {
 this.loading = true;
 this.authenticationService.login(this.model.username, this.model.password)
 .subscribe(
 data => {
 this.router.navigate([this.returnUrl]);
 },
 error => {
 this.alertService.error(error);
 this.loading = false;
 });
 }
 *!/
 private loggedIn = new BehaviorSubject<boolean>(false); // {1}

 get isLoggedIn() {
 return this.loggedIn.asObservable(); // {2}
 }

 constructor(
 private router: Router
 ) {}

 login(user: User){
 if (user.userName !== '' && user.password != '' ) { // {3}
 this.loggedIn.next(true);
 this.router.navigate(['/']);
 }
 }

 logout() {
 this.loggedIn.next(false);
 this.router.navigate(['/login']);
 }
 }*/

export class LoginComponent implements OnInit {
  form:FormGroup;
  private formSubmitAttempt:boolean;

  constructor(private fb:FormBuilder,
              private authService:AuthService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field:string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true;
  }
}
