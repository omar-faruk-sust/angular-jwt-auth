import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm;
    public submitted: Boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
        localStorage.clear();
        this.buildForm();
    }

    private buildForm() {
        this.loginForm = this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.required]),
            password: this.formBuilder.control('', [Validators.required])
        });
    }

    private onSubmit() {
        this.submitted = true;
        if (this.loginForm.valid) {
            this.submitted = false;
            this.authService.login(this.loginForm.value).subscribe(
                data => {
                    if (data.error_code === 40001) {
                        console.log('error in username and password');
                    } else {
                        if (data.access_token) {
                            localStorage.setItem('id_token', data.access_token);
                            localStorage.setItem('jwt', data.access_token);
                            this.router.navigate(['author/list']);
                        } else {
                            console.log('error in login');
                        }
                    }
                },
                err => {

                },
                () => {
                }
            );
        }
    }
}
