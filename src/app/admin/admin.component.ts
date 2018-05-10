import { Component, OnInit } from '@angular/core';
import { Story } from '../models/story.model';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [StoryService]
})
export class AdminComponent implements OnInit {

  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }

  submitForm(title: string, author: string, date: string, article: string, rating: number, category: string) {
    let newStory: Story = new Story(title, author, date, article, rating, category);
    this.storyService.addStory(newStory);
  }

}
