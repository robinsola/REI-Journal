import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { NewsComponent } from './news/news.component';
import { GearComponent } from './gear/gear.component';
import { SkillsComponent } from './skills/skills.component';
import { FullStoryComponent } from './full-story/full-story.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightsComponent,
    NewsComponent,
    GearComponent,
    SkillsComponent,
    FullStoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
