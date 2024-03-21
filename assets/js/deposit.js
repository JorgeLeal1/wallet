$(document).ready(function () {
    var balance = Number(localStorage.balances);
    //console.log(balance);

    $('#balance').text(balance);

    function updateBalance() {
        $('#balance').text(balance);
    }

    function alert(mensaje){
        let alert = "<div class='alert alert-success alert-dismissible fade show text-center' role='alert'>"
        + mensaje
        + "</div>";
        
        $("#alert-container").html(alert);   
        setTimeout(() => { window.location.href = "./../menu.html"; }, 2000);
    }    

    $('#btnAgregarDeposito').click(function () {
        let mensaje = "";
        var inputMonto = parseFloat($('#inputMonto').val());

        if (!isNaN(inputMonto) && inputMonto > 0) {
            balance += inputMonto;
            localStorage.balances = balance;
            updateBalance();
            $('#inputMonto').val('');
            mensaje = 'Deposit realizado!';
        } else {
            mensaje = 'Monto invalido. Por favor ingrese un número positivo.';
        }

        alert(mensaje);

    });

    $('#btnRetirarDeposito').click(function () {
        let mensaje = "";
        var inputMonto = parseFloat($('#inputMonto').val());

        if (!isNaN(inputMonto) && inputMonto > 0 && inputMonto <= balance) {
            balance -= inputMonto;
            localStorage.balances = balance;
            updateBalance();
            $('#inputMonto').val('');
            mensaje = 'Retiro exitoso!';
        } else {
            mensaje = 'Cantidad no válida. Ingrese un número válido dentro de su saldo.';
        }

        alert(mensaje);
    });




})