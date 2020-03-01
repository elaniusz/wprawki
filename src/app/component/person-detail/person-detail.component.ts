import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Advenced, Person } from 'src/app/model';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  @Input() person: Person;
  @Output() shift = new EventEmitter<string>();

  nameColor = '#009999';
  isActive = false;
  showPhoto = false;

  Advenced = Advenced;

  constructor() { }

  ngOnInit() {
  }

  zmienKolor() {
    this.nameColor = this.nameColor === '#009999' ? 'red' : '#009999';
  }

  left() {
    this.shift.emit('left');
  }

  right() {
    this.shift.emit('right');
  }

}
