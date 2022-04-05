// The Sum Function 

// Add up the Numbers in the Array 
Sum = () => {
  
  // Getting the Name inputted 
 const Name = document.getElementById("Name").value;

  // Getting the Telephone number inputted 
  const telNo = document.getElementById("digit").value;
console.log(telNo)

// Converting the Telephone Number to an Array 
const arrayOfNum = String(telNo).split('').map(str => Number(str));

console.log(arrayOfNum)

// Initializing the Sum Value 
  sum = 0;

  // Iterating through the Array of Numbers 
  for(x=0; x<arrayOfNum.length; x++) {
    // Summing up the Array of Numbers 
    sum += arrayOfNum[x]
  }
  document.getElementById('conclusion').innerHTML = Name + ", the Sum of your Telephone Number is " + sum;
  console.log(sum)
}

// Document.getElementById('').innerHTML = 