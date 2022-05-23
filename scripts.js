//MÉTODO MAP

//É QUANDO UM CONJUNTO PASSA POR UMA OPERAÇÃO OU FUNÇÃO GERANDO OUTRO CONJUNTO(ARRAY)
//CARACTERÍSTICAS: NÃO MODIFICA O ARRAY ORIGINAL, CRIA UM NOVO ARRAY  E REALIZA AS OPERAÇÕES EM ORDEM DO INDEX.

//EXEMPLO:

// const array =[1, 2, 3, 4, 5];

// array.map((item) => item * 3);

// console.log(array.map((item) => item * 3))


//EXERCÍCIO MAP: 

//PRATIQUE A SINTAXE DE MULTIPLICAÇÃO DE NÚMEROS, UMA VEZ UTILIZANDO O PARÂMETRO THIS DE UM OBJETO CRIADO POR VOCÊ, E DEPOIS SEM ELE.


// const orange = {
// 	price: 2,
// };

// const apple = {
// 	price: 1.5,
// };

// function mapArray() {
// 	const array = [1, 2, 3, 4, 5];

// 	return array.map(function (item) {
// 		return item * this.price;
// 	}, apple);
// }

// console.log(mapArray());





// const array = [1, 2, 3, 4, 5];

// console.log(array.map((item) => item * 2));

// console.log(array);



//====================================================================================================



//MÉTODO FILTER

//ASSIM COMO O MÉTODO MAP, ELE CRIA UM NOVO ARRAY E NÃO MODIFICA O ORIGINAL.

//EXEMPLO:

// const nomes = ["francisco josé", "francisco silva", "emanuel ferreira", "carlos francisco", "pedro barros"]

// nomes.filter((nomes)=> nomes.includes("francisco"));

// console.log(nomes.filter((nomes)=> nomes.includes("francisco")))



//EXERCÍCIO FILTER:

//FILTRE E RETORNE TODOS OS NÚMEROS PARES DE UM ARRAY:




// function filtraPares(arr) {
// 	if (!arr || !arr.length) return;

// 	const filteredArr = arr.filter((item) => item % 2 === 0);

// 	return filteredArr;
// }

// console.log(filtraPares([1, 2, 3, 4]));



//====================================================================================================


//MÉTODO REDUCE

//EXECUTA UMA FUNÇÃO EM TODOS OS ELEMENTOS DO ARRAY, RETORNANDO UM VALOR ÚNICO

// array.reduce(callbackFn, initialValue)

// const callbackFn = function(accumulator, currentValue, index, array) {}


//EXERCÍCIOS REDUCE


//1 SOME TODOS OS NÚMEROS DE UM ARRAY


// function somaNumeros(arr) {
// 	if (!arr || !arr.length) return;
// 	const soma = arr.reduce((prev, curr) => prev + curr);

// 	return soma;
// }

// console.log(somaNumeros([1, 1, 1, 3]));



//2 CRIE UMA FUNÇÃO QUE RECEBE UMA LISTA DE PREÇOS E UM NÚMERO REPRESENTANDO O SALDO DISPONÍVEL. CALCULE QUAL SERÁ O SALDO FINAL APÓS SUBTRAIR TODOS OS PREÇOS DA LISTA ENVIADA. 


// function calculaSaldo(saldo, itens) {
// 	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

// 	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

// 	return `O saldo final será de ${saldoFinal} reais`;
// }

// lista = [
// 	{
// 		preco: 2,
// 		nome: 'maçã',
// 	},
// 	{
// 		preco: 30,
// 		nome: 'roupa',
// 	},
// 	{
// 		preco: 25,
// 		nome: 'carne',
// 	},
// ];

// saldo = 100;

// console.log(calculaSaldo(saldo, lista));

