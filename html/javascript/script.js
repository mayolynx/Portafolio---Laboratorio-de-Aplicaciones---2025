// Obtiene el modal
<html>
<body>
<script>

var modal = document.getElementById("miModal");

// Obtiene la imagen dentro del modal y el elemento para cerrarlo
var modalImg = document.getElementById("imgModal");
var cerrarBtn = document.getElementsByClassName("cerrar")[0];

// Obtiene todas las imágenes de tu portafolio
var imagenes = document.querySelectorAll(".portafolio img");

// Recorre cada imagen y agrega un "escuchador de eventos" (event listener)
// Esto es un código que se ejecuta cada vez que ocurre un evento, en este caso, un "clic"
imagenes.forEach(function(img) {
    img.onclick = function(){
        // Cuando se hace clic en una imagen:
        // 1. Muestra el modal (cambiando su estilo a 'block')
        modal.style.display = "block";
        // 2. Coloca la URL de la imagen en la que se hizo clic
        //    en la imagen grande del modal
        modalImg.src = this.src;
    }
});

// Cuando se hace clic en el botón de cerrar
if (cerrarBtn.onclick) {
    cerrarBtn.onclick =  function() {
    modal.style.display = "none"; 
    }
 }

// Cuando se hace clic en cualquier lugar fuera de la imagen grande
window.onclick = function(event) {
    // Si el clic fue en el fondo del modal (el área oscura)
    if (event.target == modal) {
        // Oculta el modal
        modal.style.display = "none";
    }

//para ocultar los elementos de clase tabcontent
    function openSection(evt, SectionName) {
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

//para que los botones no usados ya no esten activos
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i<tablinks.length; i++) {
            tablinks[i].className.replace(" active", "");
        }

        //para mostrar la pestaña actual y agregarle la clase "active"
        document.getElementById(SectionName).style.display = "block";
        evt.currentTarget.className += "active";
    }

    //para abrir la primera pestaña por defecto
    document.addEventListener("DOMContentLoaded", function () {
        //para simular un click en el primer boton
        document.getElementsByClassName('tablinks')[0].click();
    });
    </script>
    </body>
    </html>
}