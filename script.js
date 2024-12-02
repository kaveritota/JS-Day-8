// 1. Eligibility Check
// Write a condition to check if a student is eligible for a scholarship. The criteria are:
// - The student’s grade is A or B.
// - The student’s attendance is above 75%.
// Use a ternary operator to assign "Eligible" or "Not Eligible" to a variable.
var grade="B";
var attendance=90;
var res1= ((grade=="A"|| grade=="B") && (attendance>75))? "Eligible":"Not Eligible"
console.log(res1);
console.log("----------------------------------------------------------------------------------------------------")

// 2. Age Group Classification
// Classify a person based on their age:
// - If the age is less than 13, they are a “Child”.
// - If the age is between 13 and 19 (inclusive), they are a “Teenager”.
// - Otherwise, they are an “Adult”.
// Use nested ternary operators to determine the classification.

var age=30;
var res2=(age <= 13 )?"child":(age>13 && age<=19)?"Teenager":"Adult"
console.log(res2);
console.log("----------------------------------------------------------------------------------------------------")

// 3. Login Status
// Check the login status of a user. A user is considered logged in if:
// - isLoggedIn is true.
// - Their session is active (sessionActive is true).
// Use a ternary operator to log "Welcome Back" if the user is logged in and "Please Log In" otherwise.
var loggedIn=false;
var sessionActive=true;
var res3=(loggedIn==true && sessionActive==true )?"Welcome Back" :"Please Log in";
console.log(res3);
console.log("---------------------------------------------------------------------------------------------------")
// 4. Grade Evaluation
// Assign a letter grade based on a student’s score:
// - Scores 90 and above: "A".
// - Scores between 80 and 89: "B".
// - Scores between 70 and 79: "C".
// - Scores below 70: "Fail".
// Use nested ternary operators to determine the grade.
var score=40;
var res4=(score>100)?"Enter marks correctly":(score>=90)?"A":(score>=80 && score<90)?"B":(score>=70 && score<80)?"C":"Fail";
console.log(res4);
console.log("--------------------------------------------------------------------------------------------------------")
// 5. Product Discount Validation
// Determine the discount for a product based on the following criteria:
// - If the product price is greater than $100, the discount is 20%.
// - Otherwise, the discount is 10%.
// Use a ternary operator to set the discount percentage.
var price=175;
var res5=(price>100)?"the discount is 20%":"discount is 10%";
console.log(res5);