import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  imports: [IonicModule, CommonModule, HttpClientModule],
})

export class DetailsPage implements OnInit {
  weatherData: any;
  loading = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const city = this.route.snapshot.paramMap.get('city');  // Get the city from the route
    if (city) {
      const dataUrl = 'https://jsonblob.com/api/jsonblob/1208026950785687552';

      this.http.get<any>(dataUrl).subscribe({
        next: (data) => {
          if (data[city]) {
            this.weatherData = data[city];
            this.loading = false;
          } else {
            this.error = 'City not found in data.';
            this.loading = false;
          }
        },
        error: () => {
          this.error = 'Failed to load data.';
          this.loading = false;
        }
      });
    }
  }
}
