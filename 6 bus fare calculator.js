/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var age = 10;
var isStudent = true;
if(age < 10){
    console.log("free")
}else if(age >= 10 && age <=59 && isStudent == true){
    console.log("50% discount")
}else if(age >= 60){
    console.log("15% discount")
}else{
    console.log("800 taka")
}