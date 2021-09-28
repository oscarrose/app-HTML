
//select the elements
const btnContador= document.getElementById("contador");
const btnReset=document.getElementById("btnReset");

//add events
btnContador.addEventListener('click', contador);
btnReset.addEventListener("click", ()=>{
    document.querySelector('p').innerText= 0;
})

//programming the function
function contador(){
    let count=parseInt(document.querySelector('p').textContent);
    count= count +1;
    document.querySelector('p').innerText= count;
}
