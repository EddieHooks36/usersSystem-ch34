//array of the students names

let studentNames = [ "Eddie",
"Hethe",
"Gary",
"Brianna",
"John"];
console.log(studentNames);

// function displayStudentNames(){

//     for(let i=0; i < studentNames.length; i++){

//       document.getElementById("students").innerhtml += studentNames[i];
//     }   
// }
// displayStudentNames();

let users = [
    {
    name:"Eddie",
    salary:10000
    },
    {
        name:"Eddie",
        salary:10000
    },
];

function displayUsers(){
    for(let i=0; i < studentNames.length; i++){
        row+=`<tr>
        <td>${}</td>
        </tr>
        `;
    }

    document.getElementById("students").innerHTML = row;
}  