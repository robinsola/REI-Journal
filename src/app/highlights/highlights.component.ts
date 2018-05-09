import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../models/story.model';
import { Router } from '@angular/router';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css'],
  providers: [StoryService]
})

export class HighlightsComponent implements OnInit {
    stories: Story[];
    currentRoute: string = this.router.url;
    

  constructor(private router: Router, private storyService: StoryService){}

  ngOnInit() {
    this.stories = this.storyService.getStories()
  }

  readDetails(clickedStory: Story) {
    this.router.navigate(['stories', clickedStory.id]);
  };

}
