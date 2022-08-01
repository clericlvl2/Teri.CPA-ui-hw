import { Component } from '@angular/core';
import TimeData from 'src/assets/json/data.json';
import { TimeInterface } from 'src/app/time-data-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Teri-CPA-angular-hw';
}
