const file = document.getElementById("file");
const buton_aceptar = document.getElementById("buton-aceptar");
const btnPlayPauseTwo = document.getElementById("btnPlayPauseTwo");
    
let audio = document.getElementsByTagName("audio")[0];
let image = document.getElementById("imageUser");
let sound

//mostrar img de pc
file.addEventListener("change", loadFile)
  function loadFile() {
  image.src = window.URL.createObjectURL(event.target.files[0]); 
  //base64
  let reader = new FileReader();
  let file = event.target.files[0];
  reader.onload = () => {
         localStorage.setItem("imageUser", reader.result);
   }
  reader.readAsDataURL(file);
 }

//captura el id
 buton_aceptar.addEventListener("click",capturaInfo)
 function capturaInfo(){
  let nameUser = document.getElementById("input-user").value
  localStorage.setItem("user", nameUser);
}

//boton de sonido
btnPlayPauseTwo.addEventListener("click", playPause)
function playPause(){
   if (!sound) {
     audio.play();
    sound = true;
    }
   else {
    audio.pause();
    sound = false;
   }
}


