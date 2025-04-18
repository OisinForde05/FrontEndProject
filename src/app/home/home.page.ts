import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule], // Properly importing necessary modules here
})
export class HomeComponent {
  constructor(private router: Router) {}

  locations = [
    { city: 'Dublin', temperature: '12°C', note: 'Typical cloudy day in the capital.' },
    { city: 'Cork', temperature: '13°C', note: 'A bit warmer and breezy.' },
    { city: 'Galway', temperature: '11°C', note: 'Drizzle with occasional sunshine.' },
    { city: 'Limerick', temperature: '12°C', note: 'Overcast skies.' },
    { city: 'Belfast', temperature: '10°C', note: 'Cool and dry.' },
    { city: 'Waterford', temperature: '14°C', note: 'Mild and bright!' },
  ];

  goToDetails(city: string) {
    this.router.navigate(['/details', city]);
  }
}
