import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-full-story',
  templateUrl: './full-story.component.html',
  styleUrls: ['./full-story.component.css']
})

export class FullStoryComponent {
  @Input() childSelectedStory: Story;
  @Output() sendStory = new EventEmitter;

  submitForm(title: string, author: string, date: string, article: string, rating: string, comment: string) {
    let newStory: Story = new Story(title, author, date, article, parseInt(rating), comment);
    this.sendStory.emit(newStory);
  }
}

// export class FullStoryComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
