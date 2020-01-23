const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
var arrayMap = [];
var arrayMultiplo = [];
//map
var numeros = usuarios.map(function (Resultado, index) {
    return index;
})

//filter
var funcionarios = usuarios.filter((usuarios) => {
    return usuarios.empresa === 'Rocketseat' && usuarios.idade > 18;
});
var numeros2 = funcionarios.map(function (Resultado, index) {
    return index;
})
//atribuindo map
for (i of numeros) {
    arrayMap[i] = usuarios[i].idade;
}
//find
var arrayFind = usuarios.find(function(funcGoogle){
    return funcGoogle.empresa ==='Google';
});
//multiplos
for (i of numeros) {
    arrayMultiplo[i] = usuarios[i];
    arrayMultiplo[i].idade = usuarios[i].idade *2;
}
var funcionariosMultiplo = arrayMultiplo.filter((arrayMultiplo) => {
    return arrayMultiplo.idade <50;
});
var numeros3 = funcionariosMultiplo.map(function (Resultado, index) {
    return index;
})

//saidas
console.log('Exercicio 2.1 Map: ' + arrayMap)
for (i of numeros2) {
    console.log('Exercicio2.2 filter: ' + Object.values(funcionarios[i]));
};
console.log('Exercicio 2.3 find: '+arrayFind);
for (i of numeros3) {
    console.log('Exercicio2.4 multiplos: ' + Object.values(funcionariosMultiplo[i]));
};



/*
A partir do vetor e utilize os métodos de array (map, reduce, filter e find):
2.1 Utilizando o map
Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
2.2 Utilizando o filter
Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
2.3 Utilizando o find
Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
2.4 Unindo operações
Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:
// Resultado:
[
{ nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
{ nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
*/