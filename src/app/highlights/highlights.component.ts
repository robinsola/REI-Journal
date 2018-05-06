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
  @Input() childStoryList: Story[];
  @Output() clickSender = new EventEmitter();

  constructor(private router: Router, private storyService: StoryService){}

  ngOnInit() {
    this.childStoryList = this.storyService.getStories()
  }

  readBtnClicked(storyToRead: Story) {
    this.router.navigate(['childStoryList', storyToRead.id]);
  };

}
