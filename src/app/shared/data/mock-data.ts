import { Advertiser } from '../models/user.model';
import { Service } from '../models/service.model';

export const MOCK_SERVICES: Service[] = [
    {
        id: '1',
        name: 'Americana',
        description: '',
        icon: 'camera_alt',
        price: 100
    },
    {
        id: '2',
        name: 'Anal',
        description: '',
        icon: 'videocam',
        price: 150
    },
    {
        id: '3',
        name: 'Atención hoteles',
        description: '',
        icon: 'brush',
        price: 80
    },
    {
        id: '4',
        name: 'Besos',
        description: '',
        icon: 'accessibility_new',
        price: 200
    },
    {
        id: '5',
        name: 'Lugar Propio',
        description: '',
        icon: 'accessibility_new',
        price: 200
    },
    {
        id: '6',
        name: 'Despedida de Soltero',
        description: '',
        icon: 'accessibility_new',
        price: 200
    },
    {
        id: '7',
        name: 'Masajes',
        description: '',
        icon: 'accessibility_new',
        price: 200
    },
    {
        id: '8',
        name: 'Oral con Condon',
        description: '',
        icon: 'accessibility_new',
        price: 200
    },
    {
        id: '9',
        name: 'Oral sin Condon',
        description: '',
        icon: 'accessibility_new',
        price: 200
    },
    {
        id: '10',
        name: 'Rusa',
        description: '',
        icon: 'accessibility_new',
        price: 200
    },
    {
        id: '11',
        name: 'Servicio a Domicilio',
        description: '',
        icon: 'accessibility_new',
        price: 200
    },
    {
        id: '12',
        name: 'Vaginal',
        description: '',
        icon: 'accessibility_new',
        price: 200
    },
    {
        id: '13',
        name: 'Viajes',
        description: '',
        icon: 'accessibility_new',
        price: 200
    }
];

