import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  public interval;
  public count: number = 0;
  @Output() gameHasStarted = new EventEmitter<number>();

  startGame() {
    this.interval = setInterval(() => {
      this.gameHasStarted.emit(++this.count);
    }, 1000)
  }

  stopGame() {
    clearInterval(this.interval);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
