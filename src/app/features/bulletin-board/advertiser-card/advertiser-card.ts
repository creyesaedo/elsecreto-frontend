import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Advertiser } from '../../../shared/models/user.model';

import { Service } from '../../../shared/models/service.model';

@Component({
  selector: 'app-advertiser-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './advertiser-card.html',
  styleUrl: './advertiser-card.css',
  standalone: true
})
export class AdvertiserCard {
  @Input() advertiser!: Advertiser;

  getServesToLabels(): string {
    if (!this.advertiser.servesTo || this.advertiser.servesTo.length === 0) {
      return '';
    }
    const labels: { [key: string]: string } = {
      'men': 'Hombres',
      'women': 'Mujeres',
      'disabled': 'Discapacitados',
      'couples': 'Parejas'
    };
    return this.advertiser.servesTo.map(key => labels[key] || key).join(', ');
  }


}
