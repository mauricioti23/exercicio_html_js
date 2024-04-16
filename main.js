document.getElementById("numForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var errorMsg = document.getElementById("error-msg");
    var sucessMsg = document.getElementById("sucess-msg");

    if (isNaN(num1) || isNaN(num2)) {
        return;
    }

    if (num2 <= num1) {
        errorMsg.textContent = "O segundo número deve ser maior que o primeiro.";

        return;
    }
    else return sucessMsg.textContent = "Formulário validado com sucesso."

    // Se passar por todas as validações, o formulário pode ser enviado
    this.submit();
});

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("error-msg").textContent = "";
    document.getElementById("sucess-msg").textContent = "";

});