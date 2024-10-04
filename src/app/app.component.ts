import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { routes } from './app.routes';
import { HomePageComponent } from "./home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatalogComponent, RouterLink, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'catalogueProduit';
}
