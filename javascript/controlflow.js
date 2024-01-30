//control flow statements
//if,if-else,if-else if ladder,switch
let result = 62;
if(result >= 75)
{
    console.log("Congratulations! you got distinction");
}
else if(result < 74.99 && result >= 60)
{
    console.log("congratulations! you got Firstclass");
}
else if(result < 59.99 && result >= 50)
{
    console.log("congratulations! you got second class");
}
else
{
    console.log("you failed. Better luck next time");
}


//switch case
//printing a day in a week
switch(new Date().getDay())
{
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    
}