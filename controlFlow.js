let marks=25
if(marks>=23){
    console.log("a+")
}else if(marks>=20 && marks<=23){
    console.log("a")
}
else{
    console.log("b")
}
let day=2
switch(day){
    case 1:console.log("monday");break;
    case 2:console.log("tuesday");break;
    case 3:console.log("wednesday");break;
    default:console.log("invalid")
}
 let count=0;
for(let i=0;i<4;i++){
    if(i%2==0){
        count+=1
    }else{
        console.log(invalid)
    }
if(count==2){
    console.log(i)
}
}
let colours=["black","navy blue","dark green"]
for(let i=0;i<colours;i++){
    console.log(colours[i])
}
for(let colour of colours){
    console.log(colour)
}


let person ={
    name:"yogitha",
    age:19,
    branch:"cse"
}
for(let key in person){
    console.log(`${key} :${person[key]}`)
}
for(let key in person){
if(key!=="name"){
     continue;
}else{
    console.log(key)
}
}