import {Component, OnInit, Input} from '@angular/core';
import {Product} from "./Product";
import {Route, ActivatedRoute, Params, Router} from "@angular/router";
import {ProductsService} from "./products.service";

declare var $:any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product;

  constructor(private route:ActivatedRoute, private productService:ProductsService, private router:Router) { }

  ngOnInit(){

    $('.page-head-wrapper').affix({
      offset: {
        top: 20
      }
    });

    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        // console.log(id);
        // this.navigated = true;
        let promise = this.productService.getProduct(id)
            .then(product => {
              this.product = product;
            });
      } else {
        this.router.navigate(['/products']);
      }
    });
  }

}
