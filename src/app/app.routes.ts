import { Routes } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'inscriptionReactive', component: SignupFormComponent},
];
