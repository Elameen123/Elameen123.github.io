staffDetails = () => {
  // Getting Staff Name 
  Name = document.getElementById('Name').value;

   // Getting Staff Email 
   Email = document.getElementById('Email').value;

    // Getting Staff Password 
  Password = document.getElementById('password').value;

   // Getting Staff Level 
   Level = document.getElementById('level').value;

  //  Getting Staff ID 
  // Staff ID is in the order; 
  // OrganizationName-StaffNo.-Level-Track 
   staffID = document.getElementById('staffID').value;

    // Getting Staff Track 
  Track = document.getElementById('track').value;

// Creating an array 
const data = [];
data.push(Name);
data.push(Email);
data.push(Password);
data.push(Level);
data.push(staffID);
data.push(Track);

  // Separating the details by / 
  details = data.join('/');
  
  staffLoginDetails = [];
  staffLoginDetails.push(details);
  console.log(staffLoginDetails);

  const loginData = details.split('/');

  // console.log(loginData);

  // Login Input Labels 
  const loginEntry = ['Name', 'Email', 'Password', 'Level', 'staffID', 'Track'];

  // creating an empty object 
  const staffData = {};

  // Looping through the loginEntry array and the loginData array to pair each login Entry with its corresponding login data 

  loginEntry.forEach((element, index) => {
    staffData[element] = loginData[index];
  }); 

  console.log(staffData);

  alert("Congratulations!!, your Login was Successful");

}
