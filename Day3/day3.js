// The FizzBuzz Function 

// FizzBuzz is a game in which the user inputs a numerical value and in return gets the numbers from 1 to that numerical value.
// Here is the fun part; 
// 1. If the range of numbers from 1 to the numerical value contains a number divisible by 3; Fizz is returned in its place.
// 2. If the range of numbers from 1 to the numerical value contains a number divisible by 5; Buzz is returned in its place.
// 3. If the range of numbers from 1 to the numerical value contains a number divisible by 3 and 5; FizzBuzz is returned in its place.
FizzBuzz = (playNum) => {

arrayNum = [];

// Getting the numbers 
for(m=0;m<playNum;m++) {
  generatedNum = (playNum - m);
  arrayNum.push(generatedNum);
}
// console.log(arrayNum)

// Sorting the Array of Numbers Generated in Ascending Order 
arrayOfNum = arrayNum.reverse().map(String);
// console.log(arrayOfNum);

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
  // console.log(gameValue);

  // Displaying Game result in a text Format 
  return Result = gameValue.toString();

  // console.log(Result);

  // // Displaying Result with note in an HTML page 
  // document.getElementById('conclusion').innerHTML = Name + ", here is the result of your FizzBuzz game ;<br> [ " + Result + " ]";
  
}


FizzBuzzPro = () => {

  gamePro = [];

    // Getting the Name inputted 
  const Name = document.getElementById("Name").value;
  console.log(Name);

    // Getting the Play number 1 inputted 
  const playNum1 = document.getElementById("digit1").value;
  console.log(playNum1);
  gamePro.push(playNum1);

  // Getting the Play number 1 inputted 
  const playNum2 = document.getElementById("digit2").value;
  console.log(playNum2);
  gamePro.push(playNum2);


  // Getting the Play number 1 inputted 
  const playNum3 = document.getElementById("digit3").value;
  console.log(playNum3);
  gamePro.push(playNum3);

  gamePro = gamePro.map(Number);
  console.log(gamePro)

  // Invoking the FizzBuzz function on each play number and storing them in an array
  gameResult = [[], [], []]
  gamePlay = 0;
  for (n=0; n<gamePro.length;n++) {
    gamePlay = gamePro[n];
    console.log(gamePlay);
    resultingPlay = FizzBuzz(gamePro[n]);
    console.log(resultingPlay);
    gameResult[n].push(resultingPlay)
  }

  console.log(gameResult);

  // Displaying Result with note in an HTML page 
  document.getElementById('conclusion').innerHTML = Name + ", here is the result of your FizzBuzzPro game ;<br> [ <br> Play1:- [ " + gameResult[0] + " ] , <br> Play2:- [ " + gameResult[1] + " ] , <br> Play3:- [ " + gameResult[2] + "] <br> ]";

}