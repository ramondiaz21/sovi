$(document).ready(function() {
  $(".btn-categorias").click(function() {
    $(".btn-categorias").removeClass("active-buttons");
    $(this).addClass("active-buttons");
    /*$(".venta-wrapper").removeClass("show-div");
    $(".venta-wrapper").addClass("show-div");*/
    if ($('#btnVenta').hasClass('active-buttons')) {
      $(".venta-wrapper").removeClass("show-div");
      $("#div-venta-habitacional").addClass("show-div");
    } else if ($('#btnRenta').hasClass('active-buttons')) {
      $(".venta-wrapper").removeClass("show-div");
      $("#div-renta-habitacional").addClass("show-div");
    } else if ($('#btnTraspaso').hasClass('active-buttons')) {
      $(".venta-wrapper").removeClass("show-div");
      $("#div-traspaso-habitacional").addClass("show-div");
    }
  });

  /*$("#btnVenta").click(function() {
    $(".btn-categorias").removeClass("active-buttons");
    $(".btn-categorias").addClass("active-buttons");
    $(".venta-wrapper").removeClass("show-div");
    $(".venta-wrapper").addClass("show-div");
  });
  $("#btnRenta").click(function() {
    $(".btn-categorias").removeClass("active-buttons");
    $(".btn-categorias").addClass("active-buttons");
    $(".venta-wrapper").removeClass("show-div");
    $(".venta-wrapper").addClass("show-div");
  });*/
});