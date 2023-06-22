async function getPatientData() {
    const id = $('#inp-1').val();
    const name = $('#inp-2').val();
    const last = $('#inp-3').val();
    const gender = $('#inp-4').val();

    const url = 'http://localhost:8080/update?id='+id+'&name='+name+'&last='+last+'&gender='+gender;

    var result = await fetch(url, {method: 'PUT'});

    var jResult = await result.json();

    console.log(jResult);

    if (jResult.id == null) {
        $('#div-1').html("<h1> USER is not availble.....</h1>");        
    } else {
        $('#div-1').html("<h1> id:- "+jResult.rollno+ "</h1>");
        $('#div-2').html("<h1> firstname:- "+jResult.firstname+ "</h1>");
        $('#div-3').html("<h1> lastname:- "+jResult.lastname+ "</h1>");
        $('#div-4').html("<h1> gender:- "+jResult.gender+ "</h1>");
    }


}

document.getElementById('btn-1').addEventListener('click', function () {

    getPatientData();
});