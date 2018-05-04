import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent {
  @Input() childStoryList: Story[];
}


// export class NewsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
