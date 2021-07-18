interface Usuario {
    nome:string,
    email:string,
    address?:string,
}

function getUser(): Usuario{
    return{
        nome:"Vitor",
        email:"teste@teste.com"
    }
}

function setUser(usuario:Usuario){
//..
}