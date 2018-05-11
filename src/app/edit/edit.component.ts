import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../models/story.model';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [StoryService]
})
export class EditComponent implements OnInit {
  @Input() selectedStory;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }

  beginUpdatingStory(storyToUpdate) {
    this.storyService.updateStory(storyToUpdate);
  }

}
