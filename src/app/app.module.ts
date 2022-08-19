import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardUserComponent } from './card-user/card-user.component';
import { CardTrackerComponent } from './card-tracker/card-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    CardUserComponent,
    CardTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
