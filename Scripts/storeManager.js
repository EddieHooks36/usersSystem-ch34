function saveUser(user){
    let oldUsers = readUsers();
    console.log(user); //this is an obj
    oldUsers.push(user);
    let val = JSON.stringify(oldUsers); //parse the obj into a string
    console.log(val); //this is the string
    localStorage.setItem("users",val);
}

function readUsers(){
    let users = localStorage.getItem("users"); //Getting the users from localstorage
    console.log(users);
    if(!users){ //Not Users?
         //here is the localstorage empty
         return[]; //creating the empty array
    }else{
        //if you get here the localstorage has users
        
        let listUsers = JSON.parse(users);
        console.log(listUsers);
        return listUsers;
    }
}