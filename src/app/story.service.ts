import { Injectable } from '@angular/core';
import { Story } from './models/story.model';
import { STORIES } from './mock-articles';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class StoryService {
  stories: FirebaseListObservable<any[]>;
  
  constructor(private database: AngularFireDatabase) {
    this.stories = database.list('stories');
  }

  getStories() {
    return this.stories;
  }

  getStoryById(storyId: number){
    for(let i=0; i<= STORIES.length - 1; i++) {
      if (STORIES[i].id === storyId) {
        return STORIES[i];
      }
    }
  }
}
