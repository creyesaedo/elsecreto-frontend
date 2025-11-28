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
    const { serviceIds, serviceIncluded, nationality, servesTo, gender, sortBy } = criteria;
    this.selectedServiceIds = serviceIds;

    this.filteredAdvertisers = this.advertisers.filter(advertiser => {
      // Filter by services
      let matchesService = true;
      if (serviceIds.length > 0) {
        matchesService = serviceIds.every((id: string) => {
          // Check if advertiser has this service
          const hasService = advertiser.services.some(s => s.idServicio === id);
          if (!hasService) {
            return false;
          }
          
          // Check if "incluido" filter is set for this service
          const isIncludedFilter = serviceIncluded?.[id];
          if (isIncludedFilter === true) {
            // If filter requires "incluido", check that the service is included
            const service = advertiser.services.find(s => s.idServicio === id);
            return service?.incluido === true;
          }
          // If filter doesn't require "incluido", any service with this id matches
          return true;
        });
      }
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

      // Filter by gender
      let matchesGender = true; // Default to true (Show All)
      if (gender && gender.length > 0) {
        matchesGender = gender.some((g: string) => {
          if (g === 'male') {
            return advertiser.gender === 'male' && advertiser.isTransexual !== true;
          } else if (g === 'female') {
            return advertiser.gender === 'female' && advertiser.isTransexual !== true;
          } else if (g === 'transexual') {
            return advertiser.isTransexual === true;
          }
          return false;
        });
      }

      return matchesService && matchesNationality && matchesServesTo && matchesGender;
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
