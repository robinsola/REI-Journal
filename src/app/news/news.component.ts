import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent {
  @Input() childStoryList: Story[];
  @Output() clickSender = new EventEmitter();

  readBtnClicked(storyToRead: Story) {
    this.clickSender.emit(storyToRead);
  }
}


// export class NewsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
