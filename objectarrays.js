/* let person ={
    name:"uday Shree",
    age:19,
    college:"Vit"
}
//console.log(person.name)
//console.log(person["age"])
const {name,age,college}=person; // destructuting assignment
console.log(person.name)
console.log(person.age)


let num =[1,2,3,4]
let square=num.map((int)=>int*int);// transform
console.log(square)

let even =num.filter((int)=>int%2==0)
console.log(even)

let sum =num.reduce((present,int)=>present-int)
console.log(sum)*/

let arr=[{name:"Usha",marks:20},{name:"Parinaya",marks:50}]
let min=0
for(let i of arr){
  // let min=0;
   if(i["marks"]>=min){
    min=i["marks"];
    let topper=i["name"];
   }
}
console.log(min)


