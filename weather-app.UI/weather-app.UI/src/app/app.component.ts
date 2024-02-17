import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchComponent} from './search/components/search/search.component';
import {WeatherComponent} from './weather/components/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Weather Measure';
}
