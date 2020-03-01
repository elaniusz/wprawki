import { Component } from '@angular/core';
import { Person, Advenced } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  person: Person = {
    name: 'Marek Michalik',
    photoUrl: 'assets/images/mmm.jpg',
    description: 'Coś o sobie trza napisać',
    age: 39,
    adress: {
      street: 'ul. Cieńków',
      houseNumber: 20,
      city: 'Wisła'
    },
    advenced: Advenced.Zaawansowany
  };

  nameColor = '#009999';
  isActive = false;
  showPhoto = false;
  Advenced = Advenced;

  zmienKolor() {
    this.nameColor = this.nameColor === '#009999' ? 'red' : '#009999';
  }

}
