import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  apiKey: string = '5ca428db668e89e9f3377100b0f88c8e';
  URI: string = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;

  constructor(private http: HttpClient) {}

  getWeather(city: string, country: string) {
    return this.http.get(`${this.URI}${city},${country}`);
  }
}
