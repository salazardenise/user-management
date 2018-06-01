import { Marker } from './../types/marker';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
// followed Medium post at https://medium.com/@balramchavan/integrating-google-maps-in-angular-5-ca5f68009f29 to set up maps api
import { } from '@types/googlemaps';
import { Venue } from '../types/venue';

@Component({
  selector: 'app-venues-map',
  templateUrl: './venues-map.component.html',
  styleUrls: ['./venues-map.component.css']
})
export class VenuesMapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  @Input() venues: Venue[];

  constructor() { }

  ngOnInit() {
    var timesSquare = {lat: 40.758896, lng: -73.985130};
    var mapProp = {
      center: new google.maps.LatLng(timesSquare.lat, timesSquare.lng),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.addMarkers();
  }

  addMarkers() {
    var i, markerPosition, markerToMap;
    var traingle = {
      path: 'M 100 100 L 300 100 L 200 300 z',
      fillColor: 'purple',
      fillOpacity: 0.8,
      scale: 0.1,
      strokeColor: 'black',
      strokeWeight: 2
    };
    for (i = 0; i < this.venues.length; i++) {
      //console.log(typeof(this.venues[i].latitude));
      let markerLat = Number(this.venues[i].latitude);
      let markerLng = Number(this.venues[i].longitude);
      markerToMap = new google.maps.Marker({
        position: {lat: markerLat, lng: markerLng}, 
        map: this.map,
        animation: google.maps.Animation.DROP,
        //icon: image,
        icon: traingle,
        title: this.venues[i].company_name});
      markerToMap.setMap(this.map);
      var contentString = '<h3>'+ this.venues[i].company_name+ '</h3>' +
                          '<div>' + this.venues[i].subindustry + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      google.maps.event.addListener(markerToMap,'click', (function(markerToMap, contentString, infowindow) {
        return function() {
          infowindow.setContent(contentString);
          infowindow.open(this.map,markerToMap);
        };
      })(markerToMap, contentString, infowindow));
    }
  }

  

}
