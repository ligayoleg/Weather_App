import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Weather } from '../models/weather';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = '8bd333d4762ef5d6f7d19be0325fc401';

  //private locationInput = new BehaviorSubject<string>('New York');
  //data$ = this.locationInput.asObservable();

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather>{
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', this.apiKey);

      return this.http.get<Weather>(this.apiUrl + 'weather', {params: options});
  }

  setLocation(data: string){
    //this.locationInput.next(data);
  }
}
