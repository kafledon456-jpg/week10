
// ==========================================
// WEEK 10 - JAVASCRIPT BASICS & CONTROL FLOW
// ==========================================


// PART 1: TIME-BASED PERSONALIZED GREETING

// Ask the user for their name
let userName = prompt("What is your name?");

// Get the current hour
let currentHour = new Date().getHours();

// Check the time and display a personalized greeting
if (currentHour < 12) {
    console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
    console.log("Good afternoon, " + userName + "!");
} else {
    console.log("Good evening, " + userName + "!");
}


// PART 2: AGE AND DAYS LIVED VERIFICATION

// Ask the user for their birth year
let birthYear = Number(prompt("What year were you born?"));

// Calculate age
let age = 2026 - birthYear;

// Calculate approximate days lived
let daysLived = age * 365;

// Display age and days lived
console.log("Your age is: " + age);
console.log(
    "You have lived for approximately " + daysLived + " days!"
);

// Check whether the user is an adult or a minor
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// ==========================================
// ADDITIONAL TASK: GREETING BOUNDARY TEST
// ==========================================

// Test hours: 11, 12, 17, and 18

let testHours = [11, 12, 17, 18];

testHours.forEach(function(hour) {

    let greeting;

    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    console.log("Test hour: " + hour + " -> " + greeting);

});


// ==========================================
// END OF WEEK 10 ASSIGNMENT
// ==========================================
