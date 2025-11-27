import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Advertiser } from '../../../shared/models/user.model';
import { Service } from '../../../shared/models/service.model';
import { UserService } from '../../../shared/services/user.service';
import { OfferingService } from '../../../shared/services/offering.service';
import { BoardFilter } from '../board-filter/board-filter';
import { AdvertiserCard } from '../advertiser-card/advertiser-card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-board-list',
  imports: [CommonModule, BoardFilter, AdvertiserCard, RouterModule],
  templateUrl: './board-list.html',
  styleUrl: './board-list.css',
  standalone: true
})
export class BoardList implements OnInit {
  advertisers: Advertiser[] = [];
  filteredAdvertisers: Advertiser[] = [];
  services: Service[] = [];
  selectedServiceIds: string[] = [];

  constructor(
    private userService: UserService,
    private offeringService: OfferingService
  ) { }

  ngOnInit(): void {
    this.userService.getAdvertisers().subscribe(advertisers => {
      this.advertisers = advertisers;
      this.filteredAdvertisers = advertisers;
    });

    this.offeringService.getServices().subscribe(services => {
      this.services = services;
    });
  }

  onFilterChange(criteria: any): void {
    const { serviceIds, nationality, servesTo, sortBy } = criteria;
    this.selectedServiceIds = serviceIds;

    this.filteredAdvertisers = this.advertisers.filter(advertiser => {
      const matchesService = serviceIds.length === 0 || serviceIds.every((id: string) => advertiser.serviceIds.includes(id));
      const matchesNationality = nationality === 'all' ||
        (nationality === 'national' && advertiser.nationality === 'Chilean') ||
        (nationality === 'foreign' && advertiser.nationality !== 'Chilean');

      // Filter by servesTo
      let matchesServesTo = true; // Default to true (Show All)

      if (servesTo && servesTo.length > 0) {
        if (!advertiser.servesTo || advertiser.servesTo.length === 0) {
          matchesServesTo = false;
        } else {
          // Check if the advertiser serves ALL of the selected target audiences (AND logic)
          matchesServesTo = servesTo.every((type: string) => advertiser.servesTo?.includes(type as any));
        }
      }

      return matchesService && matchesNationality && matchesServesTo;
    });

    // Apply sorting
    if (sortBy === 'age') {
      // Sort by age (youngest to oldest)
      this.filteredAdvertisers.sort((a, b) => {
        const ageA = a.age || 0;
        const ageB = b.age || 0;
        return ageA - ageB;
      });
    } else if (sortBy === 'likes') {
      // Sort by likes (most likes to least likes)
      this.filteredAdvertisers.sort((a, b) => {
        const likesA = a.likes || 0;
        const likesB = b.likes || 0;
        return likesB - likesA; // Descending order
      });
    }
  }
}
