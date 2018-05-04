import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})

export class HighlightsComponent {
  @Input() childStoryList: Story[];
  @Output() clickSender = new EventEmitter();

  editBtnClicked(storyToRead: Story) {
    this.clickSender.emit(storyToRead);
  }
}

// export class HighlightsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
