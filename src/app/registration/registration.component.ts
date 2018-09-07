import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
    registerForm: FormGroup;
    public submitted: Boolean = false;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.buildForm();
    }

    /**
     * Build your form to send FF with params
     */
    private buildForm() {
        this.registerForm = new FormGroup({
            name: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    private onSubmit() {
        this.submitted = true;
        if (this.registerForm.valid) {
            this.submitted = false;
            // now call to service
            this.authService.register(this.registerForm.value).subscribe(
                data => {
                    console.log(data);
                },
                error => {

                },
                () => {

                }
            );
        }
    }

}
