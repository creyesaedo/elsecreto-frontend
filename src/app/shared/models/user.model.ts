export type UserType = 'advertiser' | 'client';

export interface User {
    id: string;
    email: string;
    password?: string; // Mock
    type: UserType;
}

export interface GalleryItem {
    id: string;
    type: 'image' | 'video';
    url: string;
    title?: string;
}

export interface SocialMediaLinks {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    website?: string;
    tiktok?: string;
}

export interface AdvertiserService {
    idServicio: string;
    nombre: string;
    incluido: boolean;
    precio?: number;
}

export interface Advertiser extends User {
    firstName: string;
    lastName: string;
    age: number;
    gender: 'male' | 'female';
    nationality: string;
    rut: string;
    identificationNumber: string;
    artisticName: string;
    phoneNumber: string;
    profilePhotoUrl: string;
    identificationPhotoFrontUrl: string;
    identificationPhotoBackUrl: string;
    services: AdvertiserService[];
    gallery: GalleryItem[];
    socialMedia: SocialMediaLinks;
    description: string;
    likes: number;
    isLikedByCurrentUser: boolean;
    isTransexual?: boolean;
    servesTo?: ('men' | 'women' | 'disabled' | 'couples')[];
}

export interface Client extends User {
    username?: string;
}

export interface Review {
    id: string;
    advertiserId: string;
    clientId: string;
    clientName: string;
    comment: string;
    date: Date;
}
