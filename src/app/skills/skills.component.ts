import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
  @Input() childStoryList: Story[];
  @Output() clickSender = new EventEmitter();

  readBtnClicked(storyToRead: Story) {
    this.clickSender.emit(storyToRead);
  }
}


// export class SkillsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
