import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'odd-even';
  public oddNumbers: number[] = [];
  public evenNumbers: number[] = [];

  startGame(e: number) {
    if(e % 2 === 0) {
      this.evenNumbers.push(e);
    } else {
      this.oddNumbers.push(e);
    }
  }
}
