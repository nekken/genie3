import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Location} from "./Location";
import {LocationsService} from "./locations.service";

declare var $:any;

@Component({
  selector: 'app-location-edit-popup',
  templateUrl: './location-edit-popup.component.html',
  styleUrls: ['./location-edit-popup.component.css']
})
export class LocationEditPopupComponent implements OnInit {

  location:Location;
  saving:boolean = false;
  @Output() onSaveSuccess:EventEmitter<any> = new EventEmitter();
  error:any;

  constructor(private locationsService:LocationsService) { }

  ngOnInit() {
  }

  popup(location:Location){
    this.location = location;
    $('#form-add').niftyModal("show");
  }

  newLocationPopup(){
    this.popup(new Location());
  }

  close(){
    $('#form-add').niftyModal("hide");
  }

  save(){
    this.saving = true;
    this.locationsService
        .save(this.location)
        .then(location => {
          var isNew = (!this.location.id);
          this.location = location; // saved hero, w/ id if new
          // this.goBack(vehicle);

          $('#form-add').niftyModal("hide")

          $.gritter.add({
            position: 'bottom-right',
            title: (isNew) ? 'Emplacement ajouté' : 'Emplacement édité',
            text: (isNew) ? "L'emplacement "+ this.location.title +' a été sauvegardé avec succès' : 'Le produit '+ this.location.title +' a été sauvegardé avec succès',
            class_name: 'color success'
          });

          this.onSaveSuccess.emit({
            'location' : this.location
          });

          this.saving = false;
          // this.fetchLocations();
        })
        .catch(error => {
          this.error = error;
          this.saving = false;
        }); // TODO: Display error message
  }
}
