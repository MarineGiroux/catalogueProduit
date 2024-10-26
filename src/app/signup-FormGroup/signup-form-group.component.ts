import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserInscription } from '../models/user-inscription.model';
import { passwordValidator } from '../services/password-validator';
import { emailValidator } from '../services/email-validator';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signup-form-group.component.html',
  styleUrls: ['./signup-form-group.component.scss']
})
export class SignupFormGroupComponent {

  user!: UserInscription;
  submitted = false;

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      credentials: this.fb.group({
        email: ['', [Validators.required, emailValidator]],
        password: ['', [Validators.required, passwordValidator]]
      }),
      address: this.fb.group({
        street: [''],
        city: [''],
        zipCode: ['']
      })
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.userForm.value);
  }

}