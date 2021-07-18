"use strict";
var Data = /** @class */ (function () {
    //public dia:number;
    //public mes:number;
    //ano:number;
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        //this.dia = dia;
        //this.mes = mes;
        //this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 1999);
console.log(data.dia + "/" + data.mes + "/" + data.ano);
var data2 = new Data(1, 1); //se declarar no constructor o typescript entenderá como valor default
