import { Component } from '@angular/core';
import TimeData from 'src/assets/json/data.json';
import { TimeInterface } from 'src/app/time-data-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPeriod: string = 'daily'
  activityDataList: TimeInterface[] = TimeData
  // get period after click event of card-user
  getPeriod (newPeriod: string) {
    this.currentPeriod = newPeriod
  }
  title = 'Teri-CPA-angular-hw'
}
