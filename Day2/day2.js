// The FizzBuzz Function 

// FizzBuzz is a game in which the user inputs a numerical value and in return gets the numbers from 1 to that numerical value.
// Here is the fun part; 
// 1. If the range of numbers from 1 to the numerical value contains a number divisible by 3; Fizz is returned in its place.
// 2. If the range of numbers from 1 to the numerical value contains a number divisible by 5; Buzz is returned in its place.
// 3. If the range of numbers from 1 to the numerical value contains a number divisible by 3 and 5; FizzBuzz is returned in its place.
FizzBuzz = () => {
  
  // Getting the Name inputted 
 const Name = document.getElementById("Name").value;

  // Getting the Telephone number inputted 
  const playNum = document.getElementById("digit").value;
console.log(playNum);

arrayNum = [];

// Getting the numbers 
for(m=0;m<playNum;m++) {
  generatedNum = (playNum - m);
  arrayNum.push(generatedNum);
}
console.log(arrayNum)

// Sorting the Array of Numbers Generated in Ascending Order 
arrayOfNum = arrayNum.reverse().map(String);
console.log(arrayOfNum);

gameValue = []

  // // Iterating through the Array of Numbers and getting the final game value
  for(x=0; x<arrayOfNum.length; x++) {
    // Finding Fizz, Buzz & FizzBuzz.  
    q = x + 1;

    if (((q % 3) === 0) && ((q % 5) === 0)) {
      arrayOfNum[(x)] = 'FizzBuzz';
      gameValue.push(arrayOfNum[(x)]);
    }

    else if (((q % 3) === 0)) {
      arrayOfNum[(x)] = 'Fizz';
      gameValue.push('Fizz');
    }

    else if (((q % 5) === 0)) {
      arrayOfNum[(x)] = 'Buzz';
      gameValue.push(arrayOfNum[(x)]);
    }

    else {
      gameValue.push(arrayOfNum[x]);
    }
  }
  console.log(gameValue);
  // console.log(arrayOfNum[x])

  // Displaying Game result in a text Format 
  Result = gameValue.toString();

  console.log(Result);

  // Displaying Result with note in an HTML page 
  document.getElementById('conclusion').innerHTML = Name + ", here is the result of your FizzBuzz game ;<br>" + Result;
  
}
