import { Component, NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { RouterOutlet } from '@angular/router';
import {SearchComponent} from './search/components/search/search.component';
import {WeatherComponent} from './weather/components/weather.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,  RouterOutlet, SearchComponent, WeatherComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Weather Measure';
}
