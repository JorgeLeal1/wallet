$(document).ready(function () {

    let balance = localStorage.balances;

    $('#saldo').text(balance);

    $('#linkDepositar').click(function(){  alert("Depositar", "deposit.html"); });
    $('#linkEnviarDinero').click(function(){  alert("Enviar Dinero", "sendmoney.html"); });
    $('#linkUltimosMovimientos').click(function(){  alert("Ultimos Movimientos", "transactions.html"); });

    function alert(mensaje, link){
        let alert = "<div class='alert alert-success alert-dismissible fade show text-center' role='alert'>"
        + "Redirigiendo a " + mensaje
        + "</div>";
        
        $("#mensaje_menu").html(alert);   
        setTimeout(() => { window.location.href = "./../"+ link; }, 2000);
    }

})