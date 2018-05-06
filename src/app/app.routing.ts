import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighlightsComponent } from './highlights/highlights.component';
import { FullStoryComponent } from './full-story/full-story.component';

const appRoutes: Routes = [
  {
    path: 'highlights',
    component: HighlightsComponent
  },
  {
    path: 'childStoryList/:id',
    component: FullStoryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
