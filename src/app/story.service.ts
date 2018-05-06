import { Injectable } from '@angular/core';
import { Story } from './models/story.model';
import { STORIES } from './mock-articles';


@Injectable()
export class StoryService {

  constructor() { }

  getStories() {
    return STORIES;
  }

  getStoryById(childSelectedStoryID: number){
    for(let i=0; i<= STORIES.length - 1; i++) {
      if (STORIES[i].id === childSelectedStoryID) {
        return STORIES[i];
      }
    }
  }

}
