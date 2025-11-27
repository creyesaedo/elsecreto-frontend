import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/bulletin-board/board-list/board-list').then(m => m.BoardList)
    },
    {
        path: 'profile/:id',
        loadComponent: () => import('./features/profile/profile-detail/profile-detail').then(m => m.ProfileDetail)
    },
    {
        path: 'register',
        loadComponent: () => import('./features/auth/register-advertiser/register-advertiser').then(m => m.RegisterAdvertiser)
    }
];
