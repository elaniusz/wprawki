import { Component, OnInit, ViewChild } from '@angular/core';
import { Person, Advenced } from 'src/app/model';
import { PersonDetailComponent } from '../person-detail/person-detail.component';

@Component({
  selector: 'app-person-browser',
  templateUrl: './person-browser.component.html',
  styleUrls: ['./person-browser.component.scss']
})
export class PersonBrowserComponent implements OnInit {
  @ViewChild('details',{static: false}) detailsComponent: PersonDetailComponent;

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

  person: Person = this.persons[0];

  constructor() { }

  ngOnInit() {
  }

  zmienKolor() {
    this.detailsComponent.zmienKolor();
  }

  podkreslenie() {
    this.detailsComponent.podkreslenie();
  };

  onShift(direction: string) {
    const idx = this.persons.indexOf(this.person);
    if (idx > 0 && direction === 'left') {
      this.person = this.persons[idx - 1];
    } else if (direction === 'right' && idx < this.persons.length - 1) {
      this.person = this.persons[idx + 1];
    }
  }
}
