import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [CardModule, ButtonModule, CommonModule]
})
export class ProjectsComponent{
  constructor(private router: Router) { }

  handleClick() {
    this.router.navigate(['/projects']);
  }
  
}
