function displayUsers(usersArray){
     //travel the array
      for(let i=0; i<usersArray.length; i++){
        let user = usersArray[i];
        tr=`
        <tr>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.phone}</td>
            <td>${user.payment}</td>
            <td>${user.color}</td>
            <td>${user.email}</td>
        </tr>`
      }
     //create the tmp
     $("#users-table").append(tr);

     //append the tmp into the HTML table
}
function init(){
    console.log("Listing users...");
    let users = readUsers();
    console.log(users); //display the users in the console
    displayUsers(users); //Displays the users on the table
}
window.onload=init;