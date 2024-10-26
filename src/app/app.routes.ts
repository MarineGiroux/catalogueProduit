import { Routes } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupFormGroupComponent } from './signup-FormGroup/signup-form-group.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'inscriptionReactive', component: SignupFormComponent},
    {path:'inscriptionFormGroup', component: SignupFormGroupComponent},
];
