import { InMemoryDbService } from 'angular2-in-memory-web-api';
import {forEach} from "@angular/router/src/utils/collection";

export class InMemService implements InMemoryDbService {
    createDb() {

        let products = this.createProducts();
        let locations = this.createLocations();

        // for(let arr of arrs)
        // {
        //     console.log(arr);
        //
        //     let product:Product = arr;
        //     // products.push(product)
        // }

        return {products,locations};
    }

    createLocations(){
        return [
            {
                id: 1,
                title: "Mascouche",
                updatedAt:new Date("2017-10-28")
            },
            {
                id: 2,
                title: "Masson",
                updatedAt:new Date("2017-10-28")
            },
            {
                id: 3,
                title: "Fleury",
                updatedAt:new Date("2017-10-28")
            }
        ];
    }

    createProducts(){
        let products = [
            { id: 1, sku: '00000000000225', title: 'Pomme Delcorf Quebec', inventory : [
                { count:13, threshold:25, location:'Masson'},
                { count:48, threshold:50, location:'Mascouche'},
                { count:25, threshold:35, location:'Fleury'}
            ], history: [
                {   inventory: {count:100, location:'Masson', orderId:12345},
                    createdAt:new Date("2017-10-28")
                },
                {
                    notes: {
                        author: "Jean-Yves",
                        content: "J'ai parlé avec Mario, il m'a dit qu'il va nous faire un prix spécial"
                    },
                    createdAt:new Date("2017-10-26")
                },
                {
                    inventory: {count:-100, location:'Masson'},
                    createdAt:new Date("2017-10-26")
                },
                {
                    inventory : {count:-50, location:'Masson'},
                    createdAt:new Date("2017-10-25")
                },
                {
                    inventory: {count:200, location:'Masson', orderId:12345},
                    createdAt:new Date("2017-10-24")
                },
                {
                    inventory: {count:100, location:'Masson', orderId:12345},
                    createdAt:new Date("2017-10-22")
                }
            ], updatedAt: new Date() },
            { id: 2, sku: '00000000000227', title: 'Pomme Mc Intosh', inventory : [
                { count:18, threshold:25, location:'Masson'},
                { count:23, threshold:50, location:'Mascouche'},
                { count:24, threshold:25, location:'Fleury'}
            ], updatedAt: new Date() },
            { id: 3, sku: '00000000000246', title: 'Clementine Boite', inventory : [
                { count:13, threshold:25, location:'Masson'},
                { count:26, threshold:50, location:'Mascouche'},
                { count:12, threshold:25, location:'Fleury'}
            ], updatedAt: new Date() },
            { id: 4, sku: '00000000000259', title: 'Courge Marbrée', inventory : [
                { count:12, threshold:25, location:'Masson'},
                { count:14, threshold:50, location:'Mascouche'},
                { count:2, threshold:25, location:'Fleury'}
            ], updatedAt: new Date() },
            { id: 5, sku: '00000000000301', title: 'Bettrave En Feuille', inventory : [
                { count:5, threshold:25, location:'Masson'},
                { count:50, threshold:50, location:'Mascouche'},
                { count:13, threshold:25, location:'Fleury'}
            ], updatedAt: new Date() },
            { id: 6, sku: '00000000000327', title: 'Ail Bulbe Frais', inventory : [
                { count:13, threshold:25, location:'Masson'},
                { count:50, threshold:50, location:'Mascouche'},
                { count:34, threshold:25, location:'Fleury'}
            ], updatedAt: new Date() }
        ];

        return products;
    }
}