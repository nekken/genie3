import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "./Product";
import {ProductsService} from "./products.service";

declare var $:any;

@Component({
  selector: 'app-product-edit-popup',
  templateUrl: './product-edit-popup.component.html',
  styleUrls: ['./product-edit-popup.component.css']
})
export class ProductEditPopupComponent implements OnInit {

  product:Product;
    saving:boolean = false;
  @Output() onSaveSuccess:EventEmitter<any> = new EventEmitter();
  error:any;

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
  }

  popup(product:Product){
      this.product = product;
      $('#modal-add-product').niftyModal("show");
  }

  newProductPopup(){
      this.popup(new Product());
  }

  close(){
      $('#modal-add-product').niftyModal("hide");
  }
  
  save(){
      this.saving = true;
    this.productsService
        .save(this.product)
        .then(product => {
          var isNew = (!this.product.id);
          this.product = product; // saved hero, w/ id if new
          // this.goBack(vehicle);

          $('#modal-add-product').niftyModal("hide")

          $.gritter.add({
            position: 'bottom-right',
            title: (isNew) ? 'Produit ajouté' : 'Produit édité',
            text: (isNew) ? 'Le produit '+ this.product.title +' a été sauvegardé avec succès' : 'Le produit '+ this.product.title +' a été sauvegardé avec succès',
            class_name: 'color success'
          });

          this.onSaveSuccess.emit({
            'product' : this.product
          });

            this.saving = false;
          // this.fetchProducts();
        })
        .catch(error => {
            this.error = error;
            this.saving = false;
        }); // TODO: Display error message
  }
}
