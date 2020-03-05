import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Advenced, Person } from 'src/app/model';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit, OnDestroy, OnChanges {

  @Input() person: Person;
  @Output() shift = new EventEmitter<string>();

  nameColor = '#009999';
  isActive = false;
  showPhoto = false;
  licznik = 0;
  licznikHandle: number;

  Advenced = Advenced;

  constructor() { }

  ngOnInit() {
    console.log('inicjalizacja komponentu');
    //this.licznikHandle = setInterval(() => {
      //this.licznik++;
     // console.log('licznik++');
    //}, 1000 );
  }

  ngOnDestroy(): void {
    console.log('zniszczenie komponentu');
    //clearInterval(this.licznikHandle);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.person.firstChange) {
    console.log(`zmiana z ${changes.person.previousValue.name} na ${changes.person.currentValue.name}`);
    }
  }

  zmienKolor() {
    this.nameColor = this.nameColor === '#009999' ? 'red' : '#009999';
  }

  podkreslenie() {
    this.isActive = !this.isActive;
  }

  left() {
    this.shift.emit('left');
  }

  right() {
    this.shift.emit('right');
  }

}
