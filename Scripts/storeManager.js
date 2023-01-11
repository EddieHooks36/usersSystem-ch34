function saveUser(user){
    console.log(user); //this is an obj
    let val = JSON.stringify(user); //parse the obj into a string
    console.log(val); //this is the string
    localStorage.setItem("users",val);
}