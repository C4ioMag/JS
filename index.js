
//VARIAVEIS
// let firstname = 'Caio';
// let lastname = 'magalhaes'
// console.log(firstname);
// console.log(lastname)

// let colorEyes = 'blue';
// let colorHair = 'blond';
// console.log(colorEyes);
// console.log(colorHair);

// const price = '30';
// console.log(price)

// let pen = {
//     itemName: 'pen',
//     itemPrice: 3,
//     intemAvailable : true,
//     itemColor: 'red',
// }
// console.log(pen)

// let friends = ['Caiky', 'Elton','Rafa']

// console.log(friends)

// function saleStatus(status, total) {
//     console.log('Transaction ' + status + ' total amount $' + total)
// }
// saleStatus('approved' , 20)


// function percentage10(price) {
//    return price - (price * 10 / 100)
// }

// console.log(percentage10(40))

// let temIdadeMinima = true
// let temTituloEleitor = false

// let podeVotar = temIdadeMinima && temTituloEleitor;

// console.log(podeVotar)

// let corClient = 'white'
// let corEstoque = 'black'
// let corVendida = corClient || corEstoque

// console.log(corVendida)

// let driverSpeed = 110

// if(driverSpeed > 130) {
//     console.log('Driving too fast')
// }

// else if(driverSpeed > 80 && driverSpeed < 130) {
//     console.log('driving good')
// }

// else
//     console.log('driving too slow')


let producValue = Number(prompt('Enter produc value'))

if(producValue >= 20) {
    document.getElementById('result').innerHTML = 'You can put your book'
}
else {
    document.getElementById('result').innerHTML = 'You cant put your book'
}
  