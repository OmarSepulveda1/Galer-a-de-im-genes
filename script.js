$(document).ready(function () {
  let imagenes = $(".miniatura");
  let indexActual = 0;

  $(".miniatura").click(function () {
    indexActual = parseInt(this.id.split("-")[1]);
    mostrarImagen(indexActual);
    $("#modal").fadeIn();
  });

  $("#cerrar, #modal").click(function (e) {
    if (e.target.id === "modal" || e.target.id === "cerrar") {
      $("#modal").fadeOut();
    }
  });

  $("#siguiente").click(function () {
    indexActual = (indexActual + 1) % imagenes.length;
    mostrarImagen(indexActual);
  });

  $("#anterior").click(function () {
    indexActual = (indexActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indexActual);
  });

  function mostrarImagen(index) {
    let src = $(imagenes[index]).attr("src").replace("300x200", "800x600");
    $("#imagenGrande").fadeOut(100, function () {
      $(this).attr("src", src).fadeIn(200);
    });
  }
});
