import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Marek Michalik';
  nameColor: string = '#009999';
  photoUrl: string = 'assets/images/mmm.jpg';
  isActive: boolean = false;

  changeIsActive() {
    this.isActive = !this.isActive;
  }

}
