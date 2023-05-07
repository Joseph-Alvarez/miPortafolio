// Obtener todos los elementos de la lista
const opciones = document.querySelectorAll('.opciones');

// Agregar un controlador de eventos click a cada elemento
opciones.forEach(opcion => {
  opcion.addEventListener('click', function() {
    // Eliminar la clase 'select-opt' de cualquier elemento seleccionado anteriormente
    opciones.forEach(o => o.classList.remove('select-opt'));
    // Agregar la clase 'select-opt' al elemento seleccionado actualmente
    this.classList.add('select-opt');
  });
});


/*opciones.forEach(opcion => {
  opcion.addEventListener('click', function() {
    // Eliminar la clase 'select-opt' de cualquier elemento seleccionado anteriormente
    opciones.forEach(o => o.classList.remove('select-opt'));
    // Agregar la clase 'select-opt' al elemento seleccionado actualmente
    this.classList.add('select-opt');

    // Llamar a la función cambiarVentana con el valor de la opción seleccionada
    cambiarVentana(parseInt(this.dataset.opcionId));
  });
});*/



window.onload = function() {
  const redes = document.querySelectorAll('.redes');

  // Agregar eventos "mouseover" y "mouseout" a cada elemento
  redes.forEach(red => {
    red.addEventListener('mouseover', () => {
      red.classList.add('resaltado');
    });
    red.addEventListener('mouseout', () => {
      red.classList.remove('resaltado');
    });
  });

}


var animacion = bodymovin.loadAnimation({
  container: document.getElementById('animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '96143-developer.json'
});

var animacion = bodymovin.loadAnimation({
  container: document.getElementById('animation3'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '109028-lenguajes.json'
});

var animacion = bodymovin.loadAnimation({
  container: document.getElementById('animation4'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '131633-game.json'
});

var animacion = bodymovin.loadAnimation({
  container: document.getElementById('animation5'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '110472-mobile.json'
});

var animacion = bodymovin.loadAnimation({
  container: document.getElementById('animation6'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '34260-program.json'
});


  const HOME = 1;
  const LENGUAJES = 2;
  const JUEGOS = 3;
  const APLICACIONES = 4;
  const PROGRAMAS = 5;
  
  const cambiarVentana = (opciones) => {
    switch (opciones) {
      case HOME:
        console.log('Visualizar home');
        document.getElementById('contenido-1').style.display = "block";
        document.getElementById('contenido-2').style.display = "none";
        document.getElementById('contenido-3').style.display = "none";
        document.getElementById('contenido-4').style.display = "none";
        document.getElementById('contenido-5').style.display = "none"; 
        break;
      case LENGUAJES:
        console.log('Visualizar lenguajes');
        document.getElementById('contenido-1').style.display = "none";
        document.getElementById('contenido-2').style.display = "block";
        document.getElementById('contenido-3').style.display = "none";
        document.getElementById('contenido-4').style.display = "none";
        document.getElementById('contenido-5').style.display = "none"; 
        break;
      case JUEGOS:
        console.log('Visualizar juegos');
        document.getElementById('contenido-1').style.display = "none";
        document.getElementById('contenido-2').style.display = "none";
        document.getElementById('contenido-3').style.display = "block";
        document.getElementById('contenido-4').style.display = "none";
        document.getElementById('contenido-5').style.display = "none"; 
        break;
      case APLICACIONES:
        console.log('Visualizar aplicaciones');
        document.getElementById('contenido-1').style.display = "none";
        document.getElementById('contenido-2').style.display = "none";
        document.getElementById('contenido-3').style.display = "none";
        document.getElementById('contenido-4').style.display = "block";
        document.getElementById('contenido-5').style.display = "none"; 
        break;
      case PROGRAMAS:
        console.log('Visualizar programas');
        document.getElementById('contenido-1').style.display = "none";
        document.getElementById('contenido-2').style.display = "none";
        document.getElementById('contenido-3').style.display = "none";
        document.getElementById('contenido-4').style.display = "none";
        document.getElementById('contenido-5').style.display = "block"; 
        break;
      default:
        break;
    }
  }

  function enableDarkMode(id) {
    const button = document.getElementById(id);
    const icon = button.querySelector('i');
    document.body.classList.add("dark-mode");
    document.body.style.backgroundImage = "url('/img/4.jpg')";
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
  
  function disableDarkMode(id) {
    const button = document.getElementById(id);
    const icon = button.querySelector('i');
    document.body.classList.remove("dark-mode");
    document.body.style.backgroundImage = "url('/img/Fondo2.jpg')";
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
  
  function toggleDarkMode(id) {
    const button = document.getElementById(id);
    if (document.body.classList.contains("dark-mode")) {
      disableDarkMode(id);
    } else {
      enableDarkMode(id);
    }
  }
  