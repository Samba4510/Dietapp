//plain javascript
//sample program on variables
var rollno1=45;
var sname1="Rohit";
console.log(rollno1+" "+sname1);


//Advanced javascript
//let,const
let rollno2=10;
let sname2="Messi";
console.log(rollno2+" "+sname2);
const rollno3=11;
const sname3="Chethri";
console.log(rollno3+" "+sname3);


//what are the scopes in javascript
//functionscope,globalscope,blockscope

//function scope
function sample()
{
    var a=10;//function scope
    console.log("a val is:"+a);
}
sample();
//console.log("a value is:"+a);
 
//global scope
var b=45;
function show()
{
    console.log("b value is:"+b);
}
show();
console.log("value of b is:"+b);


//block scope
{
    let c=11;
    const d=9;
    console.log(c+" "+d);
}
//console.log(c+" "+d);


//var drawback1
for(let i=1;i<=10;i++)
{
    console.log("i val is:"+i);
}
//console.log("out side i val is:"+i);

//var drawback2
//re declare
var price = 45000;//have to use let or const
var price = 10000;//var allows redeclaration of a avriable
console.log("price is:"+price);


//re assign alllows:var,let   not allows:const
var pname="Realme";
    pname="Read me";
console.log("product name:"+pname);