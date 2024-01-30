//bonus eligible logic
//requirements: a sample program using javascript 
//eid,ename,salary,pf amoount,hra
//returning value from a function
let eid = 1101
let ename = "Teja";
let esalary = 10000;
let epf = 2000;
let hra = 1000;
const totalsalary = bonus(esalary,epf,hra);
function bonus(b,c,d)
{
    return b+c+d;
}
console.log("Total salary:"+totalsalary);
if(totalsalary>=20000)
{
    console.log(ename+", you are not eligible for bonus of 5000");
}
else
{
    console.log(ename+",you are eligible for bonus of 5000.\nTotal salary with bonus:"+(totalsalary+5000));
}
console.log("\n");

const bonus1 = (a,b,c) => a+b+c;
const totsal = bonus1(esalary,epf,hra);
console.log("total salary "+totsal);
if(totsal>=20000)
{
    console.log(ename+", you are not eligible for bonus of 5000");
}
else
{
    console.log(ename+",you are eligible for bonus of 5000.\nTotal salary with bonus:"+(totalsalary+5000));
}