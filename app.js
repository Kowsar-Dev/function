// //----- Function -----//

// // let firstName = "Kowsar";
// // let lastName = "Ahmed";
// // let result = greetUser(firstName,lastName)
// // function greetUser (firstName ,lastName){
    
// //     let fullName = firstName+lastName;
// //     return fullName;

// // }

// // console.log(result);



// // function outer(a){
// //   function inner(b){
// //     let z = a+b;
// //     return z;
// //   }
// //   return inner;
// // }

// // let outerResult = outer(2)

// // console.log(outerResult(4));

// //1

// let name = "Kowsar";

// function greetUser (name){
//     let nam = name;
//      return nam;
    
// }

// console.log("Welcome " ,greetUser(name));


// //2

// let sum = 0;

// function sumMath (a,b){
//    sum = (a+b);
//    return sum;
// }
// console.log(sumMath(4,6));


// //3


// let result = 0;

// let doubleNumber =  ((num1) => {
//     result = num1*2 ;
  
//      return result;
//     }
// )
// let number1 = doubleNumber(4);
// let number2 = doubleNumber(6)
// console.log(number1,number2);



// //4

// function dinnerCost (price ,texRate = 0.05){
//     return price + (price*texRate);

// }
// let cost = dinnerCost(100);
// console.log(cost)


// //5

// let stringLength = (string =>string.length)
// let string = stringLength("i love myself");
// console.log(string);


// //6

// function  applyDiscount (price ,percentage){
//    return price-(price*(percentage/100))
// }
//  function totalPrice(){
//     let total = applyDiscount(200,10);
//     return total;

//     }
//     console.log(totalPrice());

// //7

// let age = 1;

// function isAdult (age){
//     if(age>=18){
//         let isAdult = "You are Adult";
//         return isAdult;
//     }
//     else if(age<18 && age >=1){
//         let isChild ="You are a Child";
//         return isChild;
//     }
//     else{
//         return "Invalid input"
//     }
// }

// console.log(isAdult(age));


// //8

// function randomNumber (){
//     let randomNumber = (Math.floor(Math.random() *10)+1);
//     return randomNumber;

// }
// console.log(randomNumber());


// //9

// function boxVolume (length,width,height){
//     let volume =( length*width*height);
//     return volume;


// }
// let volume = boxVolume (5,2,3);
// console.log(volume);

// //10


// const tasks = ["Buy Milk","Code","Sleep"];

// function printList (tasks){
//     let i;
//     tasks.forEach(task => 
//     { i = task;
//      console.log(i)}
   
//     );
   
// }
// printList(tasks)


// //11
// let temp = 16;
// function checkTemp (temp){
//     if(temp>30){
//      return "It's Hot!"
//     }
//     else {
//         return "It's mild or cool"
//     }
// }
// let temperature = checkTemp (temp);
// console.log(temperature);


// //12

// let base  = 5;
// let powerCalculator = (( base, exponent = 2 )=>{
//     return base**exponent
   
// })
// console.log(powerCalculator(base));

// //13

// let content = "hello"
// function makeListItem (content){
//     return `<li> ${content} </li>`

// }
// console.log(makeListItem(content));

// //14

// let num = 5;
// function isPositive (num){
//   if(num>0){
//     return "True"
//   }
//   else{
//     return "False"
//   }
// }
// console.log(isPositive(num));

// //15

// let count = 6;
// function Counter (){
    
//     count= count+1;
//     return count 
// }
// Counter();
// console.log(Counter(count))

// //16

// function execute (callback){
//     callback();

// }
// execute (()=>{
//     console.log("Task Done")
// })


// //17

// const color = ["Red","Blue","Green"];

// function getFirstElement(color) {
//     return color [0];

    
// }
// console.log(getFirstElement(color));


// //18

// const user = {name :"Alice",age :24};

// function getUserAge(user) {
//     let age = user.age;
//     return age;
// }
// console.log(getUserAge(user));

