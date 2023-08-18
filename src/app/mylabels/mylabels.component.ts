import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChipModule } from 'primeng/chip';

@Component({
  standalone: true,
  selector: 'app-mylabels',
  templateUrl: './mylabels.component.html',
  styleUrls: ['./mylabels.component.css'],
  imports: [ChipModule, CommonModule]
})
export class MylabelsComponent {

}
