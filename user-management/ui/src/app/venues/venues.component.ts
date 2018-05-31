import { VenuesService } from './venues.service';
import { Component, OnInit } from '@angular/core';
import { Venue } from '../types/venue';
import { ActivatedRoute, Params } from '@angular/router'; 
import { dummyVenues } from './../dummy-values/dummy-venues';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  venues: Venue[];

  // dummy values
  //venues = dummyVenues;

  constructor(private venuesService: VenuesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    /*
    this.venuesService.getVenues()
      .subscribe((response) => {
      this.venues = response}); 
    */
    this.route.data.subscribe((data: {venues : Venue[]}) => {
    this.venues = data.venues;
  })
      
  }

}
