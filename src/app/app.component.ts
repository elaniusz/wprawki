import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Marek Michalik';
  nameColor = '#009999';
  photoUrl = 'assets/images/mmm.jpg';
  isActive = false;

zmienKolor() {
  this.nameColor = this.nameColor === '#009999' ? 'red' : '#009999';
}

}
