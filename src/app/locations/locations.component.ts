import { Component, OnInit,animate, style,trigger,transition } from '@angular/core';
import {LocationsService} from "./locations.service";
import {Location} from "./Location";

declare var $:any;
declare var toastr:any;

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  animations: [
    trigger('fadeOut', [
      transition('* => void', [
        animate(500, style({opacity: '0'}))
      ])
    ])
  ]
})
export class LocationsComponent implements OnInit {

  loaded:any = 'false';
  currentLocation:Location = new Location();
  locations:Location[];
  error:any;

  constructor(private locationsService:LocationsService) { }

  ngOnInit() {
    $('.page-head-wrapper').affix({
      offset: {
        top: 20
      }
    });

    this.fetchLocations();
  }

  fetchLocations(){
    this.locationsService.getLocations().then(locations => {
      this.locations = locations;
      this.loaded = 'true';
    }).catch(error => this.error = error);
  }

  setCurrentLocation(location:Location){
    this.currentLocation = location;
  }

  removeLocation(location)
  {
    this.locations = this.locations.filter(v => v !== location);
  }
}
