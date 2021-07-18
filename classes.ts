class Data{
    //public dia:number;
    //public mes:number;
    //ano:number;

    constructor (public dia:number, public mes:number, public ano:number=1970){//declaração direta no construtor pode eliminar atribuiçOes das propriedades na claa
        //this.dia = dia;
        //this.mes = mes;
        //this.ano = ano;
    }    
}

const data = new Data (1,1,1999);
console.log(data.dia + "/" + data.mes +"/"+ data.ano);

const data2 = new Data (1,1);//se declarar no constructor o typescript entenderá como valor default



