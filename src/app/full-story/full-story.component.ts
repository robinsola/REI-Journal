import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../models/story.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-full-story',
  templateUrl: './full-story.component.html',
  styleUrls: ['./full-story.component.css'],
  providers: [StoryService]
})

export class FullStoryComponent implements OnInit {
  storyId: number;
  storyToDisplay: Story;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private storyService: StoryService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.storyId = parseInt(urlParameters['id']);
    });
    this.storyToDisplay = this.storyService.getStoryById(this.storyId)
  }
  // @Output() sendStory = new EventEmitter;

  // submitForm(title: string, author: string, date: string, article: string, rating: string, comment: string, id: number) {
  //   let newStory: Story = new Story(title, author, date, article, parseInt(rating), comment, id);
  //   this.sendStory.emit(newStory);
  // }
}
