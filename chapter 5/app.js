
var addition = document.querySelector(".addition");
var a = 38;
var b = 93;
var result = a + b
addition.innerHTML = "The result of " + a + " + " + b + " is " + result;


var Subtraction = document.querySelector(".subtraction")
var Division = document.querySelector(".division")
var Mudulas = document.querySelector(".modulas")

var c = 90
var d = 180
var Sresult = c - d
Subtraction.innerHTML = "The result of " + c + " - " + d + " is " + Sresult;

var e = 150
var f = 110
var Dresult = c / d
Division.innerHTML = "The result of " + e + " / " + f + " is " + Dresult;

var g = 4
var h = 30
var Mresult = g % h
Mudulas.innerHTML = "The result of " + g + " % " + h + " is " + Mresult;


var Value;
var Question_03 = document.querySelectorAll(".question_03 .line")
Question_03[0].innerHTML = "Value after variable declaration is:" + Value;
var Value = 14;
Question_03[1].innerHTML = "Initial value:" + Value;
Value++
Question_03[2].innerHTML = "Value after increment is:" + Value;
Value += 10;
Question_03[3].innerHTML = "Value after addition is:" + Value;
Value--;
Question_03[4].innerHTML = "Value after decrement is:" + Value;

var remainder = Value % 7;
Question_03[5].innerHTML = "The remainder is:" + remainder;

var question_04 = document.querySelector(".question_04")
var Ticket_Price = 600;
var Number_Of_Tickets = 5;
var Total_Cost = Ticket_Price * Number_Of_Tickets;
question_04.innerHTML = "Total cost of buying " + Number_Of_Tickets + " movie tickets is " + Total_Cost + " PKR.";

var question_05 = document.querySelector(".question_05")
var Number = 12;
for (var i = 1; i <= 10; i++) {
    var result = Number * i;
    question_05.innerHTML += Number + " x " + i + " = " + result + "<br>";
}
var Number = 20;
for(let  i = 1; i<=10; i++){
    var result = Number * i;
    question_05.innerHTML += Number + " x " + i + " = " + result + "<br>";
}

var question_06 = document.querySelector(".question_06")
var Celsius = 25;
var Fahrenheit = (Celsius * 9 / 5) + 32;
question_06.innerHTML = Celsius + "°C is " + Fahrenheit + "°F";
var Fahrenheit = 77;
var Celsius = (Fahrenheit - 32) * 5 / 9;
question_06.innerHTML += "<br>" + Fahrenheit + "°F is " + Celsius + "°C";

var question_07 = document.querySelectorAll(".car_details")
var cart_message = document.querySelector(".cart-message")

var Item1 = 200
var item1_Quantity = 3
var Item2 = 300
var item2_Quantity = 7
var Shipping_charges = 100;

question_07[0].innerHTML = "Price of item 1" + " " + " = " + Item1
question_07[1].innerHTML = "Price of item 2" + " " +  " = " + Item2
question_07[2].innerHTML = "Ordered quantity of item 1" + " " + " = " + item1_Quantity
question_07[3].innerHTML = "Ordered quantity of item 2" + " " + " = " + item2_Quantity
question_07[4].innerHTML = "Shipping charges" + " " + " = " + Shipping_charges
var resultCart = Item1 * item1_Quantity + Item2 * item2_Quantity + Shipping_charges
cart_message.innerHTML = "The Total Cost OF Your Order is" + resultCart

var question_08 = document.querySelector(".question_08")
var total_marks = 550
var marks_obtained = 430
var percentage = (marks_obtained / total_marks) * 100
question_08.innerHTML = "Percentage obtained by the student is" + percentage.toFixed(2) + "%";


var question_09 = document.querySelector(".question_09")
var us_dollars = 30
var saudi_riyals = 55
var exchange_rate_usd_to_pkr = 279.24
var exchange_rate_sar_to_pkr = 74.04 

var total_currency_in_pkr = (us_dollars * exchange_rate_usd_to_pkr) + (saudi_riyals * exchange_rate_sar_to_pkr)
question_09.innerHTML = total_currency_in_pkr


var question_10 = document.querySelector(".question_10")
var number = 15
var result = (number + 5) * 10 / 2
question_10.innerHTML = "The result of the arithmetic sequence is" + result

var Current_Year = document.querySelector(".current_year")
var Brith_age = document.querySelector(".brith_age")
var Original_age = document.querySelector(".original_age")
var birthYear = parseInt(prompt("Enter the person's birth year: "));
var GetFullYear = new Date().getFullYear();
var ageCurrent = birthYear
var age1 = GetFullYear - birthYear;

Current_Year.innerHTML = "Current Year"  + " " +GetFullYear;
Brith_age.innerHTML = "Brith Day Year"  + " " + ageCurrent;
Original_age.innerHTML = "Your age"  + " " + age1;

var question_13 = document.querySelector(".question_13")
var favoriteSnack = prompt("Enter your favorite snack: ");
var currentAge = parseInt(prompt("Enter your current age: "));
var maximumAge = parseInt(prompt("Enter your maximum age: "));
var estimatedAmountPerDay = parseInt(prompt("Enter the estimated amount per day: "));

var totalAmount = (maximumAge - currentAge) * estimatedAmountPerDay;
question_13.innerHTML = "You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge;