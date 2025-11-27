import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service } from '../models/service.model';
import { MOCK_SERVICES } from '../data/mock-data';

@Injectable({
    providedIn: 'root'
})
export class OfferingService {
    private services: Service[] = MOCK_SERVICES;

    constructor() { }

    getServices(): Observable<Service[]> {
        return of(this.services);
    }

    getServiceById(id: string): Observable<Service | undefined> {
        return of(this.services.find(s => s.id === id));
    }
}
