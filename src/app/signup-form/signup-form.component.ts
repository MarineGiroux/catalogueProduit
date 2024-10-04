import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserInscription } from '../models/user-inscription.model';
import { AdressUser } from '../models/adress-user.model';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {

  user!: UserInscription;

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  adress = new FormGroup({
    street: new FormControl(''),
    zipcode: new FormControl(''),
    city: new FormControl(''),
  });

  submitted = false;

  onSubmit() {
    
    this.submitted = true;
    this.user.userName = this.username.value as string;
    this.user.email = this.email.value as string;
    this.user.password = this.password.value as string;
    this.user.adress.street = this.adress.get("street")!.value as string;
    this.user.adress.zipcode = this.adress.get("zipcode")!.value as string;
    this.user.adress.city = this.adress.get("city")!.value as string;
    console.log(this.username);
    
  }
  
}