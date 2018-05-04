import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavTopicsComponent } from './nav-topics/nav-topics.component';


@NgModule({
  declarations: [
    AppComponent,
    NavTopicsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
