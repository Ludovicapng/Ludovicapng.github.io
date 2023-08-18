import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Card } from 'primeng/card';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { Ripple } from 'primeng/ripple';
import { SocialComponent } from '../social/social.component';
import { CommonModule } from '@angular/common';
import { Progetto } from '../types/progetto.model';

@Component({
  standalone: true,
  selector: 'app-pjspreview',
  templateUrl: './pjspreview.component.html',
  styleUrls: ['./pjspreview.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [CardModule, ButtonModule, SocialComponent, CommonModule],
})
export class PjspreviewComponent {
  progetti: Progetto[] = [
    {
      header: 'T3RRA3032',
      subheader: 'A Text-based game made in Java',
      description:
        'T3RRA3032 is a vintage game with ASCII graphics made using Java and JDBC. It was the final team project of the QiBit Java Academy. | T3RRA3032 è un gioco retró con grafica ASCII, realizzato con Java e JDBC. È stato il progetto finale, in team, della QiBit Java Academy.',
      imgUrl:
        'https://user-images.githubusercontent.com/125297085/227339053-a6b41207-50d5-4f7d-9539-84615fb21c2a.png',
      buttonLabel: 'github repo',
      icon: 'pi pi-github',
      redirectUrl: 'https://github.com/LudovicaPangrazio/T3RRA3032',
    },
    {
      header: 'TechTeam Solutions',
      subheader: 'A Website for a Community of Developers',
      description:
        'TechTeam Solutions is an international community - a platform for both junior and senior developers, cybersecurity and AI enthusiasts. | TechTeam Solutions è una community internazionale - una piattaforma per junior e senior developers, per appassionati di cybersecurity e di AI.',
      imgUrl:
        'https://i.gyazo.com/92750918af2544743ada19064f06d686.png',
      buttonLabel: 'coming soon',
      icon: 'pi pi-wrench',
      redirectUrl: 'https://discord.gg/y5ukgMD6vx', 
    }
  ];

  constructor(private router: Router) {}

  handleClick(event: Event, url: string): void {
    const clickedElement = event.target as HTMLElement;
    const isButton =
      clickedElement.classList.contains('p-button') ||
      clickedElement.closest('.p-button') !== null;

    if (isButton) {
      window.open(url, '_blank');
    }
  }

  redirect(location: string): void {
    this.router.navigate([location]);
  }
}
