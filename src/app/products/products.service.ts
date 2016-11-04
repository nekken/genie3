import { Injectable } from '@angular/core';
import { Headers, Http, Response} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {Product} from "./product";

@Injectable()
export class ProductsService{

    private productsUrl = 'app/products';  // URL to web api

    constructor(private http: Http) { }

    getProducts(): Promise<Product[]> {
        return this.http
            .get(this.productsUrl)
            .toPromise()
            .then(response => response.json().data as Product[])
            .catch(this.handleError);
    }

    getProduct(id: number): Promise<Product> {
        return this.getProducts()
            .then(products => products.find(product => product.id === id))
            .catch(this.handleError);
    }

    save(product: Product): Promise<Product> {
        if (product.id) {
            return this.put(product);
        }
        return this.post(product);
    }

    delete(product: Product): Promise<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.productsUrl}/${product.id}`;

        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    // Add new Product
    private post(product: Product): Promise<Product> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.productsUrl, JSON.stringify(product), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Product
    private put(product: Product): Promise<Product> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.productsUrl}/${product.id}`;

        return this.http
            .put(url, JSON.stringify(product), { headers: headers })
            .toPromise()
            .then(() => product)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
