import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeekComponent } from './week/week.component';
import { DayComponent } from './day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekComponent,
    DayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
