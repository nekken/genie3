import {Inventory} from "./Inventory";
import {History} from "./History";
/**
 * Created by ken on 2016-10-28.
 */
export class Product
{
    id:number;
    sku:string;
    title:string;
    inventory:Inventory[];
    history:History[];
    updatedAt:any;
}