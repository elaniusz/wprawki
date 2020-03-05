import { Injectable, Inject } from '@angular/core';
import { Advenced, Person, Config, CONFIG } from './model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private persons: Person[] = [
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

  constructor(@Inject(CONFIG) private config: Config) { }

  getPersons() {
    return this.persons.slice(0, this.config.personLimit);
  }
}
