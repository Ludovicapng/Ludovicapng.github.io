import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Bottone } from '../types/bottone.model';

@Component({
  standalone: true,
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [ButtonModule, CommonModule],
})
export class SocialComponent {

  bottoni: Bottone[] = [
    {
    redirectUrl: 'https://discord.gg/y5ukgMD6vx',
    icon: 'pi pi-discord',
    style: 'p-button-rounded p-button-text p-ripple'
    },
    {
      redirectUrl: 'https://github.com/Ludovicapng',
      icon: 'pi pi-github',
      style: 'p-button-rounded p-button-text p-ripple'
    },
    {
      redirectUrl: 'mailto:ludo_sec@protonmail.com',
      icon: 'pi pi-at',
      style: 'p-button-rounded p-button-text p-ripple'
    },
    {
      redirectUrl: 'https://www.linkedin.com/in/ludovicap/',
      icon: 'pi pi-linkedin',
      style: 'p-button-rounded p-button-text p-ripple'
    },
  ];

  handleClick(event: Event, url: string): void {
    const clickedElement = event.target as HTMLElement;
    const isButton =
      clickedElement.classList.contains('p-button') ||
      clickedElement.closest('.p-button') !== null;

    if (isButton) {
      window.open(url, '_blank');
    }
  }
}
