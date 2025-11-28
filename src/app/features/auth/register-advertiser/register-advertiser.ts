import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
import { OfferingService } from '../../../shared/services/offering.service';
import { Service } from '../../../shared/models/service.model';
import { Advertiser, AdvertiserService } from '../../../shared/models/user.model';

@Component({
  selector: 'app-register-advertiser',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register-advertiser.html',
  styleUrl: './register-advertiser.css',
  standalone: true
})
export class RegisterAdvertiser implements OnInit {
  registerForm!: FormGroup;
  services: Service[] = [];
  profilePhotoPreview: string | null = null;
  idFrontPreview: string | null = null;
  idBackPreview: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private offeringService: OfferingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      gender: ['male', Validators.required],
      isTransexual: [false],
      servesTo: [['men', 'women', 'disabled', 'couples']],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      nationality: ['', Validators.required],
      rut: ['', Validators.required],
      identificationNumber: ['', Validators.required],
      artisticName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required],
      serviceIds: [[], Validators.required],
      instagram: [''],
      facebook: [''],
      twitter: [''],
      tiktok: [''],
      website: ['']
    });

    this.offeringService.getServices().subscribe(services => {
      this.services = services;
    });
  }

  onFileSelect(event: Event, type: 'profile' | 'idFront' | 'idBack'): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (type === 'profile') {
          this.profilePhotoPreview = result;
        } else if (type === 'idFront') {
          this.idFrontPreview = result;
        } else {
          this.idBackPreview = result;
        }
      };

      reader.readAsDataURL(file);
    }
  }

  toggleService(serviceId: string): void {
    const currentServices = this.registerForm.get('serviceIds')?.value || [];
    const index = currentServices.indexOf(serviceId);

    if (index > -1) {
      currentServices.splice(index, 1);
    } else {
      currentServices.push(serviceId);
    }

    this.registerForm.patchValue({ serviceIds: currentServices });
  }

  isServiceSelected(serviceId: string): boolean {
    const services = this.registerForm.get('serviceIds')?.value || [];
    return services.includes(serviceId);
  }

  convertServiceIdsToServices(serviceIds: string[]): AdvertiserService[] {
    return serviceIds.map(id => {
      const service = this.services.find(s => s.id === id);
      return {
        idServicio: id,
        nombre: service?.name || '',
        incluido: false, // Default to false, can be changed later
        precio: service?.price
      };
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid && this.profilePhotoPreview && this.idFrontPreview && this.idBackPreview) {
      const formValue = this.registerForm.value;

      const newAdvertiser: Advertiser = {
        id: '',
        email: formValue.email,
        type: 'advertiser',
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        age: formValue.age,
        gender: formValue.gender,
        nationality: formValue.nationality,
        rut: formValue.rut,
        identificationNumber: formValue.identificationNumber,
        artisticName: formValue.artisticName,
        phoneNumber: formValue.phoneNumber,
        profilePhotoUrl: this.profilePhotoPreview,
        identificationPhotoFrontUrl: this.idFrontPreview,
        identificationPhotoBackUrl: this.idBackPreview,
        services: this.convertServiceIdsToServices(formValue.serviceIds),
        isTransexual: formValue.isTransexual,
        servesTo: formValue.servesTo,
        gallery: [],
        socialMedia: {
          instagram: formValue.instagram,
          facebook: formValue.facebook,
          twitter: formValue.twitter,
          tiktok: formValue.tiktok,
          website: formValue.website
        },
        description: formValue.description,
        likes: 0,
        isLikedByCurrentUser: false
      };

      this.userService.registerAdvertiser(newAdvertiser).subscribe(() => {
        alert('Registration successful! Redirecting to home...');
        this.router.navigate(['/']);
      });
    } else {
      alert('Please fill all required fields and upload all required photos.');
    }
  }
}
