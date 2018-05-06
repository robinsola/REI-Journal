import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../models/story.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-full-story',
  templateUrl: './full-story.component.html',
  styleUrls: ['./full-story.component.css']
})

export class FullStoryComponent implements OnInit {
  @Input() childSelectedStory: Story;
  childSelectedStoryID: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.childSelectedStoryID = parseInt(urlParameters['id']);
    });
  }
  // @Output() sendStory = new EventEmitter;

  // submitForm(title: string, author: string, date: string, article: string, rating: string, comment: string, id: number) {
  //   let newStory: Story = new Story(title, author, date, article, parseInt(rating), comment, id);
  //   this.sendStory.emit(newStory);
  // }
}

// export class FullStoryComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
