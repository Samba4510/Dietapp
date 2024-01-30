//sample demo on object
const product = {
    pid:1045,
    pname:"RS",
    pprice:45000,
    pquantity:5
}
//how to get specific property from an object
console.log(product.pname);
console.log(product["pname"]);
console.log("\n");
//how to get all the product property values
for(let prod in product)
{
    console.log(product[prod]);
}
console.log("\n");
//with Object.keys
Object.keys(product).forEach((key)=>{
    console.log(key+":"+product[key]);
});
console.log("\n");

//with Objectr.value()
Object.values(product).forEach((value)=>{
    console.log(value);
});
console.log("\n");

//Object.entries()
Object.entries(product).forEach((entry)=>{
    console.log(entry[0]+":"+entry[1]);
});

//JSON.stringfy()

