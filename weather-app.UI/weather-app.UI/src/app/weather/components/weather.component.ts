import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  navLinks =[
    {label: 'Today', url: '/today', class: 'active nav-link'},
    {label: 'Hourly', url: '/today', class: ' nav-link'},
    {label: 'Weekly', url: '/today', class: ' nav-link'}
  ]

}
