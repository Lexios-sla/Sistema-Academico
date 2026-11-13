function calcularMedia (nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

function definiriSituacao(media) {
    if (media >= 7) {
        return ("Aprovado");
    }
    else if (media >= 5) {
        return ("Recuperação");
    }
    else {
    return ("Reprovado");
    }
}

function classeDaSituacao(situacao) {
    if (situacao === ("Aprovado")) {
        return ("aprovado")
    }
    else if (situacao === ("Recuperação")) {
        return ("recuperacao")
    }
    else (situacao === ("Reprovado")) {
        return ("reprovado")
    }
}

function mostrarMensagem(texto, classe) {
    let resultado = document.getElementById("resultado");
    resultado.innerText = texto;
    resultado.className = classe;
}

function processarAluno() {
    let nome = document.getElementById("nome").value.trim();
    let nota1 = document.getElementById("nota 1").value;
    let nota2 = document.getElementById("nota 2").value;
    let nota3 = document.getElementById("nota 3").value;
}