import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { Storage } from '@ionic/storage-angular';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})

export class HomeComponent implements OnInit {
  locations = [
    { city: 'Dublin', temperature: '12°C', note: 'Typical cloudy day in the capital.' },
    { city: 'Cork', temperature: '13°C', note: 'A bit warmer and breezy.' },
    { city: 'Galway', temperature: '11°C', note: 'Drizzle with occasional sunshine.' },
    { city: 'Limerick', temperature: '12°C', note: 'Overcast skies.' },
    { city: 'Belfast', temperature: '10°C', note: 'Cool and dry.' },
    { city: 'Waterford', temperature: '14°C', note: 'Mild and bright!' },
  ];

  userLocation: string = '';
  private storage: Storage;

  constructor(private router: Router, private storageService: Storage) {
    this.storage = storageService;
    this.storage.create(); // Initialize storage
  }

  ngOnInit() {
    this.getUserLocation(); // Get the user's location when the component loads
    this.loadUserLocation(); // Load stored user location from storage
  }

  // Method to fetch user's current location using Geolocation
  async getUserLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.userLocation = `Latitude: ${latitude}, Longitude: ${longitude}`;

      // Save the location in storage
      await this.saveUserLocation();
    } catch (e) {
      console.error('Error getting location', e);
      this.userLocation = 'Unable to retrieve location';
    }
  }

  // Save the user's location into the storage
  async saveUserLocation() {
    await this.storage.set('userLocation', this.userLocation);
  }

  // Load the stored user location from the storage
  async loadUserLocation() {
    const storedLocation = await this.storage.get('userLocation');
    if (storedLocation) {
      this.userLocation = storedLocation;
    }
  }

  // Navigate to the details page for the selected city
  goToDetails(city: string) {
    this.router.navigate(['/details', city]);
  }

  async saveCityNote(city: string, note: string) {
    let cityNotes = await this.storage.get('cityNotes') || {};
    cityNotes[city] = note;
    await this.storage.set('cityNotes', cityNotes);
  }
}
