
//Keypresses / animations: how to use eventlistener to figure out keypresses to then use as an animation/movable box of sorts

window.addEventListener("keydown", event => console.log(event.key));  //this code monitors keystrokes, you can use this to make movable obbjects

//below we learn how to move/animate a tiny square using keypresses & eventlisteners. 

let cube = document.getElementById("square");

window.addEventListener("keydown", movearound);
let x = 0;
let y = 0;


function movearound(event){

    
    switch(event.key){                          //switches are used when you have too many if/else ifs, makes it easier
        case "ArrowDown":
            y+=10;
            cube.style.top = y + "px";
            break;
        case "ArrowUp":
            y-=10;
            cube.style.top = y + "px";
            break;
       case "ArrowRight":
            x+=10;
            cube.style.left = x + "px";
            break;
        case "ArrowLeft":
            x-=10;
            cube.style.left = x + "px";
            break;
        default:
            break;           
    }

}

//How to move on X axis 
let cubey = document.getElementById("square2");
let pushy = document.getElementById("button2");

pushy.addEventListener("click", begin);

function begin (){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frames, 5);

    function frames(){
        if(x >= 200){
            clearInterval(timerId);
        }
        else{
            x+=1;
            cubey.style.left = x + "px";
        }
    }
}

 //How to Y axis
let pushbtn = document.getElementById("button3");
let myanimation = document.getElementById("square3");

pushbtn.addEventListener("click", action);

function action(){
    x = 0;
    y = 0;
    timerID = null;

    timerID = setInterval(frame, 10);

    function frame(){
        if(y >= 200){
            clearInterval(timerID);
        }
        else{
            y+= 1;
            myanimation.style.top = y + "px";
        }
    }
}

//How to X & Y
let pushme = document.getElementById("button4");
let animateMe = document.getElementById("square4");

pushme.addEventListener("click", timezone);

function timezone(){
    x = 0;
    y = 0;
    timerID = null;

    timerID = setInterval(frames, 5);

    function frames(){
        if(x >= 200 || y >= 200){
        clearInterval(timerID);
        }
        else{
            x+= 1;
            y+= 1;
            animateMe.style.left = x + "px";
            animateMe.style.top = y + "px";
        }
    }
}

//How to rotate on X, Y & Z 
let Dbutton = document.getElementById("button5");
let sharingan = document.getElementById("square5");

Dbutton.addEventListener("click", rotation);

function rotation(){
    x = 0;
    y = 0;
    timerID = null;
    degree = 0;

    timerID = setInterval(ninja, 5);

    function ninja(){
        if(degree >= 360){
            clearInterval(timerID);
        }
        else{
            degree+= 1;
            sharingan.style.transform = "rotateZ("+degree + "deg)" + "rotateX("+degree + "deg)" + "rotateY("+degree + "deg)"    //here we are rotating on X, y & z, if you wish to only rotate on Z, you can remove the rest
        }                               
    }
}

//how to move X & Y axis and rotate on Z axis

let pushybussy = document.getElementById("button6");
let anime = document.getElementById("square6");

pushybussy.addEventListener("click", fuckaround);

function fuckaround(){
    x = 0;
    y = 0; 
    timerID = null;
    degree = 0;

    timerID = setInterval(frames, 0.5);

    function frames(){
        if(x>= 600 || y>= 600){
            clearInterval(timerID);
        }
        else{
            x+= 1;
            y+= 1;
            degree+= 1;
            anime.style.left = x + "px";
            anime.style.top = y + "px";
            anime.style.transform = "rotateZ("+degree + "deg)"
        }
    }
}

let putton = document.getElementById("button7");
let animee = document.getElementById("square7");

putton.addEventListener("click", fuckmylife);

function fuckmylife(){
    x = 0;
    y = 0;
    timerID = null;
    degree = 0;

    timerID = setInterval(frames, 5);

    function frames(){
        if(x>200 || y>200){
            clearInterval(timerID);
        }
        else{
            x+= 1;
            y+= 1;
            degree+=1;
            animee.style.top = y + "px";
            animee.style.left = x + "px";
            animee.style.transform = "rotateZ("+degree + "deg)" + "rotateY("+degree + "deg) "

        }
    }
}

console.log(navigator.cookieEnabled);


for(let i = 0; i <10; i+=3){
    console.log(i);
}
console.log("break here")

let names = ["bob", "mike", "ted"];
let creed =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [4,5,6],
    ];

    let walter = [[0,1,2,3,4,5,6,7], [8,9,10]]

    let dark = [["chase", "webster", "sammy"],["bob", "mike", "ted"]];


console.log(creed.length);

console.log(walter.length);

console.log(dark);

console.log("break");

//here some shit about nested for loops, and their syncronization

for(let i = 1; i <5; i++){
    console.log(i);
    for(let j = 10; j >7; j--)
    {console.log(j);}
}

//first the outer loop runs =1, after that the inner loops run =10,9,8...now the loop starts again but
//first outer loop now is =2, after that the inner loop runs =10,9,8...
//the outer loop dictates how many times the inner code will be repeated


for(i = 1; i <101; i+= 1){

    if(i ==10){
        console.log("Checkpoint! 10");
    }
    if(i ==20){
        console.log("Checkpoint! 20");
    } 
    if(i ==30){
        console.log("Checkpoint! 30");
    } 
    if(i ==40){
        console.log("Checkpoint! 40");
    } 
    if(i ==50){
        console.log("Halfway there!");
    } 
    if(i ==60){
        console.log("Checkpoint! 60");
    } 
    if(i ==70){
        console.log("Checkpoint! 70");
    } 
    if(i ==80){
        console.log("Checkpoint! 80");
    } 
    if(i ==90){
        console.log("Checkpoint! 90");
    } 
    if(i ==100){
        console.log("You made it");
    } 
};

