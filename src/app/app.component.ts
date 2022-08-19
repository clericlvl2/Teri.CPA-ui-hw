import { Component } from '@angular/core';
import { ActivityPeriod, Activity } from 'src/app/models/time-data-interface';
import { ActivityProviderService } from "./activity-provider.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private activityService: ActivityProviderService) {}
  activityList: Activity[] = this.activityService.getActivityData();
  activityPeriod: string = this.activityService.getPeriod();
  getTimeValues (item: Activity): ActivityPeriod {
    return item.timeframes[this.activityPeriod as keyof typeof item.timeframes];
  }
  title = 'angular-project';
}
