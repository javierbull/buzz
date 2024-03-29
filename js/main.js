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
$("#menu-sidebar button").click(function(){
  $(".active").removeClass("active-item-sidebar");
});

$('#menu-sidebar .item-collapse').on('click', function() {
  $('#menu-sidebar .item-collapse.active-item-collapse').removeClass('active-item-collapse');
  $(this).addClass('active-item-collapse');
});
// // Admin Dashboard  active item sidebar

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
// $(document).ready(function () {
//   $('#tableEjemplo').DataTable();
//   $('#tableUsuarios').DataTable();
// });

$('.dtable').DataTable({
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

$('.dtable-scroll-x').DataTable({
  "scrollX": true,
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
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showAdmninistracionUsuarios").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").show();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showCrearUsuarios").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").show();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showReporteStockDisponible").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").show();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$("#showDetalleStock").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").show();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showOperacionesPedidos").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").show();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$("#showDetallePedido").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").show();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showOperacionesEnviosPendientes").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").show();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showOperacionesEnviosRealizados").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").show();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showReportePc").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").show();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showPruebas").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").show();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showDetalleStock").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").show();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showSupportReenvios").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").show();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showSupportClientes").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").show();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showOperacionesProgInHouse").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").show();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showNuevaProgInhouse").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").show();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showOperacionesProgPlataforma").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").show();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showNuevaProgPlataforma").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").show();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showOperacionesProgInHousePromotoria").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").show();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showOperacionesProgInHouseAdmin").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").show();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showOperacionesSolicitudComprobante").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").show();
  $("#nuevaSolicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showNuevaSolicitudComprobante").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#nuevaSolicitudComprobante-panel").show();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showAdmninistracionEmpresas").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#empresas-panel").show();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showCrearEmpresa").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").show();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showAdmninistracionEmpresasAdmin").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").show();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").hide();
});

$(".showEmpresaAdmin").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").show();
  $("#editarEmpresa-panel").hide();
});

$(".showEditarEmpresa").click(function() {
  $("#dashboard-panel").hide();
  $("#usuarios-panel").hide();
  $("#crearUsuarios-panel").hide();
  $("#reportesStock-panel").hide();
  $("#detalleStock-panel").hide();
  $("#pedidos-panel").hide();
  $("#detallePedido-panel").hide();
  $("#enviosPendientes-panel").hide();
  $("#enviosRealizados-panel").hide();
  $("#reportePc-panel").hide();
  $("#pruebas-panel").hide();
  $("#reenviosClientes-panel").hide();
  $("#datosClientes-panel").hide();
  $("#progInhouse-panel").hide();
  $("#crearProgInhouse-panel").hide();
  $("#progPlataforma-panel").hide();
  $("#crearProgPlataforma-panel").hide();
  $("#progInhousePromotoria-panel").hide();
  $("#progInhouseAdmin-panel").hide();
  $("#solicitudComprobante-panel").hide();
  $("#empresas-panel").hide();
  $("#crearEmpresa-panel").hide();
  $("#empresas-panel-admin").hide();
  $("#detalleEmpresa-panel-admin").hide();
  $("#editarEmpresa-panel").show();
});
// END SHOW HIDE PANELS


// SHOW FORMS CREAR Usuario
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
// END SHOW FORMS CREAR USUARIO

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

// ACTIVAR SELECT 2
$('.select2').select2({
  theme: "bootstrap-5",
  width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
  placeholder: $(this).data('placeholder')
});

$('.select2modal').each(function() {
  $(this).select2({
    theme: "bootstrap-5",
    width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
    placeholder: $(this).data('placeholder'),
    dropdownParent: $(this).parent()
  });
});

$( '#select2-multiple' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
    closeOnSelect: false,
    allowClear: true,
} );

// END ACTIVAR SELECT2

// TOOLTIP
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// END TOOLTIP

// TABLE SELECT CHECKBOX
$(".checkAllDtable").on("click", function() {
   $(this)
     .closest("table")
     .find("tbody :checkbox")
     .prop("checked", this.checked)
     .closest("tr")
     .toggleClass("selected", this.checked);
 });

 $("tbody :checkbox").on("click", function() {
   // toggle selected class to the checkbox in a row
   $(this)
     .closest("tr")
     .toggleClass("selected", this.checked);

   // add selected class on check all
   $(this).closest("table")
     .find(".checkAllDtable")
     .prop("checked",
       $(this)
         .closest("table")
         .find("tbody :checkbox:checked").length ==
         $(this)
           .closest("table")
           .find("tbody :checkbox").length
     );
 });
// END TABLE SELECT CHECKBOX


// SHOW MOTIVO RECHAZO PRMOTORIA
$("#checkboxPromotoriaRechazarProg").click(function () {
    if ($(this).is(":checked")) {
        $("#motivoCancelacionPromotoria").show();
    } else {
        $("#motivoCancelacionPromotoria").hide();
    }
});
// END SHOW MOTIVO RECHAZO PRMOTORIA

// SHOW HIDE SELECT CANAL VENTA MODAL
$('#selectCanalVentaModal').on('change', function(){
  var demovalue = $(this).val();
    $(".buscarPromotor").show();
    $("#buscarPromotor"+demovalue).hide();
});
// END SHOW HIDE SELECT CANAL VENTA MODAL

// Rich text editor
tinymce.init({
  selector: "richtextarea",
  menubar: false,
  plugins: "lists advlist autolink autoresize charmap code emoticons hr image insertdatetime link media paste preview searchreplace table textpattern toc visualblocks visualchars wordcount quickbars",
  toolbar: "preview | undo redo | fontsizeselect | bold italic underline strikethrough forecolor backcolor | numlist bullist | alignleft aligncenter alignright alignjustify | outdent indent | paste | link image charmap emoticons hr | table tabledelete",
  insertdatetime_element: true,
   media_scripts: [
   {filter: 'platform.twitter.com'},
   {filter: 's.imgur.com'},
   {filter: 'instagram.com'},
   {filter: 'https://platform.twitter.com/widgets.js'},
 ],
   browser_spellcheck: true,
   contextmenu: false,
});

// End Rich text editor

// FILE UPLOAD IMG

// código de prueba

$('#input-preview-img-prueba').change(function(){
    var curElement = $('#preview-logo-empresa-prueba');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
});

// image preview modal descarga de Vales
$('#descarga-vales-input-preview-img-modal').change(function(){
    var curElement = $('#descarga-vales-preview-logo-empresa-modal');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
});

// image preview solicitud descarga de Vales
$('#descarga-vales-input-preview-img').change(function(){
    var curElement = $('#descarga-vales-preview-logo-empresa');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
});

// image preview logo empresas
$('#nueva-empresa-input-preview-img').change(function(){
    var curElement = $('#nueva-empresa-preview-logo-empresa');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
});

$('#editar-empresa-input-preview-img').change(function(){
    var curElement = $('#editar-empresa-preview-logo-empresa');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
});

$('#editar-empresa-admin-input-preview-img').change(function(){
    var curElement = $('#editar-empresa-admin-preview-logo-empresa');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
});

// END FILE UPLOAD IMG


});
