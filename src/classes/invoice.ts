 import {hasformater}from './interface/hasformater'
 
 export class invoice implements hasformater{


    constructor(
       readonly client :string,
        public details :string,
         public amount:number,
    ){
     
    }
    format (){
        return`${this.client} and ${this.amount} for ${this.details}`
    }
}