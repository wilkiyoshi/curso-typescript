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



class Carro{
    private velocidadeAtual:number=0;

    constructor(
    public marca:string,
    public modelo:string,
    private velocidadeMaxima:number=220,
    
    ){}

    private alterarVelocidade(delta: number){
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima){
            this.velocidadeAtual = novaVelocidade;
        }else{
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
        
    }

    acelerar(){
        this.alterarVelocidade (5);
        }

    frear(){
        this.alterarVelocidade(-5);
    }

    }



const carro = new Carro ("GM","Prisma", 120);

carro.acelerar();

//herança

class Camaro extends Carro{
    private turbo = false;
    constructor(){
        super("GM","Camaro",250);
    }
    ligarTurbo(){
        this.turbo=true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();


