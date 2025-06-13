import { Component, Input } from '@angular/core';
import { PageTitleComponent } from "../shared/page-title/page-title.component";
import { BlogCardComponent } from "./blog-card/blog-card.component";
import { PaginationComponent } from "../shared/pagination/pagination.component";
import { AuthorCardComponent } from "../author-card/author-card.component";
import { SearchComponent } from "../shared/search/search.component";
import { RecentPostComponent } from "./recent-post/recent-post.component";
import { TagsComponent } from "../shared/tags/tags.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PageTitleComponent, BlogCardComponent, PaginationComponent, AuthorCardComponent, SearchComponent, RecentPostComponent, TagsComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
}
