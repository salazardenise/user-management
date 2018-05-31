import { VenuesService } from './venues.service';
import { Component, OnInit } from '@angular/core';
import { Venue } from '../types/venue';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  venues: Venue[];

  constructor(private venuesService: VenuesService) { }

  ngOnInit() {
    /*
    this.venuesService.getScores()
      .subscribe((response) => {
        this.venues = response}); 
        */
  }

}
