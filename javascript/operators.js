//arithmatic operators
//+,-,/,%,*
const a = 20;
const b = 10;
console.log("a+b:"+(a+b)+"\na-b:"+(a-b)+"\na*b:"+(a*b)+"\na/b:"+(a/b)+"\na%b:"+(a%b));

//Relational operators
//<,>,<=,>=,==,!=
console.log("a<b:"+(a<b)+"\na>b:"+(a>b)+"\na<=b:"+(a<=b)+"\na>=b:"+(a>=b)+"\na==b:"+(a==b)+"\na!=b:"+(a!=b));


//logical operators
//&&,||
console.log(a>10&&b>10);
console.log(a>10||b>10);

//assignment operator
//=,+=,-=,*=,%=,/=
let r = 20;
let s = 10;
console.log(r=s);
console.log(r+=s);//r=r+s
console.log(r-=s);//r=r-s
console.log(r*=s);//r=r*s
console.log(r/=s);//r=r/s
console.log(r%=s);//r=r%s

//bitwise operators
//&,|,^,~
console.log(a&b);
console.log(a|b);
console.log(a^b);

//unary operator
//++,--
let c = 40;
console.log(c++);//40 post increment
console.log(++c);//42 pre increment
console.log(c--);//42 post decrement
console.log(--c);//40 pre increment

//ternary operator
let age = 18;
const eligibility = (a=>18)?"eligible to vote":"not eligible";
console.log(eligibility);
