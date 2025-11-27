import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Advertiser } from '../../../shared/models/user.model';
import { Service } from '../../../shared/models/service.model';
import { UserService } from '../../../shared/services/user.service';
import { OfferingService } from '../../../shared/services/offering.service';
import { Gallery } from '../gallery/gallery';

@Component({
  selector: 'app-profile-detail',
  imports: [CommonModule, RouterModule, Gallery],
  templateUrl: './profile-detail.html',
  styleUrl: './profile-detail.css',
  standalone: true
})
export class ProfileDetail implements OnInit {
  advertiser?: Advertiser;
  services: Service[] = [];
  allServices: Service[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private offeringService: OfferingService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getAdvertiserById(id).subscribe(advertiser => {
        this.advertiser = advertiser;
        if (advertiser) {
          this.loadServices(advertiser.serviceIds);
        }
      });
    }

    this.offeringService.getServices().subscribe(services => {
      this.allServices = services;
    });
  }

  loadServices(serviceIds: string[]): void {
    this.offeringService.getServices().subscribe(allServices => {
      this.services = allServices.filter(s => serviceIds.includes(s.id));
    });
  }

  getSocialMediaLinks(): { platform: string; url: string; icon: string }[] {
    if (!this.advertiser?.socialMedia) return [];

    const links: { platform: string; url: string; icon: string }[] = [];
    const sm = this.advertiser.socialMedia;

    if (sm.instagram) links.push({ platform: 'Instagram', url: `https://instagram.com/${sm.instagram}`, icon: '📷' });
    if (sm.facebook) links.push({ platform: 'Facebook', url: sm.facebook, icon: '👤' });
    if (sm.twitter) links.push({ platform: 'Twitter', url: `https://twitter.com/${sm.twitter}`, icon: '🐦' });
    if (sm.tiktok) links.push({ platform: 'TikTok', url: `https://tiktok.com/@${sm.tiktok}`, icon: '🎵' });
    if (sm.website) links.push({ platform: 'Website', url: sm.website, icon: '🌐' });

    return links;
  }

  toggleLike(): void {
    if (this.advertiser) {
      this.advertiser.isLikedByCurrentUser = !this.advertiser.isLikedByCurrentUser;
      if (this.advertiser.isLikedByCurrentUser) {
        this.advertiser.likes++;
      } else {
        this.advertiser.likes--;
      }
    }
  }
}
