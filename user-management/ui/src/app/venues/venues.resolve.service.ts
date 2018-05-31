import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Venue } from "./../types/venue";
import { VenuesService } from './venues.service';

// used Angular documentation for Resolve to set this up
// also, looked at example for direction at https://shermandigital.com/blog/wait-for-data-before-rendering-views-in-angular-2/

@Injectable()
export class VenuesResolve implements Resolve<Venue[]> {

    constructor(private venuesService: VenuesService, private router: Router) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Venue[]> {
        return this.venuesService.getVenues();
    }
}