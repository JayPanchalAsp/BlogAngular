import { Component } from '@angular/core';
import { SingleTrandingComponent } from "./single-tranding/single-tranding.component";
import { RowComponent } from "../../shared/row/row.component";
import { PhotoPostentryTrendingComponent } from "./photo-postentry-trending/photo-postentry-trending.component";
import { TextPostTrendingComponent } from "./text-post-trending/text-post-trending.component";
import { CategoryTrendingSectionComponent } from "./category-trending-section/category-trending-section.component";

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [SingleTrandingComponent, RowComponent, PhotoPostentryTrendingComponent, TextPostTrendingComponent, CategoryTrendingSectionComponent],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent {

}
