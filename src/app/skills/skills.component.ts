import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
  @Input() childStoryList: Story[];
}


// export class SkillsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
