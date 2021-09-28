//select the elemts html
const inputUser = document.querySelector('#inputUser');
const inputPass = document.querySelector('#inputPassword');
const btnEnter = document.getElementById('btnEnter');

// add the Events and function
btnEnter.addEventListener('click', valited() );
  



function valited(){
  
  if(inputPass.value ===""){
   document.querySelector("#errorPassword").hidden = false;
     document.querySelector("#errorPassword").innerHTML="Ingrese una contraseña"; 
  }
  
}


