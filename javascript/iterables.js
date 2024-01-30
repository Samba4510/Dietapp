//iterables
//Array,String,Set,Map
const ename = "RohitSharma";
//for
for(let i=0;i<ename.length;i++)
{
    console.log(ename[i]);
}
console.log("\n");
//for-of
for(let name of ename)
{
    console.log(name);
}
console.log("\n");


//Array
const enames = ["Rahul","Kiran","Ravi","Siva","Kim"];
for(let names of enames)
{
    console.log(names);
}
console.log("\n");
//forEach() method
//callback function: if we implement any function
//with in another funtion
enames.forEach(function(value)//call back function
{
    console.log(value);
})
console.log("\n");

//Set
const snames = new Set(["Rohit","Messi","Chethri","Rohit","Siva"]);
//for-of used to retrive values from set
for(let name of snames)
{
    console.log(name);
}
console.log("\n");

//Map
const products = new Map([["LG",10000],["RealMe",15000],["Apple",20000],["Honor",5000]]);
//forof
for(let product of products)
{
    console.log(product);
}
console.log("\n");

//foreach method
products.forEach(function(value,key){
    console.log(key+" "+value);
})