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

// let user = {
//     name : "ridoy",
//     roll : "668829",
//     phone : "01605167308",
// }

// function changeName(user , name ,phone) {
// let change = {...user , name,phone}
//     return change;

// }
// let result = changeName(user, "kawsar","01522112387");
// console.log(result);
// console.log(user);

// let user = {
//   name : "ridoy",
//   roll : 668829,
//   phone : "01605167308",
// };

// function changeName(user , name ,roll, phone = user.phone ) {
//   let change = { ...user , name , phone,roll };
//   return change;
// }

// let user4 = {
//   nam1 () {
//     return changeName(user , "kowsar" ,658787, "01522112387" );
//   }
// };

// console.log(user);

// console.log(user4.nam1());

// // Class

//    class products {
//          constructor ( names ,prices ){
//             this.name = names;
//             this.price = prices;
//          }

//          displayPrices (){
//             console.log(`Product Name is : ${this.name}\nProduct Price is ${this.price}`)
//          }

//          calculateTotal (texRate){
//             return this.price + (this.price*texRate)

//          }

//    }
//     let texRate = 0.02;
//    const product1 = new products("Phone",200  );
//    product1.displayPrices();
//     const product2 = new products("Tv", 400  );
//    product1.displayPrices();
//     const product3 = new products("Car",800  );
//    product1.displayPrices();

//    let total = product3.calculateTotal(texRate);
//    console.log(`Total price with tax ${total}`);

// // 1 Define a class named Car with a constructor that accepts and stores a brand.
// class car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
//   greet() {
//     console.log(`${this.brand} ${this.year}`);
//   }
// }
// let car1 = new car("bmw", 2024);
// car1.greet();

// // 2 Create a new instance (object) of the Car class, passing a brand name like "Toyota"

// class brand {
//   constructor(brands) {
//     this.brands = brands;
//   }
//   greet() {
//     console.log(`${this.brands}`);
//   }
// }

// let brand1 = new brand("Toyota");
// brand1.greet();

// //3 Add a method named honk to the Car class that prints "Beep beep!" to the console.



// // class Cars {
// //   constructor(brand) {
// //     this.brand = brand;
// //   }

// //   displayBrand() {
// //     return this.brand; // return brand instead of console.log
// //   }

// //   honk() {
// //     let hok = `${this.displayBrand()} says: Beep beep!`;
// //     return hok;
// //   }
// // }

// // let cars1 = new Cars("Civic");

// // console.log(cars1.honk()); // Output: Civic says: Beep beep!
// // console.log(cars1.displayBrand()); // Output: Civic



// class cars {
//   constructor(brand) {
//     this.brand = brand;
//   }
//   displayBrand() {
//     console.log(`${this.brand}`);
//   }
//   honk() {
//     console.log("Beep beep!");
//   }
// }

// let cars1 = new cars("Civis");
// cars1.honk();
// cars1.displayBrand();


// //4  Add a method getInfo to Car that returns a string using the stored brand.

// class jeep {
//   constructor(brand) {
//     this.brand = brand;
//   }
//   displayBrand() {
//     console.log(this.brand);
//   }
//   honk() {
//     console.log("Beep beep!");
//   }

//   getInfo() {
//     return `This car is a ${this.brand}`;
//   }
// }

// let myCar = new jeep("Noha");
// myCar.displayBrand();
// myCar.honk();
// console.log(myCar.getInfo());



