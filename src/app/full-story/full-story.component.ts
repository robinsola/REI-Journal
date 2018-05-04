import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-full-story',
  templateUrl: './full-story.component.html',
  styleUrls: ['./full-story.component.css']
})

export class FullStoryComponent {
  @Input() childSelectedStory: Story;

}

// export class FullStoryComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
