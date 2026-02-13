const jogador = document.querySelector("#jogador");
const escolhaTexto = document.querySelector(".escolha");
const placarJogador = document.querySelector(".placarJogador");
const placarMaquina = document.querySelector(".placarMaquina");
const jogadaJogador = document.querySelector(".jogadaJogador");
const jogadaMaquina = document.querySelector(".jogadaMaquina");
const resultado = document.querySelector(".resultado");
const vencedor = document.querySelector(".vencedor");
const btnJogar = document.querySelector("#jogar");
const btnReiniciar = document.querySelector("#reiniciar")
let escolhaJogador = "";
let escolhaMaquina = "";
let pontuacaoJogador = 0;
let pontuacaoMaquina = 0;
btnReiniciar.disabled = true;

jogador.addEventListener("click", (e) => {
    let target = e.target;

    switch (target.id) {
        case "pedra":
            escolhaTexto.textContent = "Sua escolha: Pedra";
            escolhaJogador = "pedra";
            break;
        case "papel":
            escolhaTexto.textContent = "Sua escolha: Papel";
            escolhaJogador = "papel";
            break;
        case "tesoura":
            escolhaTexto.textContent = "Sua escolha: Tesoura";
            escolhaJogador = "tesoura";
            break;
    }
})

btnJogar.addEventListener("click", (e) => {
    if (!escolhaJogador) alert("Escolha uma opção.");
    else {
        escolhaMaquina = getComputerChoice();
        let vencedorRodada = playRound(escolhaJogador, escolhaMaquina);
        jogadaJogador.textContent = `Você escolheu: ${escolhaJogador}`
        jogadaMaquina.textContent = `A Máquina escolheu: ${escolhaMaquina}`
        if (vencedorRodada === "venceu") {
            resultado.style.color = "green";
            placarJogador.textContent = `Você: ${pontuacaoJogador}`
        } else if (vencedorRodada === "perdeu") {
            resultado.style.color = "red";
            placarMaquina.textContent = `Máquina: ${pontuacaoMaquina}`
        } else {
            resultado.style.color = "White";
        }
        escolhaJogador = "";
        escolhaTexto.textContent = "Sua escolha: ";
        resultado.textContent = vencedorRodada;
    }
    if (pontuacaoJogador === 5 || pontuacaoMaquina === 5) {
        btnReiniciar.disabled = false;
        btnJogar.disabled = true;
        jogadaJogador.textContent = "";
        jogadaMaquina.textContent = "";
        resultado.textContent = "";
        if (pontuacaoJogador > pontuacaoMaquina){
            vencedor.style.color = "green";
            vencedor.textContent = "Você venceu!";
        } else {
            vencedor.style.color = "red";
            vencedor.textContent = "Você perdeu!";
        }
    }
})

btnReiniciar.addEventListener("click", (e) => {
    pontuacaoJogador = 0;
    pontuacaoMaquina = 0;
    placarJogador.textContent = `Você: ${pontuacaoJogador}`
    placarMaquina.textContent = `Máquina: ${pontuacaoMaquina}`
    jogadaJogador.textContent = "";
    jogadaMaquina.textContent = "";
    resultado.textContent = "";
    vencedor.textContent = "";
    btnJogar.disabled = false;
    btnReiniciar.disabled = true;
})


function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1
    switch (rand) {
        case 1:
            return "pedra";
        case 2:
            return "papel";
        default:
            return "tesoura";
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "empate";
    } else if (humanChoice === "pedra"){
        if (computerChoice === "papel") {
            pontuacaoMaquina++;
            return "perdeu";
        } else {
            pontuacaoJogador++;
            return "venceu";
        }
    } else if (humanChoice === "tesoura") {
        if (computerChoice === "pedra") {
            pontuacaoMaquina++;
            return "perdeu";
        } else {
            pontuacaoJogador++;
            return "venceu";
        }
    } else {
        if (computerChoice === "tesoura") {
            pontuacaoMaquina++;
            return "perdeu";
        } else {
            pontuacaoJogador++;
            return "venceu";
        }
    } 
}