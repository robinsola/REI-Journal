import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../models/story.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})

export class HighlightsComponent {
  @Input() childStoryList: Story[];
  @Output() clickSender = new EventEmitter();

  constructor(private router: Router){}

  readBtnClicked(storyToRead: Story) {
    this.router.navigate(['childStoryList', storyToRead.id]);
  };
}

// export class HighlightsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
