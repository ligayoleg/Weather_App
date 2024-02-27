import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../models/weather';


@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit{
  
  weather: Weather | undefined;
  city: string = '';
  constructor(
    private _weatherService: WeatherService
  ){
   // this._weatherService.data$.subscribe(data => this.city = data);
  }

  ngOnInit(): void {
    
  }

  navLinks =[
    {label: 'Today', url: '/today', class: 'active nav-link'},
    // {label: 'Hourly', url: '/hourly', class: ' nav-link'},
    // {label: 'Weekly', url: '/today', class: ' nav-link'}
  ]

  search(city: string){
    this._weatherService.getWeather(city)
      .subscribe({
        next: weather => this.weather = weather,
        error: err => alert(err.error.message),
        complete: () => console.log(this.weather)
      });
    
  }

}
