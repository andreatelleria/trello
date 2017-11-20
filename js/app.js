window.addEventListener('load', function () {
  /*Variable para que el formulario esté oculto al cargar la página*/
  var hidden = oculto = document.getElementById('hiddenForm').style.display = 'none';
  var list = document.getElementById('list');

  /* Evento click */
  list.addEventListener('click', function () {
    /*Funcion para ocultar añadir comentario y desplegar formulario*/
    document.getElementById('list').style.display = 'none';
    var hiddenForm = document.getElementById('hiddenForm');
    hiddenForm.style.display = 'inline-block';
  });
});
