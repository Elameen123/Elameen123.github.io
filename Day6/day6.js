staffDetails = (arrayOfNum, birthDay) => {
  // Getting Staff Name 
  Name = document.getElementById('Name').value;

   // Getting Staff Phone Number. 
   telNo = document.getElementById('Telephone').value;

    // Getting Staff Day of Birth 
   birthDay = document.getElementById('D.O.B').value;
   console.log(birthDay);

   // Converting the Telephone Number to an Array 
  arrayOfNum = String(telNo).split('').map(str => Number(str));

  console.log(arrayOfNum);
  
  Result = [];

  n = 0;
  while (n < arrayOfNum.length) {
    sum = arrayOfNum[n] + arrayOfNum[n+1];
    if (sum == birthDay) {
      Result.push(n);
      Result.push(n+1);
      console.log(Result, "at Sum", sum);
    }
    // else {
    //   console.log(-1, -1)
    // }
    n++;
  }

  // console.log(Result)


  alert("Congratulations!!, your Login was Successful");

  // console.log(staffArray);

}