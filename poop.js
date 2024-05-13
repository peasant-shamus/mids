// Functions are a fundamental concept in programming, allowing you to encapsulate a sequence of statements, give it a name, and execute it as a single unit. Functions can take input data called arguments, and they can return output data as a result.


//Below we learn how to use Ternary operators, which is basically an easier/efficent way to execute if/else statement. 
// it requires (1) a condition with ? (2) express if True :  (3)expression if False 


/*

let adult = checkAge(18);
console.log(adult);


function checkAge(age){
   return age >= 18 ? true : false;    // here we ask to return if age is greater? true/false/
} 

*/


let umar;
//umar = window.prompt("enter your umar");
umar = Number(umar);
console.log(typeof umar)

console.log(umar);

adult = checkUmar(umar);
console.log(adult); 


function checkUmar(umar){
    return umar >= 18 ? true : false;
}

//Below we learn template leterals, this is a way to write shit faster, so below notice we use ` to start and end ` the text which contains varaible that are added by just adding ${}. U can now write code 2x faster. 

weed = "pineapple kush";
kush = "Earl";
cock = 43;
text = `hello ${kush} my name is Vinnie Tomaci, and this is Wanker, we smokin ${weed} today from our sponsors ${cock}`;

console.log(text);

//below we make our first temp converter, doin Big tings


document.getElementById("submitBtn").onclick = function(){

    let temp;

    if(document.getElementById("cButton").checked){
       temp = document.getElementById("textBox").value;
       temp = Number(temp);
       temp = toCelsius(temp);
       document.getElementById("answer").innerHTML = "The temperature is " + temp + "°C" + " yodi family";
    }

    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("answer").innerHTML = "The temperature is " + temp + "°F" + " yodi family";

    }

    else{
        document.getElementById("answer").innerHTML = "select a Unit";
    }
}


function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9/5 + 32;
}

//below we learn arrays 

/*
let fruits = ["apples", "oranges","banana"];

console.log(fruits);

//fruits.push("coconut"); //add an element 
//fruits.pop();           //remove last element
//fruits.unshift();       //add element to begining
//fruits.shift();         //removes element from begining

*/

//below we learn rest parameters

let a = 2;
let b = 3;
let c = 5;
let d = 6;
let e = 2;
let f = 1;

console.log(sum(a, b, c, d))

function sum(...numbers){
    total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}

let fruits = ["banana", "melons"];
let vegetables = ["corn", "lettuce"];
let meats = ["chicken", "birria"];

let groceryList = [fruits, vegetables, meats];

console.log(...groceryList);


for(let list of groceryList){
    console.log(list);
}

///items in an array are know as elements, when u break down elements thru spread operator... you make them into individual arguments, that u can then add anywhere if u like...example below

let class1 = ["james", "earl", "jones"]
let class2 = ["walter", "sebastian", "carlos"]

//say u wanted to make one massive class so u think of adding the class2 array into class1. below watch

//the way to add items to array is thru .push  , so we do class1.push(class2)..

/*

class1.push(class2);

//ok now we added class2 to class1, lets check thru consol.log

console.log(class1);

// when u print on console you will see: (4) ['james', 'earl', 'jones', Array(3)]     class2 was added as an entire array! its a whole one item! hey i wanted it as three seperate items/students added to the list, currently its 3 items plus an array! below we will learn how to unpack the array thru spread operator... into arguments to add into list  */

class1.push(...class2);
console.log(class1);

///above by using the spread operator, we broke the array into arguments, that we then added into class 1. 

//below is another example of how to find a maximum item in an array

let scores = [5, 10, 15, 20, 30, 40, 66]

let maximum = Math.max(scores);

console.log(maximum);

//oh my it wont tell me the max number inside the array, it says NAN, when i type consol.log, it saying Not A Number! wtf!! in order to find the max, we have to break down the array into arguments...check below


let maximumm = Math.max(...scores);
console.log(maximumm);

//oh wow now it gives us 66! no more NAN! so spread operators unpack arrays!!! 



//below we will do call backs! call back is basically using a function as an argument, that helps solve an equation before some steps are filled. for instance below we have to add x + y, before the callback function is initiated, which takes the total value, and runs the function displayConsole. 



add(2, 3, displayConsole);              //here you can see the callback function as an argument. 

