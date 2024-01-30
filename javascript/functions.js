//function syntax
function show()
{
    console.log("hiii");
}
show();

//function with parameters
function add(a,b)//a,b are parameters
{
    console.log("sum is:"+(a+b));
}
add(10,20);//arguments

//return a value froma function
function mul(a,b)
{
    return a*b;
}
const result = mul(10,20);
console.log(result);

//Arrow function(ES6)
//(),=>,statements
//arrow function without parameters
const res = () => {
    console.log("welcome to arrow functions!!!");
}
res();
const res1 = () => console.log("welcome friends!!");
res1();

//arrow function with parameter
const res2 = (a,b) => console.log("sum is "+(a+b));
res2(10,49);

//arrow function with single parameter
const res3 = c =>console.log("a val is:"+c);
res3(59);

//arrow function with return value
const res4 = (a,b) =>{
    return a*b;
}
const mul1 = res4(1,59);
console.log("mul1 is: "+mul1);

//arrow function with return without return statement and block 
const res5 = (a,b)=> a*b;
const mul2 = res5(59,1);
console.log("mul2 is: "+mul2);