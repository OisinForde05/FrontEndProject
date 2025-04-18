import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = 'https://jsonblob.com/api/jsonblob/1208026950785687552'; // Replace with your OpenWeatherMap API key
  apiUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=6a66416403ed8e5e6e762cb8c261f303';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
