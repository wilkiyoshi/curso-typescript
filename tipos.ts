//bolean
const contaPaga:boolean = false;

//number
const idade:number = 23;
const avaliacao:number = 4.5;

//string
const nome:string = "Will"

//array
const idades:number[] = [10,13,30,45,60];
const nomes:string[] = ["João","Will","Leo","Fulano"]
const idades2:Array<number> = [1,2,3,4,5]

//tuple
let jogadores:[string,string,string];
jogadores = ["Will","JOão","Ciclano"];

let jogadores2:[string,boolean,number];
jogadores2 = ["Will", false,2];

//enum
enum StatusAprovado{
    Aprovado="01",
    Pendente="02",
    Rejeitado="03"
}
const aprovacao: StatusAprovado = StatusAprovado.Aprovado

//any
const retornoAPI: any[]= [1,2,3,"Vitor",false];

//void
function printar(mensagem:string):void{
    console.log(mensagem)
}

//null e undefined
const u:undefined = undefined;
const n:null = null;

//object
function criar(objecto:object){
    //
}
criar ({propriedade:1})

//never
function nuncaOcorre():never{
    while (true);
}

function erro(mensagem:string):never{
    throw new Error(mensagem)
}

function falha(){
    return erro('algo falhou')
}

//union types
function nota(nota1:number | string | boolean){
    console.log(`A nota é ${nota1}`);	    
}

nota('10');
nota(false);
nota(2);

//alias
type Funcionarios = Array<string>;

type Funcionarios2 = {
    nome:string,
    sobrenome:string,
    idade:number
}

const funcionario:Funcionarios = ["Ciclano","Fulano","Jão"];

const funcionarios2:Funcionarios2[] = [{nome:"Nome",sobrenome:"Sobrenome",idade:23}];

//valores nulos ou opcionais (?)
let altura:number|null = 1.6;
altura=null;

type contato ={
    nome:string,
    telefone1:string,
    telefone2?:string
}

const contato1:contato ={
    nome:"Will",
    telefone1:"11111111",
    telefone2:""
}
