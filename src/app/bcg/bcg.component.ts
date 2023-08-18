import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialComponent } from '../social/social.component';
import { ProjectsComponent } from '../projects/projects.component';
import { MylabelsComponent } from '../mylabels/mylabels.component';

@Component({
  standalone: true,
  selector: 'app-bcg',
  templateUrl: './bcg.component.html',
  styleUrls: ['./bcg.component.css'],
  imports: [CommonModule, SocialComponent, ProjectsComponent, MylabelsComponent]
})
export class BcgComponent {

}
