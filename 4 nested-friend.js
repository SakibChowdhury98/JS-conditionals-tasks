/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
marks = 75;
fMarks = 30;
if(marks > 80){
    if(fMarks > 80){
        console.log("let's go for lunch")
    }else if(fMarks < 80 && fMarks >= 60){
        console.log("good luck next time, friend")
    }else if(fMarks <60 && fMarks >= 40){
        console.log("message unseen")
    }else{
        console.log("block")
    }
}else{
    console.log("go to home and sleep and act sad")
}