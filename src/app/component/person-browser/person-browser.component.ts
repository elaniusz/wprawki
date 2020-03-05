import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/model';
import { PersonDetailComponent } from '../person-detail/person-detail.component';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-person-browser',
  templateUrl: './person-browser.component.html',
  styleUrls: ['./person-browser.component.scss']
})
export class PersonBrowserComponent implements OnInit {
  @ViewChild('details',{static: false}) detailsComponent: PersonDetailComponent;

  persons: Person [];
  person: Person;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.persons = this.personService.getPersons();
    this.person = this.persons [2];
  }

  zmienKolor() {
    this.detailsComponent.zmienKolor();
  }

  podkreslenie() {
    this.detailsComponent.podkreslenie();
  }

  onShift(direction: string) {
    const idx = this.persons.indexOf(this.person);
    if (idx > 0 && direction === 'left') {
      this.person = this.persons[idx - 1];
    } else if (direction === 'right' && idx < this.persons.length - 1) {
      this.person = this.persons[idx + 1];
    }
  }
}
