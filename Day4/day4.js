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

  // Getting Staff Details as an object 
  staffDetails = {
    Name : Name,
    Email : Email,
    Password : Password,
    Level : Level,
    StaffID : staffID,
    Track : Track
  };

  // console.log(staffDetails);

  // Creating Staff Array 
  staffArray = [];

  // Getting Staff data  
  staffData = Object.values(staffDetails);
  // console.log(staffData);

  // Separating the details by / 
  staffLoginDetails = staffData.join('/');

  // console.log(staffLoginDetails);

  // Getting the staff Login Details in an Array 
  staffArray.push(staffLoginDetails);

  console.log(staffArray);

  alert("Congratulations!!, your Login was Successful")

  console.log(staffArray);

}