//? Chapter No 26 - 30

//TODO Question No.01

// var num = +prompt("Enter Any Positive Number");

// document.write("Number : " + num + "<br>");
// document.write("Round off Value : " + Math.round(num) + "<br>");
// document.write("Floor Value : " + Math.floor(num) + "<br>");
// document.write("Ceil Value : " + Math.ceil(num) + "<br>");

//TODO Question No.02

// var num = +prompt("Enter Any Negative Number");

// document.write("Number : " + num + "<br>");
// document.write("Round off Value : " + Math.round(num) + "<br>");
// document.write("Floor Value : " + Math.floor(num) + "<br>");
// document.write("Ceil Value : " + Math.ceil(num) + "<br>");

//TODO Question No.03

// var num = +prompt("Enter Any Number");

// document.write("The Absolute Value of " + num + " is " + Math.abs(num) + "<br>");

//TODO Question No.04

// var num = Math.ceil(Math.random() * 6);

// document.write("Random Dice Value : " + num + "<br>");

//TODO Question No.05

// var num = Math.ceil(Math.random() * 2);
// document.write(num + "<br>");

// if(num == 2) {
//     document.write("Random Coin Value : Heads" + "<br>");
// }

// else {
//     document.write("Random Coin Value : Tails" + "<br>");
// }

//TODO Question No.06

// var num = Math.ceil(Math.random() * 100);

// document.write("Random Number Between 1 and 100 : " + num + "<br>");

//TODO Question No.07

// var weight = prompt("Enter Your Weight");

// document.write("The Weight of User is " + parseFloat(weight) + " Kilograms.")

//TODO Question No.08

// var num = Math.ceil(Math.random() * 10);

// var value = +prompt("Enter a Number between 1 to 10");

// if(num == value) {
//     alert("Congratulations!");
// }

// else {
//     alert("Try Again! \n▢ Prevent this page from creating additional dialogs.")
// }

//? Chapter No 31 - 34

//TODO Question No.01

// document.write(new Date());

//TODO Question No.02

// var date = new Date();
// var month = date.getMonth();

// var arr = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// alert("Current Month : " + arr[month]);

//TODO Question No.03

// var date = new Date();
// var week = date.getDay();

// var arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// alert("Today is " + arr[week]);

//TODO Question No.04

// var date = new Date();
// var week = date.getDay();

// if (week == 5 || week == 6){
//     document.write("It's Fun Day.");
// }

// else {
//     document.write("Work Day.");
// }

//TODO Question No.05

// var a = new Date();
// var date = a.getDate();

// if (date >= 1 && date <= 15){
//     document.write("First Fifteen Days of the Month.");
// }

// else {
//     document.write("Last Fifteen Days of the Month.");
// }

//TODO Question No.06

// var currentDate = new Date();

// document.write("Current Date : " + currentDate + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970 : " + currentDate.getTime() + "<br>");
// document.write("Elapsed minutes since January 1, 1970 : " + currentDate.getTime()/(1000*60) + "<br>");

//TODO Question No.07

// var a = new Date();
// var hour = a.getHours();

// if (hour <= 0 && hour >= 11){
//     alert("It's A.M.");
// }

// else {
//     alert("It's P.M.");
// }

//TODO Question No.08

// var date2021 = new Date('2021-1-1');

// date2021.setDate(date2021.getDate() - 1);

// var yearEnd = date2021;

// document.write("The last day of 2020: " + yearEnd);


//TODO Question No.09

// var ramzanDate = new Date("2015-06-18");
// var currentDate = new Date();

// var newDate = currentDate - ramzanDate;

// var days = Math.floor(newDate /(1000 * 60 * 60 * 24));

// alert(days + " days have bee passed since 1st Ramzan, 2015");

//TODO Question No.10

// var date2015 = new Date("2015-1-1");
// var currentDate = new Date();

// var newDate = currentDate - date2015;

// document.write("On Redrence Date : " +  date2015 + "<br>");
// document.write(newDate + " seconds had passed since the begining of 2015.")

//TODO Question No.11

// var currentTime = new Date();
// var oneHour = new Date();

// oneHour.setHours(oneHour.getHours() - 1);

// oneHourBefore = oneHour;

// document.write("Current Date : " + currentTime + "<br>");
// document.write("1 hour before, it was " + oneHourBefore);

//TODO Question No.12

// var currentTime = new Date();
// var hundredYear = new Date();

// hundredYear.setFullYear(hundredYear.getFullYear() - 100);

// var hundredYearBack = hundredYear;

// document.write("Current Date : " + currentTime + "<br>");
// document.write("100 years back, it was " + hundredYearBack);

//TODO Question No.13

// var age = +prompt("Enter Your Age.");
// var currentYear = 2023 ;

// var birthYear = currentYear - age;

// document.write("Your Age is " + age + "<br>");
// document.write("Your Birth Year is " + birthYear);

//TODO Question No.14

// var numOfUnit = 410;
// var chargeUnit = 16;
// var latePayment = (numOfUnit*chargeUnit)+350;

// document.write("<h1>K-Electri Bill</h1>");
// document.write("Customer Name : <b>Muhammad Ali</b>" + "<br>");
// document.write("Month : <b>February</b>" + "<br>");
// document.write("Number of Units : <b>" + numOfUnit + "</b> <br>");
// document.write("Charges Per Units : <b>" + chargeUnit + "</b> <br> <br>");
// document.write("Net Amount Payable (within due date) : <b>" + (numOfUnit*chargeUnit) + "</b> <br>");
// document.write("Late Payment Surcharge : <b>" + 350 + "</b> <br>");
// document.write("Gross Amount Payable (after due date) : <b>" + latePayment + "</b> <br>");


