import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Advertiser, AdvertiserService } from '../../../shared/models/user.model';
import { Service } from '../../../shared/models/service.model';
import { UserService } from '../../../shared/services/user.service';
import { OfferingService } from '../../../shared/services/offering.service';
import { Gallery } from '../gallery/gallery';
import { PriceFormatPipe } from '../../../shared/pipes/price-format.pipe';

@Component({
  selector: 'app-profile-detail',
  imports: [CommonModule, RouterModule, Gallery, PriceFormatPipe],
  templateUrl: './profile-detail.html',
  styleUrl: './profile-detail.css',
  standalone: true
})
export class ProfileDetail implements OnInit {
  advertiser?: Advertiser;
  includedServices: Service[] = [];
  additionalServices: Service[] = [];
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
          this.loadServices(advertiser.services);
        }
      });
    }

    this.offeringService.getServices().subscribe(services => {
      this.allServices = services;
    });
  }

  loadServices(advertiserServices: Advertiser['services']): void {
    this.offeringService.getServices().subscribe(allServices => {
      // Separate services into included and additional
      this.includedServices = advertiserServices
        .filter(advService => advService.incluido)
        .map(advService => {
          const service = allServices.find(s => s.id === advService.idServicio);
          return service || {
            id: advService.idServicio,
            name: advService.nombre,
            description: '',
            price: advService.precio
          };
        });

      this.additionalServices = advertiserServices
        .filter(advService => !advService.incluido)
        .map(advService => {
          const service = allServices.find(s => s.id === advService.idServicio);
          // Para servicios adicionales, el precio viene del advService (puede ser undefined)
          // Si encuentra el servicio base, usa su info pero reemplaza el precio con el del advService
          if (service) {
            return {
              ...service,
              price: advService.precio  // Usa el precio del advService (puede ser undefined)
            };
          }
          // Si no encuentra el servicio base, crea uno nuevo con el precio del advService
          return {
            id: advService.idServicio,
            name: advService.nombre,
            description: '',
            price: advService.precio  // Puede ser undefined
          };
        });
    });
  }

  getSocialMediaLinks(): { platform: string; url: string; iconType: 'instagram' | 'arsmate' | 'onlyfans' | 'tiktok' }[] {
    if (!this.advertiser?.socialMedia) return [];

    const links: { platform: string; url: string; iconType: 'instagram' | 'arsmate' | 'onlyfans' | 'tiktok' }[] = [];
    const sm = this.advertiser.socialMedia;

    if (sm.instagram && typeof sm.instagram === 'string') {
      links.push({ 
        platform: 'Instagram', 
        url: sm.instagram.startsWith('http') ? sm.instagram : `https://instagram.com/${sm.instagram}`, 
        iconType: 'instagram' 
      });
    }
    if (sm.arsmate && typeof sm.arsmate === 'string') {
      links.push({ 
        platform: 'Arsmate', 
        url: sm.arsmate.startsWith('http') ? sm.arsmate : `https://arsmate.com/${sm.arsmate}`, 
        iconType: 'arsmate' 
      });
    }
    if (sm.onlyfans && typeof sm.onlyfans === 'string') {
      links.push({ 
        platform: 'OnlyFans', 
        url: sm.onlyfans.startsWith('http') ? sm.onlyfans : `https://onlyfans.com/${sm.onlyfans}`, 
        iconType: 'onlyfans' 
      });
    }
    if (sm.tiktok && typeof sm.tiktok === 'string') {
      links.push({ 
        platform: 'TikTok', 
        url: sm.tiktok.startsWith('http') ? sm.tiktok : `https://tiktok.com/@${sm.tiktok}`, 
        iconType: 'tiktok' 
      });
    }

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

  getWhatsAppUrl(): string {
    if (!this.advertiser?.phoneNumber) return '#';
    // Remove spaces, dashes, and keep only numbers and +
    let phoneNumber = this.advertiser.phoneNumber.replace(/\s+/g, '').replace(/-/g, '');
    // If it starts with +56, remove the + for WhatsApp URL
    if (phoneNumber.startsWith('+56')) {
      phoneNumber = phoneNumber.substring(1);
    }
    // Remove any remaining non-numeric characters except the leading +
    phoneNumber = phoneNumber.replace(/[^\d]/g, '');
    const message = encodeURIComponent(`Hola ${this.advertiser.artisticName}, me interesa contactarte.`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }

  openMessage(): void {
    // TODO: Implementar buzon de mensajes privado
    alert('Funcionalidad de mensajería privada próximamente disponible');
  }
}
