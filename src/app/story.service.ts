import { Injectable } from '@angular/core';
import { Story } from './models/story.model';
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

  addStory(newStory: Story) {
    this.stories.push(newStory);
  }

  getStoryById(storyId: string) {
    return this.database.object('/stories/' + storyId);
  }

  updateStory(localUpdatedStory) {
    let storyEntryInFirebase = this.getStoryById(localUpdatedStory.$key);
    storyEntryInFirebase.update({title: localUpdatedStory.title, author: localUpdatedStory.author, date: localUpdatedStory.date, imageUrl: localUpdatedStory.imageUrl});
  }

  deleteStory(localStoryToDelete) {
    let storyEntryInFirebase = this.getStoryById(localStoryToDelete.$key);
    storyEntryInFirebase.remove();
  }

}
