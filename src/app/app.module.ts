import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavTopicsComponent } from './nav-topics/nav-topics.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { NewsComponent } from './news/news.component';
import { GearComponent } from './gear/gear.component';
import { SkillsComponent } from './skills/skills.component';
import { FullStoryComponent } from './full-story/full-story.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    NavTopicsComponent,
    HighlightsComponent,
    NewsComponent,
    GearComponent,
    SkillsComponent,
    FullStoryComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
