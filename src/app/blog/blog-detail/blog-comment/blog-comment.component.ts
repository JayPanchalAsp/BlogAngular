import { Component } from '@angular/core';
import { BlogCommentCardComponent } from "./blog-comment-card/blog-comment-card.component";

@Component({
  selector: 'app-blog-comment',
  standalone: true,
  imports: [BlogCommentCardComponent],
  templateUrl: './blog-comment.component.html',
  styleUrl: './blog-comment.component.css'
})
export class BlogCommentComponent {

}
