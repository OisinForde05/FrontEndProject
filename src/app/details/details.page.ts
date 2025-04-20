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
})
export class DetailsPage implements OnInit {
  weatherData: any;
  loading = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const city = this.route.snapshot.paramMap.get('city');
    const dataUrl = 'https://jsonblob.com/api/jsonblob/1208026950785687552';

    this.http.get<any>(dataUrl).subscribe({
      next: (data) => {
        if (city && data[city]) {
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
