import { Component } from '@angular/core';
import { AboutsectionComponent } from "../aboutsection/aboutsection.component";
import { TeamComponent } from "../team/team.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutsectionComponent, TeamComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
