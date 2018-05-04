import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})

export class HighlightsComponent {
  @Input() childStoryList: Story[];
}

// export class HighlightsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
