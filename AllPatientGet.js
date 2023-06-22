document.getElementById('getall').addEventListener('click', function () {
    getapi(api_url);
});



    
    // api url
const api_url =
"http://localhost:8080/getall";

// Defining async function
async function getapi(url) {

// Storing response
const response = await fetch(url);

// Storing data in form of JSON
var data = await response.json();
console.log(data);
if (response) {
    hideloader();
}
show(data);
}
// Calling that async function


// Function to hide the loader
function hideloader() {
document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
let tab =
    `<tr>
    <th> id</th>
    <th>firstname</th>
    <th>lastname</th>
    <th>age</th>
    <th>contactno</th>
    <th>gender</th>
    <th>BloodTestResult</th>
    <th>UrineTestResult</th>
    </tr>`;

// Loop to access all rows
for (let r of data) {
    tab += `<tr> 
<td>${r.id} </td>
<td>${r.firstname}</td>
<td>${r.lastname}</td> 
<td>${r.address}</td>          
</tr>`;
}
// Setting innerHTML as tab variable
document.getElementById("Patient").innerHTML = tab;
}




    