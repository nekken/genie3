import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {LocationsService} from "./locations.service";
import {Location} from "./Location";

declare var $:any;
declare var toastr:any;

@Component({
  selector: 'app-location-delete-popup',
  templateUrl: './location-delete-popup.component.html',
  styleUrls: ['./location-delete-popup.component.css']
})
export class LocationDeletePopupComponent implements OnInit {

  location:Location;
  @Output() onDeleted:EventEmitter<any> = new EventEmitter();
  error:any;

  constructor(private locationsService:LocationsService) { }

  ngOnInit() {
  }

  confirmDelete(location:Location)
  {
    this.location = location;

    $('#delete').niftyModal("show");
  }

  delete():void{

    let location = this.location;

    this.locationsService
        .delete(location)
        .then(response => {

          this.onDeleted.emit(location);

          $('#delete').niftyModal("hide");

          $.gritter.add({
            position: 'bottom-right',
            title: 'Emplacement supprimé',
            text: "L'emplacement "+ location.title +' a été supprimé avec succès',
            class_name: 'color success'
          });

        })
        .catch(error => this.error = error); // TODO: Display error message
  }
}
