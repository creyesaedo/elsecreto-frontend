import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Advertiser, User } from '../models/user.model';
import { MOCK_ADVERTISERS } from '../data/mock-data';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private advertisers: Advertiser[] = MOCK_ADVERTISERS;

    constructor() { }

    getAdvertisers(): Observable<Advertiser[]> {
        return of(this.advertisers);
    }

    getAdvertiserById(id: string): Observable<Advertiser | undefined> {
        return of(this.advertisers.find(a => a.id === id));
    }

    // Mock registration
    registerAdvertiser(advertiser: Advertiser): Observable<Advertiser> {
        const newAdvertiser = { ...advertiser, id: (this.advertisers.length + 1).toString() };
        this.advertisers.push(newAdvertiser);
        return of(newAdvertiser);
    }
}
