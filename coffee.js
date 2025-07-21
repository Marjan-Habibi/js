let username = prompt("Enter Your Username(admin or user)");
let password = prompt("Enter Your Password!");

if ((username === "admin" || username === "user") && password === "1234")
{
    alert("Login successful!");
}
else{
    alert("Invalid credentials. Access denied.Try again!")
    throw new Error("Stop execution");
}
let role = username;
let securityLevel = username === "admin" ? "high" : "low";


let customerName = prompt("What is your Name?");
let age =  parseInt(prompt("How old are you?"));
let  coffeeType = prompt("Choose coffee type: espresso, latte, or cappuccino.")
let  quantity = parseInt(prompt("How many cups do you want?"));

let pricePerCup;
if(coffeeType === "espresso"){
    pricePerCup = 2.5;
}
else if(coffeeType === "latte"){
    pricePerCup = 3.5;
}
else if(coffeeType === "cappuccino"){
    pricePerCup = 4.0;
}
else{
    alert("Invalid coffee type!");
    throw new Error("Invalid order");
}
let orginalTotal =  pricePerCup*quantity;
let discount = (age < 18 || age > 60 ) ? orginalTotal * 0.10 : 0;
let finalTotal = orginalTotal - discount;

alert(`Hello ${customerName}!
You ordered ${quantity} ${coffeeType}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Final total: $${finalTotal.toFixed(2)}`);

let split = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));

let tipAmount = (finalTotal * tipPercent) / 100;
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / split;

alert(`Tip: $${tipAmount.toFixed(2)}
Total with Tip: $${totalWithTip.toFixed(2)}
Split between ${split} people: $${amountPerPerson.toFixed(2)} each`);