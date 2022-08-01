import { Component, Input, OnInit } from '@angular/core';
import TimeData from 'src/assets/json/data.json';
import { TimeInterface } from 'src/app/time-data-interface';

@Component({
  selector: 'app-card-tracker',
  templateUrl: './card-tracker.component.html',
  styleUrls: ['./card-tracker.component.scss']
})
export class CardTrackerComponent implements OnInit {
  @Input() currentPeriod: string = 'daily' // initial value 'daily
  @Input() currentActivity: TimeInterface = TimeData[0]; // initial value TimeData[0]
  // get hours for selected time period
  getHours (period:string) {
    if (period === 'daily')
      return this.currentActivity.timeframes.daily;
    else if (period === 'weekly')
      return this.currentActivity.timeframes.weekly;
    else // (period === 'monthly')
      return this.currentActivity.timeframes.monthly;
  }
  // transform word to noun for previous-period element
  periodToNoun (period: string): string {
    if (period === 'daily') return 'day';
    else if (period === 'weekly') return 'week';
    else return 'month';
  }
  //activity.title to lower case + delete space
  setCardStyles(name: string): string {
    return name.toLowerCase().replace(/\s/g, '-');
  }
  constructor() {

  }
  ngOnInit(): void {

  }
}