function add(x,y,callBack){       //Callback here is an argument, which is == to displayConsole/output
    let result = x + y;
    callBack(result);
}

function displayConsole(output){
    console.log(output);
}

//again callbacks are functions used as an argument. x and y are arguments/elements that we add, and we then use the result with the help of callback to run a function, so basically the callbackk is waiting to run a function once a certain act takes place.


//below we learn array.forEach();  this helps execute a callback function for each element in an array, it is kinda like the loop concept basically running code for each element. 
// the .forEach is allowed inheritly 3 parameters naturally: element, index & array. 

let student = ["spongebob", "patrick", "squidward"];
student.forEach(capitalize);
student.forEach(print);

function capitalize(element, index, array){                   /// array.forEach allows you three arguments: element, index & array.
    array[index] = element[0].toUpperCase() + element.substring(1);
}           

function print(element){
    console.log(element);
}


//above we are trying to capitalize the first word of each element in an array. to do so we first make two functions, one to capitalize, and one to print. then we pass the functions as arguments AKA callbacks and run the function for each array element. 





//below we learn array.map(); this executes a callback function once for each array element AND creates a new array! 
//inherited parameter for .map is only: element


let digits = [2,4,6,8,10];
let squared = digits.map(square);           ///squared is now a brand NEW array with ^2 

squared.forEach(appear);                    ///here we use forEach to print out each new elements value

function square(element){                   //.map or you have one parameter: Element
}

function appear(element){
    console.log(element);
}


//below we learn array.filter(); this creates a new array with all elements that pass the test provided by a function. 
//basically it filters out things that arent according to a function and makes the filtered elements into an array
// below we tryna filter out anyone below 18 and make filter it out n make a new array called adults. 

let ages = [12, 22, 25, 16, 13, 15, 14, 6, 9];
let adults = ages.filter(CheckAges);
adults.forEach(ShowNtell);

function CheckAges(element){                    //here we use a function to filter out anyone below 18
    return element >= 18;                       //with .ForEach you are only allowed arguments/parameters of true/false
}

function ShowNtell(element){
    console.log(element);
}


//below we learn array.reduce, which is used to reduce an array to a single value, this is usally used for adding/summing up values and you will notice that its callback parameters takes only 2 arguments 
//callback for array.reduce takes 2 arguments: total/accumulator, element
//IMPORTANT TO NOTE: The specific parameters of a callback function depend on the function that uses it and the purpose of the callback. Different functions may expect different numbers and types of parameters, and it's essential to consult the documentation or function signature to understand the callback's requirements 

let bucket = [5,12,15,22,25,30]; 
let bucketTotal = bucket.reduce(addzebitchesup);
console.log(bucketTotal);

function addzebitchesup(total, element){
    return total + element;
}

//Next we learn about anonymous functions, these are functions without a name defining them. Not all functions need names

//recently we have been defining functions but here we will learn anon functions

document.getElementById("poundtown").onclick = function(){
    console.log("eatass")
}

//so up above we made a function if you hit the yodigang symbol on the webpage it gives a console msg. However you will notice that up above there is no function definition/name. This is an anon function. 

//The best anon function is actually the Arrow function = which is a compact alternative to a traditional function

const greeting = function(name){
    console.log("Hello " + name);
}

greeting("faggot");


//so above is an anon expression but lets make it into a arrow =>

const greetting = (naaame) => console.log("Hello " + naaame);


greetting("faggot");

//below we are practicing making functions into =>

const percent = function(x, y){
    return x/y * 100; 
}

console.log(percent(69,100) + "%");


percentt = (b,c) => b/c * 100;
console.log(percentt(33,100)+ "%");

//more practise with arrows plus arrays

grayhair = [12, 43, 23, 55, 11, 100, 69];

function desceinding(x, y){
    return y-x;
}
function showbussy(element){
    console.log(element);
}

grayhair.sort(desceinding);
grayhair.forEach(showbussy);

//arrow the hoes now 
console.log("arrows are gay")

gayhair = [55, 77, 52, 50, 440, 54, 99, 17];

gayhair.sort((h,i) => i-h);
gayhair.forEach((element) => console.log(element));

//arrows in general help lower the cluster of code, and makes it simpler/efficent to write. 


//below we should learn map-objects but im too lazy so go back n learn this !!











