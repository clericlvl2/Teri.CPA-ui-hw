import { Injectable } from '@angular/core';
import { Activity } from 'src/app/models/time-data-interface';
import ActivityData from 'src/assets/json/data.json';

@Injectable({
  providedIn: 'root'
})
export class ActivityProviderService {
  constructor() { }
  // TODO rewrite service to async operations
  private timeData: Activity[] = ActivityData;
  private currentPeriod: string = 'daily';
  getActivityData(): Activity[] {
    return this.timeData;
  };
  setPeriod(newPeriod: string): void {
    this.currentPeriod = newPeriod;
    console.log(this.currentPeriod);
  };
  getPeriod(): string {
    return this.currentPeriod;
  };
}
