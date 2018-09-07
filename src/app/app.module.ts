import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalendarLessonsComponent } from './calendar-lessons/calendar-lessons.component';
import { LessonContainerComponent } from './lesson-container/lesson-container.component';
import { TimelyResourcesComponent } from './timely-resources/timely-resources.component';
import { ResourceContainerComponent } from './resource-container/resource-container.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarLessonsComponent,
    LessonContainerComponent,
    TimelyResourcesComponent,
    ResourceContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
