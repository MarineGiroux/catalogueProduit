import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogComponent } from "../catalog/catalog.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, CatalogComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
