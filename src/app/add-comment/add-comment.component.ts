import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
    @Output() sendComment = new EventEmitter();

  submitComment(name: string, post: string, rating: string) {
    let newComment: Comment = new Comment(name, post, rating);
    this.sendComment.emit(newComment);
  }

  constructor() { }

  ngOnInit() {
  }

}
