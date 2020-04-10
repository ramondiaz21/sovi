$(document).ready(function() {
  $("#nav-home .btn-categorias").click(function() {
    $("#nav-home .btn-categorias").removeClass("active-buttons");
    $(this).addClass("active-buttons")
    if ($('#btnVenta').hasClass('active-buttons')) {
      $("#nav-home .venta-wrapper").removeClass("show-div");
      $("#div-venta-habitacional").addClass("show-div");
    } else if ($('#btnRenta').hasClass('active-buttons')) {
      $("#nav-home .venta-wrapper").removeClass("show-div");
      $("#div-renta-habitacional").addClass("show-div");
    } else if ($('#btnTraspaso').hasClass('active-buttons')) {
      $("#nav-home .venta-wrapper").removeClass("show-div");
      $("#div-traspaso-habitacional").addClass("show-div");
    }
  });

  $("#nav-profile .btn-categorias").click(function() {
    $("#nav-profile .btn-categorias").removeClass("active-buttons");
    $(this).addClass("active-buttons")
    if ($('#btnVentaTerrenos').hasClass('active-buttons')) {
      $("#nav-profile .venta-wrapper").removeClass("show-div");
      $("#div-venta-terrenos").addClass("show-div");
    } else if ($('#btnRentaTerrenos').hasClass('active-buttons')) {
      $("#nav-profile .venta-wrapper").removeClass("show-div");
      $("#div-renta-terrenos").addClass("show-div");
    }
  });

  $("#nav-contact .btn-categorias").click(function() {
    $("#nav-contact .btn-categorias").removeClass("active-buttons");
    $(this).addClass("active-buttons")
    if ($('#btnVentaLocales').hasClass('active-buttons')) {
      $("#nav-contact .venta-wrapper").removeClass("show-div");
      $("#div-venta-locales").addClass("show-div");
    } else if ($('#btnRentaLocales').hasClass('active-buttons')) {
      $("#nav-contact .venta-wrapper").removeClass("show-div");
      $("#div-renta-locales").addClass("show-div");
    }
  });
});