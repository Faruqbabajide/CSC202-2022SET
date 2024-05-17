// How do you make decisions? 

//Switch Statement

var dayOfTheWeekCount = 1; 
switch (dayOfTheWeekCount){ 
case 1: 
console.log("Sunday"); 
break; 
case 2: 
case 3: 
case 4: 
case 5: 
case 6: 
case 7: 
console.log("Monday"); 
break; 
console.log("Tuesday"); 
break; 
console.log("Wednesday"); 
break; 
console.log("Thursday"); 
break; 
console.log("Friday"); 
break; 
console.log("Saturday"); 
break; 
default: 
console.log("Sorry, day of the week numbered " + dayOfTheWeekCount + " does not exist") 
} //The switch statement prints out Sunday 

var ageRange = "below 13"; 
switch (ageRange){ 
case "below 1": 
console.log("Infant"); 
break; 
case "below 13": 
console.log("Pre-teen"); 
break; 
case "below 20": 
console.log("Teenager"); 
break; 
default: 
console.log("Adult") 
}//This switch statement should print out Pre-teen.