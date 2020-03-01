import { Component } from '@angular/core';
import { Person, Advenced } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

persons: Person[] = [
  {
    name: 'Joanna Michalik',
    photoUrl: 'assets/images/mmm.jpg',
    description: 'Coś tam jest napisane',
    age: 42,
    adress: {
      street: 'ul. Biała Wisełka',
      houseNumber: 20,
      city: 'Wisła'
    },
    advenced: Advenced.Zaawansowany,
    categories: [
      'rowerzysta',
      'biegacz',
    ]
  },
  {
    name: 'Marek Michalik',
    photoUrl: 'assets/images/mmm.jpg',
    description: 'Coś o sobie trza napisać',
    age: 39,
    adress: {
      street: 'ul. Cieńków',
      houseNumber: 20,
      city: 'Wisła'
    },
    advenced: Advenced.Zaawansowany,
    categories: [
      'rowerzysta',
      'biegacz',
      'triatlon'
    ]
  },
  {
    name: 'Kunegunda Zubrzycka',
    photoUrl: 'assets/images/mmm.jpg',
    description: 'trza napisać',
    age: 18,
    adress: {
      street: 'ul. Stokrotek',
      houseNumber: 20,
      city: 'Wisła'
    },
    advenced: Advenced.Zaawansowany,
    categories: [
      'rowerzysta',
      'biegacz',
      'triatlon'
    ]
  }
];

person: Person = null;

  nameColor = '#009999';
  isActive = false;
  showPhoto = false;
  Advenced = Advenced;

  zmienKolor() {
    this.nameColor = this.nameColor === '#009999' ? 'red' : '#009999';
  }

}
