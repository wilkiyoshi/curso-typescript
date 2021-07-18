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
