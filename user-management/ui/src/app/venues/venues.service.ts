import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Venue} from './../types/venue';

@Injectable()
export class VenuesService {

    venues_url = 'https://data.cityofnewyork.us/resource/2pc8-n4xe.json';
    
    constructor(private http: HttpClient) {
    }

    getVenues() {
        return this.http.get<Venue[]>(this.venues_url);
    }
}