// //19
// let stringName = "kowsar";
// function capitalizeName (stringName){
//     let capitalize = stringName.charAt(0).toUpperCase()+stringName.slice(1).toLowerCase();
//     return capitalize;

// }
// console.log(capitalizeName(stringName));

// //20


// function outerFunction (){
//     let message = "Hello";
//     function innerFunction(){
//           return message;
//     }
//     let inner = innerFunction ;
//     return inner;
// }

// let call = outerFunction();

// console.log(call())

// //21

// let card = [];

// function shoppingCard (item){
//     card.push(item)
// }

// shoppingCard("Apples1")

// shoppingCard("Apples2")
// console.log(card);

// //22

// const numbers = [10,20,30];
// function  removeNumber (num){
//     numbers.pop(num)  
// }
// removeNumber(num);
// console.log(numbers);

// //23

// const queue = ["Anya","Ben","Chloe"];

// function removeFront  (names){
//     queue.shift(names);
// }
// removeFront();
// console.log(queue)

// //24

// const queue1 = ["Ben","Chloe"];
// let name1 = "VIP Customer"
// function addName (name1){
//     queue1.unshift(name1)
// }
// addName(name1);
// console.log(queue1);

// //25

//  const movies = ["Dune", "Arrival", "Interstellar"];

//  function forOFLoop (){
//     let s = "";
//     for(let movie of movies){
//        s += movie +` `;
       
//     }
//     return s ;
//  }

// console.log(forOFLoop());

// //26

// const inventory = { apples: 5, bananas: 10, oranges: 3 };

// function forInLoop (){
//     let s = "";
//     for(let inven in inventory){
//          s += inven + ` `;
//     }
//     return s;
// }
// console.log(forInLoop())

// //27

// const inventory1 = { apples: 5, bananas: 10 };

//  function forInLoop1 (){
//     let s = "";
//     for(let inven in inventory1){
//          s += `${inventory1[inven]}\n`;
//     }
//     return s;
// }
// console.log(forInLoop1())

// //28

// const originalScores = [100, 90, 80];

// function saveGame (){
//    let newScores = originalScores.slice();
//    return newScores;
// }
// console.log(saveGame());

// //29

// const allScores = [100, 90, 85,80, 70, 60];

// function scores (){
//     let allScore = allScores.slice(0,3)
//     return allScore;
// }
// console.log(scores());


// //30

// const data = [5, 12, 3, 22, 8];
// const filtered = [];
// function filterList (){
//     for(let info of data){
//         if(info>10){
//             filtered.push(info)
//         }
//     }
// }
// filterList();
// console.log(filtered)


// const array = [1,2,3,4,5,6,7,8,9,10];

// const newArray = array.filter(function (e){
//           return e % 2 == 0;
// })

// console.log(newArray);




// let user = {
//     name : "Kowsar",
//     email : "kowsara2766@gmail.com",
//     phone : "01763449070" ,
// }

// function messageSend (msg , sendTo) {
//     return ` ${msg} ,${sendTo}`
    
// }

// let email = messageSend("Email send to :",user.email)
// let sms = messageSend("Sms send to :",user.phone)
// console.log(email);
// console.log(sms);


// let user1 = {
//     name : "Kowsar Ahmed",
//     email : "kowsara2766@gmail.com",
//     phone : "01763449070" ,
// }
// let user2 = {
//     name : "Mohsin mormo",
//     email : "mohsinmormo@gmail.com",
//     phone : "01522112387" ,
// }

// function smsSend(user) {
//     console.log("Sms send to :",user.phone);
// }


// function msgSend(user) {
//     console.log("Message send to :",user.phone);
// }


// function emailSend(user) {
//     console.log("Email send to :",user.email);
// }

// function sendMessage (user ,notify) {
//     console.log("Since you are authorized");
//     notify(user)
    
// }

// sendMessage(user1, emailSend);
// sendMessage(user2, msgSend)


