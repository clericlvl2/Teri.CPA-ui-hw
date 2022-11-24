import { Component, Input, OnChanges } from '@angular/core';
import { ActivityPeriod } from 'src/app/models/time-data-interface';

@Component({
  selector: 'app-card-tracker',
  templateUrl: './card-tracker.component.html',
  styleUrls: ['./card-tracker.component.scss']
})
export class CardTrackerComponent implements OnChanges {
  constructor() {}
  @Input() activityName: string = 'empty';
  @Input() activityTime: ActivityPeriod = {
    current: 0,
    previous: 0,
  }
  @Input() currentPeriod: string = 'empty'
  setPeriodText (): string {
    let newText = '';
    switch (this.currentPeriod) {
      case 'daily': newText = 'day'; break;
      case 'weekly': newText = 'week'; break;
      case 'monthly': newText = 'month'; break;
    }
    return newText;
  }
  //title to lowercase + delete spaces for styles
  getCardStyle(name: string): string {
    return name.toLowerCase().replace(/\s/g, '-');
  }
  ngOnChanges(): void {
    this.setPeriodText();
  }
}
