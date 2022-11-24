import { Component } from '@angular/core';
import { ActivityProviderService } from "../activity-provider.service";

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent {
  constructor(private activityService: ActivityProviderService) {}
  updatePeriod(item: string): void {
    this.activityService.setPeriod(item);
  }
}
