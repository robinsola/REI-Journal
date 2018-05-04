import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavTopicsComponent } from './nav-topics/nav-topics.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { NewsComponent } from './news/news.component';
import { GearComponent } from './gear/gear.component';


@NgModule({
  declarations: [
    AppComponent,
    NavTopicsComponent,
    HighlightsComponent,
    NewsComponent,
    GearComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
