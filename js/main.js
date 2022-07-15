"use strict";

$(document).ready(function(){

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
// END SHOW-HIDE PASSWORD

// Admin Dashboard  active item sidebar
$(".sidebar-admin button").click(function(){
  $(".active").removeClass("active-item-sidebar");
});
// Admin Dashboard  active item sidebar

// Admin panel
$("#toggle-btn-sidebar").click(function(){
     $("#admin-panel").toggleClass("ml-panel ml-panel-0");
 });
// End admin panel

// admin btn sidebar togle menu
const btnToggle = document.querySelector('#toggle-btn-sidebar');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar-admin').classList.toggle('active');
  console.log(document.getElementById('sidebar-admin'))
});

// End admin btn sidebar togle menu


// Datatables
$(document).ready(function () {
  $('#tableEjemplo').DataTable();
  $('#tableUsuarios').DataTable();
});

$('.table').DataTable({
  // "scrollX": true,
  //para cambiar el lenguaje a español
  "language": {
    "lengthMenu": "Mostrar _MENU_ filas",
    "zeroRecords": "No se encontraron resultados",
    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sSearch": "Buscar:",
    "oPaginate": {
      "sFirst": "Primero",
      "sLast": "Último",
      "sNext": "Siguiente",
      "sPrevious": "Anterior"
    },
    "sProcessing": "Procesando...",
  }

});

// End datatables

// SHOW HIDE panels
$(".showDashboard").click(function() {
  $("#dashboard-panel").show();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
});

$(".showAdmninistracionUsuarios").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").show();
  $("#crearUsuarios-panel").hide();
});

$(".showCrearUsuarios").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").show();
});
// END SHOW HIDE PANELS

// SHOW FORMS CERAR Usuario
$('#radioTypeUserInhouse').click(function(){
  $("#fieldset-userInhouse").show();
  $("#fieldset-userAdmin").hide();
  $("#fieldset-formNewUserCloud").hide();
  $("#fieldset-formNewUserValidador").hide();
  $(".selectFalse").prop("checked", false);
});

$('#radioTypeUserAdmin').click(function(){
  $("#fieldset-userInhouse").hide();
  $("#fieldset-userAdmin").show();
});

$("#checkUserCloud").click(function () {
    if ($(this).is(":checked")) {
        $("#fieldset-formNewUserCloud").show();
    } else {
        $("#fieldset-formNewUserCloud").hide();
    }
});

$("#checkUserValidador").click(function () {
    if ($(this).is(":checked")) {
        $("#fieldset-formNewUserValidador").show();
    } else {
        $("#fieldset-formNewUserValidador").hide();
    }
});
// END SHOW FORMS CERAR USUARIO

// SELECT ALL CHECKBOXES
$("#selectAllModulosAdministracion").click(function() {
  $(".selectAllCheckboxesAdministracion").prop("checked", $(this).prop("checked"));
});

$(".selectAllCheckboxesAdministracion").click(function() {
  if (!$(this).prop("checked")) {
    $("#selectAllModulosAdministracion").prop("checked", false);
  }
});

$("#selectAllModulosOperaciones").click(function() {
  $(".selectAllCheckboxesOperaciones").prop("checked", $(this).prop("checked"));
});

$(".selectAllCheckboxesOperaciones").click(function() {
  if (!$(this).prop("checked")) {
    $("#selectAllModulosOperaciones").prop("checked", false);
  }
});

$("#selectAllModulosReportes").click(function() {
  $(".selectAllCheckboxesReportes").prop("checked", $(this).prop("checked"));
});

$(".selectAllCheckboxesReportes").click(function() {
  if (!$(this).prop("checked")) {
    $("#selectAllModulosReportes").prop("checked", false);
  }
});

$("#selectAllModulosInhouse").click(function() {
  $(".selectAllCheckboxesInhouse").prop("checked", $(this).prop("checked"));
});

$(".selectAllCheckboxesInhouse").click(function() {
  if (!$(this).prop("checked")) {
    $("#selectAllModulosInhouse").prop("checked", false);
  }
});
// END SELECT ALL CHECKBOXES

// CHECKBOX ACCORDION

});
