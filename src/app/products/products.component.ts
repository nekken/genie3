import { Component, OnInit,animate, style,trigger,transition } from '@angular/core';
import {ProductsService} from "./products.service";
import {Product} from "./Product";

declare var $:any;
declare var toastr:any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('slideDown', [
      transition('false => true', [
        style({height: '0'}),
        animate(1000, style({height: '500px'}))
        // animate(200, style({height: 'auto'}))
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {

  loaded:any = 'false';
  currentProduct:Product = new Product();
  products:Product[];
  error:any;

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    $('.page-head-wrapper').affix({
      offset: {
        top: 20
      }
    });

    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getProducts().then(products => {
      this.products = products;
      this.loaded = 'true';
    }).catch(error => this.error = error);
  }

  moveToTrash(product:Product):void{
    this.productsService
        .delete(product)
        .then(response => {

          this.products = this.products.filter(v => v !== product);

          toastr.success("Véhicule " + product.title +  ' supprimé' ,'',{
            "closeButton": true,
            "positionClass": "toast-bottom-right"
          });

        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  setCurrentProduct(product:Product){
    this.currentProduct = product;
  }
}
