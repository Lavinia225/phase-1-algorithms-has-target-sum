function hasTargetSum(array, target) {
  // Write your algorithm here

  let secondNumStarting = 0;

  for (i = 0; i < array.length; i++){
    secondNumStarting += 1

    for (j = secondNumStarting; j < array.length; j++){
      let sum = array[i] + array[j]
       if (sum === target){
        return true
       }
    }
    
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n² + 1)
  O(n²)
*/

/* 
  Add your pseudocode here
  
  Loop iterates through the array
  A nested loop iterates seperately
  sum = array[i] + array[j]
  return sum === expectedSum //This failed

  Declare a starting value of 0 for the second for loop

  loop(i) iterates through array, starting at first element
  Adds 1 to the starting value

  Nested inside, a loop(j) iterates through the array, starting at the second element
  Adds array[i] and array[j] together
  
  If array[i] + array[j] === targetNum
  return true

  Outside of the loops and at the end of the function, return false
*/

/*
  Add written explanation of your solution here
  We declare a starting value of 0 for later. Then, we create a loop(i) that iterates through the array. Within the loop, it adds 1 to starting value.
  The starting value is then used to tell the second loop(j) where to start. 
  The second loop will take every element at/after the starting value and add it to array[i]. If they at any point equal the target number
  The loops will return true and stop immediately. 

  Otherwise, the first loop will cause the first number to move forwards one after it has been added to everything after it
  And the second loop will also move forwards one by one, through the rest of the array, and add everything against the first number 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
