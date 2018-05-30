import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Score} from './../types/score';

@Injectable()
export class ScoresListService {

    sats_2012_url = 'https://data.cityofnewyork.us/resource/734v-jeq5.json';
    
    constructor(private http: HttpClient) {
    }

    getScores() {
        return this.http.get<Score[]>(this.sats_2012_url);
    }
}