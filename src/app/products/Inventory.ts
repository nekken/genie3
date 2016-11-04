export class Inventory
{
    id:number;
    count:number;
    threshold:number;
    location:string;
    createdAt:any;

    public getCount(){
        return 5;
    }
}