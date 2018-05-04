import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css']
})

export class GearComponent {
  @Input() childStoryList: Story;
}

// export class GearComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
