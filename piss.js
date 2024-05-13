//Below we learn how to edit different list items, IDs, class through the element selector *GOD MODE SHIT*     

//ID
let menu = document.getElementById("identity");     //here we edit thru ID 
menu.style.backgroundColor = "orange";

//Name
let fruits = document.getElementsByName("fruits");      //here we edit radio buttons thru Name 

fruits.forEach(fruit => {                                //behaves as a node list so its a weirdo
    if(fruit.checked){                  //so for elements by names, you cannot just simply do: fruits.style.backgroundColor = orange;
        console.log(fruit.value);       // it will not work, you would have to use annoying for loops and I aint got time for dat..
    }                                   //here instead we check which element is checked for radio.
    })         
//

//UL/LI
let vegetables = document.getElementsByTagName("li");       //here we edit list thru tagname! 
vegetables[0].style.backgroundColor ="orange";              //it behaves like an array so easy peasy to edit vs ElementbyName
vegetables[1].style.backgroundColor ="green";
vegetables[2].style.backgroundColor ="orange";              //for list items, you can edit color easy peasy, but individually.

//Class 
let desserts = document.getElementsByClassName("desserts");     //easy as it behaves like array
desserts[0].style.backgroundColor = "darkgreen";                //edit individually
desserts[1].style.backgroundColor = "orange";
desserts[2].style.backgroundColor = "darkgreen";

//Query selector, the most based instrument as it is easiest bordest to use applies to most ID, class, title and much more
//to highlight just first item in a list use query selector, to highlight all we use querySelectorAll

//id selector thru queryselector
let element = document.querySelector("#identity");      //notice for id we use #, for class we use ., for UL/LI we use "li"
element.style.backgroundColor = "green";

//class thru query selector
let elementz = document.querySelector(".desserts");     //the first item in desserts will be colored, not all
elementz.style.backgroundColor = "green";

//UL/LI thru query selector
let elementx = document.querySelector("li");            //the first item in list will be colored, not all
elementx.style.backgroundColor = "green";

//QuerySelectorAll

let elements = document.querySelectorAll(".desserts");
elements.forEach(element => {element.style.backgroundColor = "green";})       //function helps select all 


//below we learn how to edit/add html elements thru JavaScript

let listitems = document.querySelector(".desserts");
let additem = document.createElement("li");         //this creates a list element
additem.textContent = "charas";                     //this identifies charas as the list item to be entered,  
listitems.append(additem);                             //adds list item charas to dessert list


let addSeconditem = document.createElement("li");       //to add more list items u must follow the same steps, 1/ identify element to add aka li here 2/identify variable to add, 3/add it to the list thru append(adds to first item), prepend(end of list), or formila below that adds it to specific area like [1], [6];
addSeconditem.textContent = "meetha peeshab";
listitems.prepend(addSeconditem);        //     preend put item at end, but i fucked up something so it shows weird, but fun fact

let addThirditem = document.createElement("li");
addThirditem.textContent = "sarson ka tail";
listitems.insertBefore(addThirditem, listitems.getElementsByTagName("desserts")[1]);  //to add item at point [1], i fucked code, so its entering weird my b

//How to edit CSS thru javaScript

const title = document.getElementById("title");

title.style.backgroundColor = "#222222";            //notice how when changing things in css this would be style.background-color but instead as its in JS it is camel cased backgroundColor 
title.style.color = "rgb(50,200,50)";
title.style.fontFamily = "consolas";
title.style.textAlign = "center";               //again notice Camel case vs css editing style of - 
title.style.border = "2px solid";
title.style.display = "block";

//Events: onclick, onload, onchange, onmouseover, onmouseout, onmousedown, onmouseup ---*****

//Onclick - as name state 
let ignition = document.getElementById("myButton");
ignition.onclick = Clickedup;

function Clickedup(){alert("Thanks for clicking Order button")};

//Onchange - as name states - any change will trigger this
let ignite = document.getElementById("myText");
ignite.onchange = ChangeDetected;

function ChangeDetected(){alert("woah slow down bro u typing to fast!!")};

//onload - as it states initiates when u load a page - for this however notice we use document.body instead of document.getelement
let loading = document.body;
loading.onload = Loadaction;

function Loadaction(){console.log("your page loaded, nice job")};

//onmouseover - when ur mouse is over item - Notice we made a div for it in html, and made a css for it #myDiv
//onmouseout - when ur mouse moves away from item 
let mouseZaddy = document.getElementById("myDiv");
mouseZaddy.onmouseover = Changecolor;
mouseZaddy.onmouseout =changeGreen;


function Changecolor(){mouseZaddy.style.backgroundColor = "red"};
function changeGreen(){mouseZaddy.style.backgroundColor = "green"};


let Pressmouse = document.getElementById("myDivv");
Pressmouse.onmousedown = clickColorchange;
Pressmouse.onmouseup = clickColoraway;
function clickColorchange(){Pressmouse.style.backgroundColor = "blue"};
function clickColoraway(){Pressmouse.style.backgroundColor = "red"};


//addEventListener - this is a more based version of Events- it takes 3 arguments(event, function/callback/arrowfunction, useCapture(AKA which event triggers what first )
//can add many event handlers to 1 element - even the same event that invokes different functions

let myelement = document.getElementById("div1");
myelement.addEventListener("mouseover",change2red);
myelement.addEventListener("mouseleave",change2purple);


function change2red(){myelement.style.backgroundColor = "red"};
function change2purple(){myelement.style.backgroundColor = "purple"};


//now let me demonstrate the power of addEventListener

let Innerbox = document.getElementById("diVV");
let Outterbox = document.getElementById("diV");

Innerbox.addEventListener("mouseover",change2r);
Innerbox.addEventListener("mouseout",change2g);

Outterbox.addEventListener("mouseover",change2r);
Outterbox.addEventListener("mouseout",change2g);

function change2r(){this.style.backgroundColor = "red"};        //by using this. we reduce the code amount, otherwise we would do innerbox.style or outterbox.style
function change2g(){this.style.backgroundColor = "lightgreen"};


//more addEventlistener - step 1: link document.get   step2) make a function for action - step3)addEventlistener 

let inn = document.getElementById("inner");     //step#1
let outt = document.getElementById("outter");

inn.addEventListener("click",rung);         //step#3
outt.addEventListener("click",rung, true);

function rung(){
    alert(`you selected ${this.id} div first`);   //we put an alert, to show u which is triggered 1st, inn or outt, if u look above we put a 3rd argument on addeventlistener called "true", this makes sure that that event goes first. thats why we put alert so u can see it 
    this.style.backgroundColor ="blue"};     //step#2


 //show/hide HTML elements 
 
 const dabutton = document.querySelector("#pressitbitch");
 const daimage = document.querySelector("#pinkman");

 dabutton.addEventListener("click", ()=> {
    if(daimage.style.display == "none"){
        daimage.style.display = "block";
    }
    else{daimage.style.display ="none";}
 })
 





