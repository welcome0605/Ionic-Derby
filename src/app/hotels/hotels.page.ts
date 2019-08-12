import { Component, OnInit } from '@angular/core';

interface Hotel {
  id: number;
  name: string;
  description: string;
  cover: string;
  city: string;
}

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {
  public hotels: Hotel[];

  constructor() { }

  ngOnInit() {
    this.getHotels();
  }

  private getHotels(): void {
    this.hotels = [
      {
        id: 1,
        name: 'Claris',
        description: 'Hotel & Spa 5*GL',
        cover: '/assets/images/home.png',
        city: 'Barcelona',
      },
      {
        id: 2,
        name: 'Claris 2',
        description: 'Hotel & Spa 5*GL',
        cover: '/assets/images/home.png',
        city: 'Barcelona',
      },
      {
        id: 3,
        name: 'Claris 3',
        description: 'Hotel & Spa 5*GL',
        cover: '/assets/images/home.png',
        city: 'Barcelona',
      },
      {
        id: 4,
        name: 'Claris 4',
        description: 'Hotel & Spa 5*GL',
        cover: '/assets/images/home.png',
        city: 'Barcelona',
      },
    ]
  }
}
