import { Component } from '@angular/core';
import { RecentPostCardComponent } from "./recent-post-card/recent-post-card.component";

@Component({
  selector: 'app-recent-post',
  standalone: true,
  imports: [RecentPostCardComponent],
  templateUrl: './recent-post.component.html',
  styleUrl: './recent-post.component.css'
})
export class RecentPostComponent {

}