//below we will learn objects, which are a group of properties & methods
//properties = what an object has e.g color, model, name 
//method = what an object can do e.g stop, move
// we use "." as a way to access the properties and methods


const car = {
    model: "Suzuki",         //notice that for properties/methods we use : instead of = 
    color: "green",           // also notice when we end property we use , instead of ;
    year: 2001,


    drive: function(){                          // notice we use : to define function name in objects
        console.log("You Drive the car");
    },                                      //notice how we used , to end the function before we start other function


    brake: function(){
        console.log("You step on the brake");
    },

}


console.log(car.model);     //in order to access the cars properties we used . after car and it brings em up
console.log(car.color);
car.drive();                //notice that we used (); as it is a function/method. if we just wrote car.drive; it wouldnt run. 
car.brake();

/*Below are all the neet tricks & gadgets u can use for fucking around with objects  */

/*
//this:  This is used to reference to a perticular object which depends on the immeidate context
//classes : assigns classes to different objects
//constructor: 
//static: belongs to class, not the objects properties or methods
//inheritence: inherits from the parent. 
//super: refers to parent class, commonly used to invoke constructor of parent class - helps make code efficient 
//getters & setters
*/

//below we learn classes 


class Player{               //in order to invoke a class you type class before it, here the class is player, we can use this over n over

    score = 0;

    pause(){
        console.log("You have paused the game");
    }

    exit(){
        console.log("You have exited the game")
    }
    
}

const player1 = new Player();      //to create a player we use the words "new", and now we have player 1, it uses the properties above 
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

console.log(player1.score);     //each player now has a score, pause/exit due to class, this helps group things n give properties/method
console.log(player3.score);     //using classes helps as we can reuse classes to make as many students as we like, game changer. 

player2.pause();
player4.exit(); 

//constructor we study below
//constructors are essentially Methods, and a special method of a class
//constructors accept arguments & assigns properties, which makes them special

class slayer{

      constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
      }
      
      study(){
        console.log(`${this.name} is studying bitch`);
      }
}

const slayer1 = new slayer("spongebob",22,3.5);
const slayer2 = new slayer("patrick",45,1.6);

console.log(slayer1.name);
console.log(slayer1.age);
console.log(slayer1.gpa);
slayer1.study();

console.log(slayer2.name);
slayer2.study();
console.log(slayer2.age);

//below we explain Static
// Static = belongs to class, not the objects properties or methods. let us explain below

//Below we have created a car class, we would like to make a counter, so we can keep track of how many cars in total we have created, so we put in numberofcars = 0; and then we put in the constructor, that for each model made, we +1/add the total number. However when we use console.log to see # of cars, we notice that it says 1. Essentially each car treats its number ofcars as 1, as each car object has its own personal Numberofcars varaible, so each car has its own copy of variable, instead of their being a master copy.  

class kar{

    numberofcars = 0;
    constructor(model){
        this.model = model;
        this.numberofcars += 1;
    }
}

const kar1 = new kar("tesla");
const kar2 = new kar("ford");
const kar3 = new kar("subaru");

console.log(kar1.model);
console.log(kar1.numberofcars);     
console.log(kar2.numberofcars);
console.log(kar3.numberofcars);

//below we will show u how to use static for the above example, to cumulatively add the # of cars. and so the property will belong to the class and not the Object! 

class kaar{

    static numberofkaars = 0;    //1st, we add the static, this binds the property to the class, instead of obj which it is currently
    constructor(model){
        this.model = model;
        kaar.numberofkaars += 1; //2nd, we add kaar. instead of using this. 
    }
}

const kaar1 = new kaar("volvo");
const kaar2 = new kaar("jaguar");
const kaar3 = new kaar("mitsubishi");

console.log(kaar1.model);
console.log(kaar.numberofkaars);    //3rd, you'll notice u dont need to type kaar1.numberofcars or kaar2.numberofcars, as the property  now belongs to the class and not the object & counts it cumutively now!!

//you can also use static for methods as well. below let me show you.

class gari{
    constructor(nishani){
        this.nishani = nishani;
    }

    static ReadysteadyGO(){
        console.log("3...2...1...go!")
    }

}

const gari1 = new gari("volkswagon");
const gari2 = new gari("Tata motors");
const gari3 = new gari("suzuki");


