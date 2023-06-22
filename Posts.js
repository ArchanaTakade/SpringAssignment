
async function addToDo() {
    const num1 = $('#firstname').val();
    const num2 = $('#lastname').val();
    const num3 = $('#gender').val();

    
    const url = 'http://localhost:8080/post'

   
       
    let result = await fetch(
                             url, 
                             {
                                method: 'POST',
                                headers: {"Content-Type": "application/json"}, 
                                body: JSON.stringify({
                                            
                                            firstname: num1,
                                            lastname: num2,
                                            address: num3
                                })
                             }
                             );
                            
                                                      

    let jResult = await result.json();
    console.log(jResult);


    // $('#div-1').html("<h1> rollno:- "+jResult.rollno+ "</h1>");
    $('#div-2').html("<h1> firstname:- "+jResult.firstname+ "</h1>");
    $('#div-3').html("<h1> lastname:- "+jResult.lastname+ "</h1>");
    $('#div-4').html("<h1> gender:- "+jResult.gender+ "</h1>");
    


     }
                          

  document.getElementById('btn-1').addEventListener('click', function () {
    addPatient();
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()