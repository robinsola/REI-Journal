import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() selectedStory;

  constructor() { }

  ngOnInit() {
  }

}
