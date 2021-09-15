var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var elementoResuldado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if (chute == numeroSecreto) {
        elementoResuldado.innerHTML = "Você acertou";
    } else if (chute > 10 || chute < 0) {
        elementoResuldado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else {
        elementoResuldado.innerHTML = "Errou, o número secreto era " + numeroSecreto;
    }
}