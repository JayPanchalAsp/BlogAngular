import { Component } from '@angular/core';
import { RowComponent } from "../shared/row/row.component";
import { TeamMemberComponent } from "./team-member/team-member.component";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RowComponent, TeamMemberComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
