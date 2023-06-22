async function delToDoData() {
    const num = $('#inp-1').val();

    const url = 'http://localhost:8080/Patient?id='+num;

    var result = await fetch(url, {method: 'DELETE'});

    var jResult = await result.json();

    console.log(jResult.msg);

    $('#div-1').html("<h1> "+jResult.msg+ "</h1>");
// if (jResult.title == null) {
//     $('#div-1').html("<h2>  Data not found!!!!</h2>");
// } else {
    
//     $('#div-1').html("<h3> (" +jResult.title+") Student Deleted successfully from the Database</h3>");
// }



}


document.getElementById('btn-1').addEventListener('click', function () {
    delToDoData()
});

