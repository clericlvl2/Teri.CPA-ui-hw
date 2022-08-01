import { Component, Input, OnInit } from '@angular/core';
import TimeData from 'src/assets/json/data.json';
import { TimeInterface } from 'src/app/time-data-interface';

@Component({
  selector: 'app-card-tracker',
  templateUrl: './card-tracker.component.html',
  styleUrls: ['./card-tracker.component.scss']
})
export class CardTrackerComponent implements OnInit {
  @Input() currentTimeFrame: string = 'daily'
  timeData: TimeInterface[] = TimeData;
  setCardStyles(name: string): string {
    return name.toLowerCase().replace(/\s/g, '-');
  }
  constructor() {
  }
  ngOnInit(): void {
  }
}
