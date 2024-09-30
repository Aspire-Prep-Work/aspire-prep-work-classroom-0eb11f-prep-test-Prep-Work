/* 
    JavaScript Practice Exercises For Beginners

    ===========================================

    Beginner Exercises: Part 1
    --------------------------
*/

/* Exercise 1:
--------------
Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
*/

function challengeOne(a,b){
    if (a === 100 || b === 100 || a+ b=== 100){
        return true 
    } else {
        return false 
    }
}

module.exports = challengeOne