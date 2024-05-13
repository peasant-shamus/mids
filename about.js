

//if statements are conditional statements, if x happens, then run this code, if it does not then Run this, if not then this. it is important to note the order of your statements, as the computer, isnt that smart, and runs cascadingly. For instance below if I put in age 65, the comp wouldnt say hey youre a senior! instead it will run the first statement which says above 18? youre a adult, and doesnt check the statements below it. If it finds the condition it just runs the first thing. So for this i would have to move the if statements order to run the 65> order first. otherwise it will state youre an adult not a senior. 

let age = -55;

if(age >= 18){
    console.log("youre an Adult, b")
}
else if(age <= 0){
    console.log("You are an NPC")
}
else if( age>= 65){
    console.log("youre a senior, old ass bitch")
}
else{
    console.log("Yous a young bitch")
}



document.getElementById("myBtn").onclick = function(){

    const zanny = document.getElementById("myCheckbox");
    const visa = document.getElementById("myVisa");
    const master = document.getElementById("myMaster");
    const roshan = document.getElementById("myRoshin");

        if(zanny.checked){console.log("you are subscribed")

        }

        else{ console.log("you are not subscribed asshole")

        }

    
        if(visa.checked){console.log("Visa chosen")
        }
        else if(master.checked){console.log("Master chosen")}
        else if(roshan.checked){console.log("roshan digital aye haye")}
        else{console.log("choose a payment method.")}

}


//Now we learn how to use Switch, switches are apparently a more efficent way of else if statements, Switch statement examines a value for a match against many Case clauses

//To fullfill a Switch statement u start with a Case and end with a Break. 


/*let grade = "D";

switch(grade){
    case "A":
        console.log("You did Great, nerd");
        break;

    case "B":
        console.log("You will do good in life, b");   
        break;
    case "C":
        console.log("You are a normal being, thank god");
        break;
    
    case "D":
        console.log("You barely passed, GG");
        break;
    case "F":
        console.log("You did not make it chief");
        break;
    default:
        console.log(grade, "is not a letter grade")            


} */


let grade = 93;

switch(true){
    case grade >= 90:
    console.log("You are the Top nerd, bitch");
    break;

    case grade >= 80:
    console.log("You are a B student, B for bussy");
    break;

    case grade>= 70:
    console.log("You are a C student, cunt");
    break;

    case grade >= 60:
        console.log("You are a D student, Joshy");
        break;

    case grade < 60:
        console.log("You are a failure to your familia");
        break;
    
    default:
        console.log(grade, "is not a number");

}


//Below we learn "&&" "||"
// "&&" AND (both conditions must be met in order to execute code)  
// "||" OR (either condition can be true to execute code)

let temp = 45;
let sunny = true;

if(temp >0 && temp<30 && sunny ){console.log("Good weather fren")
}
else{console.log("looks bad out there, stay home")}


let adult = 15;

if(adult <=0 || adult >= 18){
  console.log("You can drink buddy")}
  else{console.log("fuck off kid")}


// ! indicator is a "not" sign, so say a code says if (temp > 15){console.log("its warm")}, the statement is saying if temp is greater than 15 then print statement, but if we put: if(!(temp > 15)){console.log("its shit outside,")}, the statement is saying if the temp is NOT greater than 15 please print this. 


//we now learn the crazy world of "while loops", essentially if a condition isnt met, the code will keep executing till you enter the data point, its like for instance below we need to enter a name or else the code will keep running in a loop.
//to summarize you run the condition first and then the code after it

/*
userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your Name, sir")
}

console.log(userName);  */


// then there is "do while loop", the difference here vs just while loop, is that first we do/run the program and THEN run the while loop, example below

/*

let userNamee;

do{
    userNamee = window.prompt("Please enter username")
}while(userNamee == "" || userNamee == null)

console.log("hello", userNamee);

*/

//below we cover "for loops" these are different vs the OG, as it repeats the code a CERTAIN number of times, so it is not infinite

//for(let i = 1; i < 10; i+=1){
//console.log(i);}

// for loops also have the ability to "break" & "continue"

/*for(let i = 1; i <= 20; i+=1){
    if(i == 13){break;}
    console.log(i);
}  */

/*for(let j = 1; j <= 20; j+=1){
    if(j ==13){continue}
    console.log(j)
}*/


//below we learn nested for loops, which are for loops within a for loop, below for instance if we wanted to repeat a for loop a few times,//
// how do we do it? thru nested for loops. the outer loop dictates how many times the inner code will be repeated, 
//i <= 10 dictates the code be ran 10 times, the j<=3 dictates that numbers go 1,2,3...
//if we increased value of j<=6 it would go 1,2,3,4,5,6..

/*
for(i = 1; i <=10; i+=1){
    for(j = 1; j <=3; j+=1){
        console.log(j)
    }
} 

            */


//below we will use nested loops to make a column/row to show their true power








//below we learn function! functions help so you dont have to keep writing code over and over again, for instance below if we wanted to run the little 5 line questions/happybday bullshit we would have to copy the code like 3-4 times and paste, but instead of that u can just save it as a function and run/call it when you need it by the below method. By now just writing "happyBirthday()" it will now run the function happybirthday(){}

// Functions are a fundamental concept in programming, allowing you to encapsulate a sequence of statements, give it a name, and execute it as a single unit. Functions can take input data called arguments, and they can return output data as a result.
//In JavaScript, functions are blocks of reusable code that can be defined and invoked to perform specific tasks or calculations. 

let username = "wanker";
let agee = 33;
happyBirthday();

function happyBirthday(){

    console.log("Happy birthday fren");
    console.log("did i wish yu happy bday?, happy bday")
    console.log("oh damn its your birthday")
    console.log("damn youre " + agee + " years old now fuck")
    console.log("congrats on your birthday mr " + username)
}


// now the example below will show u how to function within a function and also how one function can be linked to another

Runthisbitch();

function Runthisbitch(){
    let usernaam = "wanker";
    let umarr = 32;
    happyBirthdai(usernaam, umarr);  //these items in parenthis help to teleport this data to the function below, otherwise code wouldnt run as below function has no idea what usernaam, ummar is as it is nested in a function
}



function happyBirthdai(usernaam, umarr){   //so the above variables r transferred to below thru the varaibles in parenthisis

    console.log("Happy birthday fren");
    console.log("did i wish yu happy bday?, happy bday")
    console.log("oh damn its your birthday")
    console.log("damn youre " + umarr + " years old now fuck")
    console.log("congrats on your birthday mr " + usernaam)
}


//so interesting detail above is that if something is nested in a function with the property of "let" then that variable is only defined within the parenthesis{}, in order to transfer this data to the function below u have to add the variables(usernaam+umaar) to the happyBirthdai(usernaam, umaar), it will then know the variable definition.


//returns below

/*

let area;
let width;
let height;

width = window.prompt("Enter Width")
height = window.prompt("Enter height")

area = getArea(width, height);          //we put varaibles in () for some reason, i think it is so that we know we carry the same #
console.log(area);


function getArea(width, height){        //we put varaibles in there so the width/height is trasfered to the top, i think??
    let slut = width * height;
    return slut;
}

*/

// the return function pretty much sends the value, to the top, AKA value it calculated, sends it to where you initially defined it, so in above example, we calculate the SLUT, and then send the SLUT value to the area = getArea(). what we noticed was that even tho according to the youtube example we needed to provide varaibles in the (), such as height/width, however when i calculated without putting in the variables i still got the answer. 







