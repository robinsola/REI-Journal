import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../models/story.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StoryService } from '../story.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-full-story',
  templateUrl: './full-story.component.html',
  styleUrls: ['./full-story.component.css'],
  providers: [StoryService]
})

export class FullStoryComponent implements OnInit {
  storyId: string;
  storyToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private storyService: StoryService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.storyId = urlParameters['id'];
    });
    this.storyToDisplay = this.storyService.getStoryById(this.storyId);
  }
}
