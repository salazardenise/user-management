import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-venues-map',
  templateUrl: './venues-map.component.html',
  styleUrls: ['./venues-map.component.css']
})
export class VenuesMapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude: any;
  longitude: any;

  constructor() { }

  ngOnInit() {
    //console.log("gmap: " + this.gmapElement)
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
