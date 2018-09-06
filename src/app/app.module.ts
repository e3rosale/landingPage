import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalendarLessonsComponent } from './calendar-lessons/calendar-lessons.component';
import { LessonContainerComponent } from './lesson-container/lesson-container.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarLessonsComponent,
    LessonContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