//gari1.ReadysteadyGO();              //you will notice that any gari can start the race, how is this fair? its cheating. 
 gari.ReadysteadyGO();                //so in order that everyone starts at same time, u can make the method static

//---- Inheritence and Super -

// Super refers to constructor of the parent class; commonly used to invoke constructor of a parent class. 
//if you notice, Animals is the parent class, the constructor in parent class has name & age. To avoid cluster of code, we use this constructor in the parent class to help inherit properties 
//if you look at the rabbit class it has super(name,age), this tells us that it is under a constructor in parent class and is inherited. 

class Animals{
constructor(name, age){                     
    this.name = name;
    this.age = age;
}
}

class Rabbit extends Animals{               //putting in extend means Animal is the parent. 
    constructor(name, age, runspeed){
        super(name, age);                   //super indicates that it is using the parents constructor to pass data.     
        this.runspeed = runspeed;
    }
} 

class Fish extends Animals{
    constructor(name, age, swimspeed){
    super(name, age);
    this.swimspeed = swimspeed;
    }
}

class Hawk extends Animals{
    constructor(name, age, flyspeed){
    super(name, age);
    this.flyspeed = flyspeed;    
    }
}

const rabbit = new Rabbit("bugs bunny", 27, 200);       //notice that the rabbit vs Rabbit, its interesting the case sensitivety. 
const fish = new Fish("nemo", 5, 20);
const hawk = new Hawk("gwyn", 12, 500);

console.log(fish.name);     //notice how when u do fish vs Fish, the different value appears, something to notice   
console.log(fish.age);
console.log(Fish.name);



// ---- Getters & Setters-----
//We use getters to add some extra data that we would like to add to the request, we do this through a function. With a setter the only difference is that youre dealing with a Value/# and u can add certain limitations to this # such as not going above 5000 or below 0, we do this through if statements with setters, thats all.
//Getter also kinda makes the objects function/method become a Property - so you will notice you no longer need to end things with car.brake(); instead you can just do car.brake  

class Scooter{
    constructor(power){
        this._gas = 25;            //with the _ sign it also means that the value cannot be edited & is secure 
        this._power = power;       //meaning if i went & did scooter.power = 3000, it will not edit it to that     
    }                               //the only way they can be edited is if they have a setter. 
    get power(){
        return `${this._power} HP`;
    }
    get gas(){
        return `${this._gas} L (${this._gas/50 *100}%)`
    }                               
                                    
    set gas(value){   //since this has a setter, its value is now editable by scooter.gas = 300,but before it wasnt                    
       if(value>50){        //another reason for setter is to make sure we set limits
        value = 50;         //for instance you cannot have negative gas, or 1 billion gas, so we set setters, to limit value range
       }                        
       else if(value<0){
        value = 0;
       }   

       this._gas = value;  
        
    }                             
}

let scooter = new Scooter(400);

scooter.gas = -60000;          //able to edit due to setter, yet cannot go <0 or above >50.

console.log(scooter.power);
console.log(scooter.gas); 

// How to pass --Arrays as Objects -- & -- Anon objects ---

class Kawr{
    constructor(name, model, color){
        this.name = name;
        this.model = model;
        this.color = color;
    }
    drive(){
        console.log(`We rooming ${this.name}`)
    }
}

kawr1 = new Kawr("suzuki", 1989, "gold");
kawr2 = new Kawr("cheveron", 1950, "white");
kawr3 = new Kawr("honda", 2001, "black");

const kawrs = [kawr1, kawr2, kawr3];             //here you put 3 objects into an array

console.log(kawrs[0].model);                     //here is how u can access the obj in array


//we want to start all the kawrs to race and then array is perfect for it watch, first we make a function. 

Startengine(kawrs);               //this initiates the kawr.drive for each obj. using the function below, using for loops

function Startengine(kawrs){
    for(const kawr of kawrs){                    
        kawr.drive();
    }
}

// Anon Objects --- 

/* anon obj = obj with no names, pros are you dont need to name each & every obj, con: is that you cannot directly reference obj, overall less syntax & no unique names. */

class Cards{
    constructor(value, suit){
    this.value = value;
    this.suit = suit;
    }
}

