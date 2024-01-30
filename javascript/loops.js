//Loops in JavaScript
//for,while,do-while
 
//for
//initialization;condition;increment/decriment
for(let i=1;i<=5;i++)
{
    console.log("i value is:"+i);
}
console.log("\n");


//while
let j = 1;
while(j<=5)
{
    console.log("j value is:"+j);
    j++;
}
console.log("\n");


//do-while
let k = 1;
do{
    console.log("k value is:"+k);
    k++;
}while(k<=5);
console.log("\n");


//advanced javascripts(es6)
//fro-of,for-in
//these are used to get values from any iterable
//for-of
const enames = ["Rahul","Kiran","Ravi","Siva","Kim"];
for(let names of enames)
{
    console.log(names);
}
//for(let names in enames)
//{
//   console.log(enames[names]);
//}
console.log("\n");

//for-in
const customer = {
    cid:1001,
    cname:"Siva",
    cPhNo:9876543210
}
for(let cust in customer)
{
    console.log(customer[cust]);
}