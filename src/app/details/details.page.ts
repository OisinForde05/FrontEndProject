import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  city: string = '';
  weatherData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.city = this.route.snapshot.paramMap.get('city') || 'Dublin';
    this.fetchWeatherData(this.city);
  }

  fetchWeatherData(city: string) {
    const apiKey = 'https://jsonblob.com/api/jsonblob/1208026950785687552';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    this.http.get(url).subscribe({
      next: data => {
        this.weatherData = data;
        console.log('Weather:', this.weatherData);
      },
      error: err => {
        console.error('Error loading weather data', err);
      }
    });
  }
}