let card1 = new Cards("A", "Hearts");       //here we name all the objects as card1, card2, etc
let card2 = new Cards("A", "Spades");
let card3 = new Cards("A", "Diamonds")
let card4 = new Cards("A", "Clubs");
let card5 = new Cards("2", "Hearts");
let card6 = new Cards("2", "Spades");
let card7 = new Cards("2", "Diamonds");
let card8 = new Cards("2", "Clubs");

let cards = [card1, card2, card3, card4, card5, card6, card7, card8];

console.log(card1.value + card1.suit);      //here we can access directly due to obj having a name 
console.log(cards[0].value + cards[0].suit); //here we are accessing indirectly thru the array

//what if we didnt wanna name each stupid object n are tired running out of names, we do what is below

class Kards{
    constructor(value, suit){
        this.value = value;
        this.suit = suit; 
    }
}

let kards = [new Kards("A", "Hearts"),          //here we have anon obj within an array, no unique names. 
             new Kards("A", "Spades"),
             new Kards("A", "Diamonds"),        //notice how we use , instead of ; for arrays
             new Kards("A", "Clubs"),
             new Kards("2", "Hearts"),
             new Kards("2","Spades"),
             new Kards("2", "Diamonds"),
             new Kards("2", "Clubs"),
]

console.log(kards[2].value + kards[2].suit);     //here we can access only indirectly thru arrays,  
console.log(kards[6].value + kards[6].suit);           // unable to directly access due to no unique names

kards.forEach(kards => console.log(`${kards.value}  ${kards.suit}`));       //this displays all of the objects


//---Below we Learn setTimeout & clearTimeout--- 
// setTimeout essentially pops up a msg or activity after a certain time u specify

/*
let timer1 = setTimeout(firstMsg, 4000);       //with setintervals you will display an alert in 4 seconds
let timer2 = setTimeout(secondMsg, 8000);      //now a 2nd msg after 8 seconds
let timer3 = setTimeout(thirdmsg, 12000);      //3rd msg after 12 secs

function firstMsg(){
    alert(`Life makes less sense`)
}
function secondMsg(){
    alert(`life is pointless`)
}
function thirdmsg(){
    alert(`have you thought about christ?`)
}

document.getElementById("death").onclick = function(){  
    clearTimeout(timer1);                                   //to stop popup u set a cleartimeout for each
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`thank u for supporting the genocide of Palestine, infidel`);
}
*/

//--below we learn setInterval--
//this is essentially the same as setTimeout except it infinitely repeats itself until you click/incur the clearTimeout() 


/*

let count = 0;
let max = window.prompt("Enter a Number buddy");
max = Number(max);

const Mytimer = setInterval(countUp,3000);

function countUp(){
    count+= 1;                  
    console.log(count);
    if(count>=max){                         //if count gets to number entered above, it stops the counter! 
        clearInterval(Mytimer);
    } 

}

*/

//Next up is Promises, Async, & some other shit its all linked though, kinda confusing but 



//I promice to return something in the future, 
//if we run something and it works I promise to return you a value,if not i return something else
//in laymans term: when u boot it up how do u know the PS is on ? You see the light turn on, if its not u see nuthin, that light turnin on/off is de promise  

const promise = new Promise((resolve, reject) =>{
    
    let Fileloaded = false;

    if(Fileloaded){
        resolve("it is Loaded");
    }
    else{
        reject("File NOT loaded");
    }
});

promise.then(value => console.log(value))
        .catch(error => console.log(error));

        
//

const slayqueen = new Promise(resolve =>{
    setTimeout(resolve, 5000);

})

slayqueen.then(()=> console.log("Thanks for waiting massa")); 


//now we learn async, it lowers the amount of code & is general a more based way of writing
//async makes a function return a Promise, or in dumb terms makes a function INTO a promise so less syntax 
//the 2^ example is the same we just took out a bunch of dumb shit. 

  async function Loadfile(){ 

    let Fyleloaded = true;              //asysnc takes away resolve, reject
                                        
    if(Fyleloaded){
        return "it is Lurkin";          //no longer use resolve/reject, instead use return/throw
    }
    else{
        throw "File NOT lurkinnnnn";
    }
}

Loadfile().then(value => console.log(value))        //you now use a function as a promise - async'd bitch 
        .catch(error => console.log(error));


//next page is piss.js, go there//

