interface Usuario {
    nome: string;
    email: string;
    adress?: string;
}

function getUser(): Usuario {
    return{
        nome: 'Nathan',
        email: 'nathan@dantas.com'
    }
}

function setUser(usuario: Usuario){
    // ...
}