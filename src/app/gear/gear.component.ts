import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css']
})

export class GearComponent {
  @Input() childStoryList: Story;
  @Output() clickSender = new EventEmitter();

  readBtnClicked(storyToRead: Story) {
    this.clickSender.emit(storyToRead);
  }
}

// export class GearComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
