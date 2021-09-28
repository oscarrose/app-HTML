const fullContenier = document.getElementById("full-contenier"),
fullimg = document.getElementById("full-img");


function closeImg() {
   fullContenier.style.display="none";
}

function openImg(img){
    fullContenier.style.display="flex";
    fullimg.src=img;
}