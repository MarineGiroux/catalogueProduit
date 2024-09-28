import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatalogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'catalogueProduit';
}
