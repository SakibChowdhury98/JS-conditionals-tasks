/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
var burger = 400;
console.log("burger price = ", burger);
if(burger>500){
    console.log("you will get a free coke")
}
else{
    var coke = 30;
    console.log("coke price = ", coke);
    var totalPrice = burger + coke;
    console.log("total price = ", totalPrice);
}