//two ways to create object
//1.Literal syntax
const person = {
    fname : "john",
    lname : "wick",
    age : 50,
    eyecolor : "black"
}
for(let per in person)
{
    console.log(person[per]);
}
console.log("\n");


//2.object syntax
const person1 = new Object();
person1.fname = "will";
person1.lname = "young";
person1.age = 30;
person1.eyecolor = "blue";

//object with methods
const person2 = {
    fname : "phil",
    lname : "foden",
    age : 25,
    eyecolor : "sky blue",
    fullname : function() {
        return this.fname+" "+this.lname;
    }
};
console.log(person2.fullname());
console.log("\n");

//nested object
const myObj = {
    name1: "will",
    age: 30,
    cars: [
        {name:"FORD",models:["Mustang","Fiesta","Ford GT"]},
        {name:"BMW",models:["320","X3","X5"]},
        {name:"MAHINDRA",modles:["XUV700","Thar","Bolero"]}
    ]
}
for(let obj in myObj)
{
    console.log(myObj[obj]);
}