export const MOCK_ADVERTISERS: Advertiser[] = [
    {
        id: '1',
        email: 'ana@example.com',
        type: 'advertiser',
        firstName: 'Ana',
        lastName: 'Silva',
        age: 25,
        gender: 'female',
        nationality: 'Chilean',
        rut: '12.345.678-9',
        identificationNumber: '123456789',
        artisticName: 'Anita Lens',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['1', '2'],
        gallery: [
            { id: '1', type: 'image', url: 'https://images.unsplash.com/photo-1542038784424-48ed74700c3d?w=800&q=80' },
            { id: '2', type: 'image', url: 'https://images.unsplash.com/photo-1554048612-387768052bf7?w=800&q=80' },
            { id: '3', type: 'image', url: 'https://images.unsplash.com/photo-1552168324-d612d77725e3?w=800&q=80' }
        ],
        socialMedia: {
            instagram: 'anitalens',
            website: 'www.anitalens.com'
        },
        description: 'Passionate photographer with 5 years of experience in portrait and event photography. I love capturing moments that last a lifetime.',
        likes: 120,
        isLikedByCurrentUser: false,
        isTransexual: false,
        servesTo: ['men', 'women', 'couples']
    },
    {
        id: '2',
        email: 'carlos@example.com',
        type: 'advertiser',
        firstName: 'Carlos',
        lastName: 'Mendez',
        age: 28,
        gender: 'male',
        nationality: 'Argentinian',
        rut: '23.456.789-0',
        identificationNumber: '987654321',
        artisticName: 'Charlie Vids',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['2'],
        gallery: [
            { id: '4', type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }
        ],
        socialMedia: {
            instagram: 'charlievids',
            twitter: 'charlie_v'
        },
        description: 'Creative videographer specializing in music videos and commercials. Let\'s bring your vision to life.',
        likes: 85,
        isLikedByCurrentUser: true,
        isTransexual: false,
        servesTo: ['men', 'women']
    },
    {
        id: '3',
        email: 'sofia@example.com',
        type: 'advertiser',
        firstName: 'Sofia',
        lastName: 'Lopez',
        age: 24,
        gender: 'female',
        nationality: 'Colombian',
        rut: '34.567.890-1',
        identificationNumber: '112233445',
        artisticName: 'Sofi Glam',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['3', '4'],
        gallery: [
            { id: '5', type: 'image', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80' },
            { id: '6', type: 'image', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80' }
        ],
        socialMedia: {
            instagram: 'sofiglam',
            tiktok: 'sofiglam_official'
        },
        description: 'Professional makeup artist and model. I can help you look your best for any occasion.',
        likes: 200,
        isLikedByCurrentUser: false,
        isTransexual: true,
        servesTo: ['men', 'women', 'couples', 'disabled']
    },
    {
        id: '4',
        email: 'maria@example.com',
        type: 'advertiser',
        firstName: 'Maria',
        lastName: 'Rodriguez',
        age: 26,
        gender: 'female',
        nationality: 'Mexican',
        rut: '45.678.901-2',
        identificationNumber: '556677889',
        artisticName: 'Mari Clicks',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['1'],
        gallery: [
            { id: '7', type: 'image', url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80' }
        ],
        socialMedia: {
            instagram: 'mariclicks',
            facebook: 'https://facebook.com/mariclicks'
        },
        description: 'Wedding and portrait photographer with a passion for natural light and candid moments.',
        likes: 150,
        isLikedByCurrentUser: false,
        isTransexual: false,
        servesTo: ['men', 'women', 'couples']
    },
    {
        id: '5',
        email: 'diego@example.com',
        type: 'advertiser',
        firstName: 'Diego',
        lastName: 'Torres',
        age: 30,
        gender: 'male',
        nationality: 'Peruvian',
        rut: '56.789.012-3',
        identificationNumber: '998877665',
        artisticName: 'Diego Frames',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['1', '2'],
        gallery: [
            { id: '8', type: 'image', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80' }
        ],
        socialMedia: {
            instagram: 'diegoframes',
            website: 'www.diegoframes.com'
        },
        description: 'Cinematic videographer and photographer. Specializing in corporate events and brand content.',
        likes: 95,
        isLikedByCurrentUser: false,
        isTransexual: false,
        servesTo: ['men', 'women']
    },
    {
        id: '6',
        email: 'valentina@example.com',
        type: 'advertiser',
        firstName: 'Valentina',
        lastName: 'Castro',
        age: 22,
        gender: 'female',
        nationality: 'Venezuelan',
        rut: '67.890.123-4',
        identificationNumber: '334455667',
        artisticName: 'Vale Beauty',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['3'],
        gallery: [
            { id: '9', type: 'image', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80' }
        ],
        socialMedia: {
            instagram: 'valebeauty',
            tiktok: 'valebeauty_mua'
        },
        description: 'Certified makeup artist specializing in bridal and editorial makeup. Let me enhance your natural beauty.',
        likes: 110,
        isLikedByCurrentUser: true,
        isTransexual: true,
        servesTo: ['men', 'women', 'couples']
    },
    {
        id: '7',
        email: 'lucas@example.com',
        type: 'advertiser',
        firstName: 'Lucas',
        lastName: 'Fernandez',
        age: 27,
        gender: 'male',
        nationality: 'Uruguayan',
        rut: '78.901.234-5',
        identificationNumber: '778899001',
        artisticName: 'Lucas Motion',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['2'],
        gallery: [
            { id: '10', type: 'image', url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80' }
        ],
        socialMedia: {
            instagram: 'lucasmotion',
            twitter: 'lucas_motion'
        },
        description: 'Motion graphics and video editing specialist. Creating stunning visual stories for brands.',
        likes: 60,
        isLikedByCurrentUser: false,
        isTransexual: false,
        servesTo: ['men', 'women', 'couples']
    },
    {
        id: '8',
        email: 'camila@example.com',
        type: 'advertiser',
        firstName: 'Camila',
        lastName: 'Reyes',
        age: 23,
        gender: 'female',
        nationality: 'Chilean',
        rut: '89.012.345-6',
        identificationNumber: '112233445',
        artisticName: 'Cami Model',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['4'],
        gallery: [
            { id: '11', type: 'image', url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80' }
        ],
        socialMedia: {
            instagram: 'camimodel',
            facebook: 'https://facebook.com/camimodel'
        },
        description: 'Fashion and commercial model with experience in runway and editorial work.',
        likes: 180,
        isLikedByCurrentUser: false,
        isTransexual: false,
        servesTo: ['men', 'women', 'couples']
    },
    {
        id: '9',
        email: 'pablo@example.com',
        type: 'advertiser',
        firstName: 'Pablo',
        lastName: 'Vargas',
        age: 29,
        gender: 'male',
        nationality: 'Argentinian',
        rut: '90.123.456-7',
        identificationNumber: '665544332',
        artisticName: 'Pablo Shots',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['1'],
        gallery: [
            { id: '12', type: 'image', url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80' }
        ],
        socialMedia: {
            instagram: 'pabloshots',
            website: 'www.pabloshots.com'
        },
        description: 'Street and urban photographer capturing the essence of city life and culture.',
        likes: 75,
        isLikedByCurrentUser: false,
        isTransexual: true,
        servesTo: ['men']
    },
    {
        id: '10',
        email: 'isabella@example.com',
        type: 'advertiser',
        firstName: 'Isabella',
        lastName: 'Martinez',
        age: 21,
        gender: 'female',
        nationality: 'Colombian',
        rut: '01.234.567-8',
        identificationNumber: '998877665',
        artisticName: 'Isa Glam',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['3', '4'],
        gallery: [
            { id: '13', type: 'image', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80' }
        ],
        socialMedia: {
            instagram: 'isaglam',
            tiktok: 'isaglam_beauty'
        },
        description: 'Makeup artist and influencer. Specializing in glamorous looks and special effects makeup.',
        likes: 250,
        isLikedByCurrentUser: true,
        isTransexual: false,
        servesTo: ['men', 'women', 'couples']
    },
    {
        id: '11',
        email: 'roberto@example.com',
        type: 'advertiser',
        firstName: 'Roberto',
        lastName: 'Gomez',
        age: 35,
        gender: 'male',
        nationality: 'Chilean',
        rut: '11.222.333-4',
        identificationNumber: '998877665',
        artisticName: 'Roberto MenOnly',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['1'],
        gallery: [],
        socialMedia: {},
        description: 'Specialized services for men only.',
        likes: 30,
        isLikedByCurrentUser: false,
        isTransexual: false,
        servesTo: ['men']
    },
    {
        id: '12',
        email: 'julia@example.com',
        type: 'advertiser',
        firstName: 'Julia',
        lastName: 'Roberts',
        age: 29,
        gender: 'female',
        nationality: 'Chilean',
        rut: '22.333.444-5',
        identificationNumber: '887766554',
        artisticName: 'Julia WomenOnly',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['3'],
        gallery: [],
        socialMedia: {},
        description: 'Exclusive services for women.',
        likes: 140,
        isLikedByCurrentUser: false,
        isTransexual: false,
        servesTo: ['women']
    },
    {
        id: '13',
        email: 'alex@example.com',
        type: 'advertiser',
        firstName: 'Alex',
        lastName: 'Morgan',
        age: 31,
        gender: 'male',
        nationality: 'Chilean',
        rut: '33.444.555-6',
        identificationNumber: '776655443',
        artisticName: 'Alex DisabledOnly',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['2'],
        gallery: [],
        socialMedia: {},
        description: 'Specialized care and services for disabled individuals.',
        likes: 20,
        isLikedByCurrentUser: false,
        isTransexual: false,
        servesTo: ['disabled']
    },
    {
        id: '14',
        email: 'sarah@example.com',
        type: 'advertiser',
        firstName: 'Sarah',
        lastName: 'Connor',
        age: 27,
        gender: 'female',
        nationality: 'Chilean',
        rut: '44.555.666-7',
        identificationNumber: '665544332',
        artisticName: 'Sarah CouplesOnly',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['1'],
        gallery: [],
        socialMedia: {},
        description: 'Photography sessions exclusively for couples.',
        likes: 90,
        isLikedByCurrentUser: false,
        isTransexual: false,
        servesTo: ['couples']
    },
    {
        id: '15',
        email: 'mike@example.com',
        type: 'advertiser',
        firstName: 'Mike',
        lastName: 'Tyson',
        age: 40,
        gender: 'male',
        nationality: 'Chilean',
        rut: '55.666.777-8',
        identificationNumber: '554433221',
        artisticName: 'Mike MenAndWomen',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['1', '2'],
        gallery: [],
        socialMedia: {},
        description: 'Services for both men and women.',
        likes: 55,
        isLikedByCurrentUser: false,
        isTransexual: false,
        servesTo: ['men', 'women']
    },
    {
        id: '16',
        email: 'clara@example.com',
        type: 'advertiser',
        firstName: 'Clara',
        lastName: 'Oswald',
        age: 28,
        gender: 'female',
        nationality: 'Chilean',
        rut: '66.777.888-9',
        identificationNumber: '443322110',
        artisticName: 'Clara WomenAndDisabled',
        profilePhotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
        identificationPhotoFrontUrl: '',
        identificationPhotoBackUrl: '',
        serviceIds: ['3', '2'],
        gallery: [],
        socialMedia: {},
        description: 'Specialized services for women and disabled individuals.',
        likes: 130,
        isLikedByCurrentUser: false,
        isTransexual: false,
        servesTo: ['women', 'disabled']
    }
];
