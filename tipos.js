"use strict";
//bolean
var contaPaga = false;
//number
var idade = 23;
var avaliacao = 4.5;
//string
var nome = "Will";
//array
var idades = [10, 13, 30, 45, 60];
var nomes = ["João", "Will", "Leo", "Fulano"];
var idades2 = [1, 2, 3, 4, 5];
//tuple
var jogadores;
jogadores = ["Will", "JOão", "Ciclano"];
var jogadores2;
jogadores2 = ["Will", false, 2];
//enum
var StatusAprovado;
(function (StatusAprovado) {
    StatusAprovado["Aprovado"] = "01";
    StatusAprovado["Pendente"] = "02";
    StatusAprovado["Rejeitado"] = "03";
})(StatusAprovado || (StatusAprovado = {}));
var aprovacao = StatusAprovado.Aprovado;
//any
var retornoAPI = [1, 2, 3, "Vitor", false];
//void
function printar(mensagem) {
    console.log(mensagem);
}
//null e undefined
var u = undefined;
var n = null;
//object
function criar(objecto) {
    //
}
criar({ propriedade: 1 });
//never
function nuncaOcorre() {
    while (true)
        ;
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('algo falhou');
}
//union types
function nota(nota1) {
    console.log("A nota \u00E9 " + nota1);
}
nota('10');
nota(false);
nota(2);
var funcionario = ["Ciclano", "Fulano", "Jão"];
var funcionarios2 = [{ nome: "Nome", sobrenome: "Sobrenome", idade: 23 }];
//valores nulos ou opcionais (?)
var altura = 1.6;
altura = null;
var contato1 = {
    nome: "Will",
    telefone1: "11111111",
    telefone2: ""
};
//type assertion (tipo CAST)
var minhaIdade = 23;
minhaIdade.toString();
console.log(minhaIdade);
var input = document.getElementById("number2");
console.log(input.value);
