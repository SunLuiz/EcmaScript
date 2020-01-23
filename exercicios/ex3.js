//Converta as funções nos seguintes trechos de código em Arrow Functions:
// 3.1
const arr = [1, 2, 3, 4, 5];
const arr31 = arr.map(function(item) {
return item + 10;
});
const arrArrow = arr.map(item => item + 10);

console.log('Sem arrow function: '+arr31);
console.log('Com arrow function: '+arrArrow);
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
return usuario.idade;
}
mostraIdade(usuario);

const mostraIdadeArrow = () =>(usuario.idade);

console.log('Com arrow function: '+mostraIdadeArrow());
console.log('Sem arrow function: '+mostraIdade(usuario));
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

const mostraUsuarioArrow = (nome,idade)=>{function mostraUsuario2 (nome,idade){ nome, idade}};
    

console.log('Com arrow function>> ');
console.log(mostraUsuarioArrow);
console.log('Sem arrow function>>');
console.log(mostraUsuario());
// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
})
}
console.log(promise());