import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { WeatherService } from '../../../weather/services/weather.service';
import { WeatherComponent } from '../../../weather/components/weather.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, WeatherComponent ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  inputLocation: string = '';
  location: string = '';

  constructor(private _weatherService: WeatherService){
    //this._weatherService.data$.subscribe(data => this.location = data);
  }
  
  ngOnInit(): void {
    
  }

  onSearch(){
    //console.log(this.location);    
    //this._weatherService.setLocation(this.location);
    
  }

}
