import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Score } from './../types/score';
import { ScoresListService } from './scores-list.service';

// used Angular documentation for Resolve to set this up
// also, looked at example for direction at https://shermandigital.com/blog/wait-for-data-before-rendering-views-in-angular-2/

@Injectable()
export class ScoresListResolve implements Resolve<Score[]> {

    constructor(private scoresListService: ScoresListService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Score[]> {
        return this.scoresListService.getScores();
    }
}