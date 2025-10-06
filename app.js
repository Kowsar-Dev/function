//----- Function -----//

// let firstName = "Kowsar";
// let lastName = "Ahmed";
// let result = greetUser(firstName,lastName)
// function greetUser (firstName ,lastName){
    
//     let fullName = firstName+lastName;
//     return fullName;

// }

// console.log(result);

//1

let name = "Kowsar";

function greetUser (name){
    let nam = name;
     return nam;
    
}

console.log("Welcome " ,greetUser(name));


//2

let sum = 0;

function sumMath (a,b){
   sum = (a+b);
   return sum;
}
console.log(sumMath(4,6));


//3


let result = 0;

let doubleNumber =  ((num1) => {
    result = num1*2 ;
  
     return result;
    }
)
let number1 = doubleNumber(4);
let number2 = doubleNumber(6)
console.log(number1,number2);



//4

function dinnerCost (price ,texRate = 0.05){
    return price + (price*texRate);

}
let cost = dinnerCost(100);
console.log(cost)


//5

let stringLength = (string =>string.length)
let string = stringLength("i love myself");
console.log(string);


//6

function  applyDiscount (price ,percentage){
   return price-(price*(percentage/100))
}
 function totalPrice(){
    let total = applyDiscount(200,10);
    return total;

    }
    console.log(totalPrice());

//7

let age = 1;

function isAdult (age){
    if(age>=18){
        let isAdult = "You are Adult";
        return isAdult;
    }
    else if(age<18 && age >=1){
        let isChild ="You are a Child";
        return isChild;
    }
    else{
        return "Invalid input"
    }
}

console.log(isAdult(age));


//8

function randomNumber (){
    let randomNumber = (Math.floor(Math.random() *10)+1);
    return randomNumber;

}
console.log(randomNumber());


//9

function boxVolume (length,width,height){
    let volume =( length*width*height);
    return volume;


}
let volume = boxVolume (5,2,3);
console.log(volume);

//10


const tasks = ["Buy Milk","Code","Sleep"];

function printList (tasks){
    let i;
    tasks.forEach(task => 
    { i = task;
     console.log(i)}
   
    );
   
}
printList(tasks)


//11
let temp = 16;
function checkTemp (temp){
    if(temp>30){
     return "It's Hot!"
    }
    else {
        return "It's mild or cool"
    }
}
let temperature = checkTemp (temp);
console.log(temperature);


//12

let base  = 5;
let powerCalculator = (( base, exponent = 2 )=>{
    return base**exponent
   
})
console.log(powerCalculator(base));

//13

let content = "hello"
function makeListItem (content){
    return `<li> ${content} </li>`

}
console.log(makeListItem(content));

//14

let num = 5;
function isPositive (num){
  if(num>0){
    return "True"
  }
  else{
    return "False"
  }
}
console.log(isPositive(num));

//15

let count = 6;
function Counter (){
    
    count= count+1;
    return count 
}
Counter();
console.log(Counter(count))

//16

function execute (callback){
    callback();

}
execute (()=>{
    console.log("Task Done")
})


//17

const color = ["Red","Blue","Green"];

function getFirstElement(color) {
    return color [0];

    
}
console.log(getFirstElement(color));


//18

const user = {name :"Alice",age :24};

function getUserAge(user) {
    let age = user.age;
    return age;
}
console.log(getUserAge(user));

//19
let stringName = "kowsar";
function capitalizeName (stringName){
    let capitalize = stringName.charAt(0).toUpperCase()+stringName.slice(1).toLowerCase();
    return capitalize;

}
console.log(capitalizeName(stringName));