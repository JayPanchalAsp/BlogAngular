import { Component } from '@angular/core';
import { AuthorCardComponent } from "../../author-card/author-card.component";
import { SearchComponent } from "../../shared/search/search.component";
import { RecentPostComponent } from "../recent-post/recent-post.component";
import { TagsComponent } from "../../shared/tags/tags.component";
import { PageTitleComponent } from "../../shared/page-title/page-title.component";
import { BlogDetailSectionComponent } from "./blog-detail-section/blog-detail-section.component";
import { BlogCommentComponent } from "./blog-comment/blog-comment.component";
import { BlogCommentFormComponent } from "./blog-comment/blog-comment-form/blog-comment-form.component";

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [AuthorCardComponent, SearchComponent, RecentPostComponent, TagsComponent, PageTitleComponent, BlogDetailSectionComponent, BlogCommentComponent, BlogCommentFormComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {

}
