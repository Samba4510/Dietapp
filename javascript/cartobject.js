const cart = {
    custinfo:{
        custname:"sravan",
        custemail:"sravan123@gmail.com",
        custphno:9876543210,
    },
    custaddress:{
        Houseno:"12/20",
        Line:"Shivajinagar",
        Town:"Pamuru",
        Pincode:562432
    },
    products:[
        {Brand:"NIKE",models:["Jordan","Air1.7","Air1.5"]},
        {Brand:"ADIDAS",models:["Football","Casual","Cricket"]},
        {Brand:"PUMA",models:["Suede","Clyde","Elite"]}
    ]   
}
for(let cart1 in cart)
{
    console.log(cart[cart1]);
}
console.log("\n");
console.log(cart.products);