export class History
{
    id:number;
    inventory: {
        count:number;
        location:string;
        orderId:number;
    }
    notes: {
        author:string;
        content:string;
    };
    createdAt:any;
}