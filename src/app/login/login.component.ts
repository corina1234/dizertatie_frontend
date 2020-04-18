import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    username: FormControl;
    password: FormControl;

    constructor(private router: Router, private toastr: ToastrService,
                private loginService: AuthenticationService) { }

    ngOnInit() {
        this.username = new FormControl('', Validators.required);
        this.password = new FormControl('', Validators.required);
        this.loginForm = new FormGroup({
            username: this.username,
            password: this.password
        });
    }

    checkLogin() {
        this.loginService.authenticate(this.username.value, this.password.value).subscribe((data) => {
            if(data){
                sessionStorage.setItem('username', this.username.value);
                this.router.navigate(['']);
            } else {
                this.toastr.error('Username sau parola gresita!');
            }
            });
    }

}
