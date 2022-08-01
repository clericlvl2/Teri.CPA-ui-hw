import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
  @Output() periodChangedEvent = new EventEmitter<string>();
  // send event after click
  registerNewPeriod(value: string) {
    this.periodChangedEvent.emit(value);
  }
  constructor() {

  }
  ngOnInit(): void {

  }
}
