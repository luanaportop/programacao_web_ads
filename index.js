let pagina = document;
let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submeter);

let nome = document.getElementById("nome").value;

console.log(nome);


function submeter() {
    let nome = document.getElementById("nome").value;
    console.log(nome);

    let idade = document.getElementById("idade").value;
    console.log(idade);

    let cpf = document.getElementById("cpf").value;
    console.log(cpf);

    if(nome == "") { // Não considerar nomes com somente espaços! dica: remover espaços em branco
        alert("Nome não deve ser vazio!");
    }
}

function validaCPF(cpf) {
    if(cpf == "") {
        return false;
    }
    
    //if() {
        // verificar se cpf contém letras
    //}

    // verificar se cpf contém qualquer coisa que não seja ".", "-" ou números (0-9)
    // verificar se tamanho do cpf é 11 ou 14
    // validar cpf conforme regra oficial (https://blog.dbins.com.br/como-funciona-a-logica-da-validacao-do-cpf)

    // retorna true se o cpf for válido, caso contrário retorna false
    return true;
}