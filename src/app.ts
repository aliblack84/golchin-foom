// // // type stringa= string |number
// // // type  objname = {name :string , uid :stringa}
// // // const logde = (uid:stringa |number , item : string)=>{
// // //     console.log(`${item}has a uid of ${uid}`)
// // // }

// // // const greet =(user :{name : string , uid : string | number})=>{
// // // console.log(`${user.name}says hellow`)
// // // }
// // // const greetagain =(user :  objname)=>{
// // //     console.log(`${user.name}says hellow`)
// // //     }



// // //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // // let ali:(a : string , b :string) =>void

// // // ali = (name : string , greeting : string)=>{
// // //     console.log(`${name} says ${greeting}`)
// // // }

// // // let  calc : (a:number , b:number , c:string)=>number
 
// // // calc = (num1 : number , num2:number, action:string ):number =>{
// // //     if (action === 'add'){
// // //         return num1 + num2
// // //     }
// // //     else {
// // //        return num1 - num2
// // //     }
// // // }
// // import {invoice} from './classes/invoice.js'

// // interface isperson{
// //     name: String
// // age:number
// // speak(a:string):void
// // spend(a:number):number
// // }

// // const me: isperson = {
// //     name:'ali',
// //     age:20,
// //     speak(text:string):void{
// //         console.log(text)
// //     },
// //     spend(amount:number):number{
// //         console.log(amount)
// //         return amount
// //     }

// // }
// // console.log(me )
// // const inone = new invoice('ali ', 'work on your mother' , 250)
// // const inonetow = new invoice('ali ', 'work on your father' , 200)
// // let invoices :invoice []=[]


// // invoices.forEach(inv => {
// //     console.log(inv.client,inv.details,inv.amount,inv.format( ))
// // })

// // const form = document.querySelector('.new-item-form') as HTMLFormElement;
// // console.log(form.children)




// // const type = document.querySelector('#type')as HTMLSelectElement


// // const from = document.querySelector('#tofrom')as HTMLInputElement
// // const details = document.querySelector('#details')as HTMLInputElement


// // const amount = document.querySelector('#amount')as HTMLInputElement


// // form.addEventListener('submit',(e:Event)=>{
// //     e.preventDefault
// //     console.log(
// //         type.value,
// //         from.value,
// //         details.value,
// //         amount.valueAsNumber
// //     )
// // })


// enum resourse {book , film , doctor}
// interface Resourse <T>{
//     uid:number ;
//     resourse: resourse
//     data:T
// }
// const docOne :Resourse<object> ={
//     uid:1,
//     resourse:resourse.book,
// data:{title:'ali black'}
// }
// const docTow : Resourse<object> = {
//     uid:10,
//     resourse:resourse.film,
//     data:{name: 'taha black'}
// }
// console.log(docOne,docTow)


 
