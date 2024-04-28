let numberOne = prompt('Digite seu primeiro número')
let numberTwo = prompt('Digite seu segundo número')

let result = Number(numberOne) + Number(numberTwo)

let soma = Number(numberOne) + Number(numberTwo);
let subtracao = Number(numberOne) - Number(numberTwo);
let divisao = Number(numberOne) / Number(numberTwo);
let resto = Number(numberOne) % Number(numberTwo);

alert(`A soma dos números é  ${soma}`)
alert(`A Subtração dos números é : ${subtracao}`)
alert(`A Divisão dos números é : ${divisao}`)
alert(`O resto da divisão é : ${resto}`)

if (resto === 0 ) {
  alert('O número é Par')
} else {
  alert('O número é Impar')
}

if (numberOne === numberTwo) {
  alert('Os números são iguais')
} else {
  alert('Os números são diferentes')
}