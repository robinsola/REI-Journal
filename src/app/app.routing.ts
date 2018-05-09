import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FullStoryComponent } from './full-story/full-story.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'childStoryList/:id',
    component: FullStoryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