// //5 Define a class User with a constructor that accepts and stores name and email.

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   get getName() {
//     return this.name;
//   }
//   get getEmail() {
//     return this.email;
//   }
// }
 
// const User1 = new User("shamim", "shamim3536@gmail.com");
 
// console.log(User1.getName);
// console.log(User1.getEmail);

 
// //6 Define a class Item with name and quantity. If quantity is not provided, default it to 0.


// class Item {
//   constructor(name, quantity = 0) {
//     this.name = name;
//     this.quantity = quantity;
//   }
 
//   get getName() {
//     return this.name;
//   }
 
//   get getQuantity() {
//     return this.quantity;
//   }
 
//   set setQuantity(newQuantity) {
//     this.quantity = newQuantity;
//   }
// }
 
// const item1 = new Item("Apple", 10);
// const item2 = new Item("Banana");
 
// console.log(item1.getName);
// console.log(item1.getQuantity);
 
// item2.setQuantity = 5;
// console.log(item2.getQuantity);

 
// //7 Create two instances of the Item class: one with a quantity and one without.

 
// class Items {
//   constructor(names, quantity = "samoli") {
//     this.names = names;
//     this.quantity = quantity;
//   }
// }
 
// let Items1 = new Items("hasi");
// console.log(Items1.names, Items1.quantity);
 


// //8 Add a method updateQuantity(newCount) to the Item class to change the quantity property.

// class shamim {
//   constructor(name, quantity = 0) {
//     this.name = name;
//     this.quantity = quantity;
//   }
 
//   get getName() {
//     return this.name;
//   }
 
//   get getQuantity() {
//     return this.quantity;
//   }
 
//   updateQuantity(newCount) {
//     this.quantity = newCount;
//   }
// }
 
// let fruit1 = new shamim("Mango", 10);
// let fruit2 = new shamim("Banana");
// l = console.log(fruit1.getName);
// console.log(fruit1.getQuantity);
 
// console.log(fruit2.getName);
// console.log(fruit2.getQuantity);
 
// fruit2.updateQuantity(15);
// console.log(fruit2.getQuantity);


 
// //9 Define a class ElectricCar that extends the Car class.


 
// // Parent class
// class Car {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }
 
//     getCarInfo() {
//         return `${this.brand} ${this.model}`;
//     }
// }
 
 
// class ElectricCar extends Car {
//     constructor(brand, model, batteryCapacity) {
//         super(brand, model);  
//         this.batteryCapacity = batteryCapacity;
//     }
 
//     getBatteryInfo() {
//         return `Battery Capacity: ${this.batteryCapacity} kWh`;
//     }
// }
 
// // Object creation
// const myTesla = new ElectricCar("Tesla", "Model 3", 75);
 
 
// console.log(myTesla.getCarInfo());      
// console.log(myTesla.getBatteryInfo());


 
// // 10 In ElectricCar, use super() in the constructor to pass the brand to the parent Car class.
 


// class Car {
//     constructor(brand) {
//         this.brand = brand;
//     }
 
//     getBrand() {
//         return `Brand: ${this.brand}`;
//     }
// }
// class ElectricCar extends Car {
//     constructor(brand, model, batteryCapacity) {
//         super(brand);
//         this.model = model;
//         this.batteryCapacity = batteryCapacity;
//     }
 
//     getCarInfo() {
//         return `${this.model} with battery ${this.batteryCapacity} kWh`;
//     }
// }
 
// // Object creation
// const myTesla = new ElectricCar("Civis", "Model 7", 80);
 
 
// console.log(myTesla.getBrand());    
// console.log(myTesla.getCarInfo());  


 
//  // 11    Create an empty Set named idSet.


//   const idSet = new Set();
//   console.log(idSet);
 


// // 12 Add the numbers 10, 20, and 10 (a duplicate) to idSet.


 
// let idSet = new Set();
// idSet.add(10);
// idSet.add(20);
// idSet.add(10);
 
// console.log(idSet);


 
// // 13 Print the number of unique elements currently in idSet.


 
// let idSet = new Set();
// idSet.add(10);
// idSet.add(20);
// idSet.add(10);
 
// console.log(idSet.size);

 
// // 14 Use the appropriate method to check if the number 20 exists in idSet.

// let idSet = new Set();
// idSet.add(10);
// idSet.add(20);
// idSet.add(10);
 
// console.log(idSet.has(20));
// console.log(idSet.has(30));
 

// // 15  Remove the number 10 from idSet.


// let idSet = new Set();
// idSet.add(10);
// idSet.add(20);
// idSet.add(10);
 
// idSet.delete(10);
// console.log(idSet);
