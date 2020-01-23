
var email='teste@email';
var senha='senhateste';
class Usuario {
    constructor(email, senha) {
        this.email = [];
        this.senha = [];
    }

    addEmail(email) {
        this.email.push(email);
        console.log(this.email);
    }
    addSenha(senha) {
        this.senha.push(senha);
        console.log(this.senha);
    }

}

class Admin extends Usuario {
    constructor() {
        super();
        
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
const cliente = new Admin(email,senha);

document.getElementById('btnAdicionar').onclick = function () {
    cliente.addEmail(email);
    cliente.addSenha(senha);
    console.log(cliente.senha[0]);
    console.log(User1.isAdmin()) // false
    console.log(Adm1.isAdmin()) // true
    console.log(Adm1.email[0]);

};



