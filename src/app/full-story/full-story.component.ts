import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../models/story.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StoryService } from '../story.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-full-story',
  templateUrl: './full-story.component.html',
  styleUrls: ['./full-story.component.css'],
  providers: [StoryService]
})

export class FullStoryComponent implements OnInit {
  Comments: Comment[] = [
    new Comment('Buddy Miller', 'Sweet article, right on!', '5')
  ];

  addComment(newComment: Comment) {
    this.Comments.push(newComment);
  }

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
