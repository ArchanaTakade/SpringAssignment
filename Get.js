
async function getPatientData() {
    const num = $('#inp-1').val();

    const url = 'http://localhost:8080/Patient?id='+num;

    var result = await fetch(url, {method: 'GET'});

    var jResult = await result.json();

    console.log(jResult);

   $('#div-1').html("<h1> rollno:- "+jResult.id+ "</h1>");
   $('#div-2').html("<h1> firstname:- "+jResult.firstname+ "</h1>");
   $('#div-3').html("<h1> lastname:- "+jResult.lastname+ "</h1>");
   $('#div-4').html("<h1> address:- "+jResult.gender+ "</h1>");
   
}




document.getElementById('btn-1').addEventListener('click', function () {
    getPatientData();
});
