//CRIANDO VARIÁVEIS
let fome = false
let dinheiro = false
let restaurante = false

//PEDINDO IFNROMAÇÕES AO USÚARIO 
let opcaoFome = prompt("Você está com fome? (s/n?)")
if (opcaoFome == "s") {
    fome = true
}
let opcaoDinheiro = prompt("Você tem dinheiro? (s/n)")
if (opcaoDinheiro == "s") {
    dinheiro = true
} 
let opcaoRestaurante = prompt("O restaurante está aberto?(s/n)")
if (opcaoRestaurante = "s") {
    restauranteAberto = true
}

//EXIBINDO MENSAGEM NO CONSOLE 
 if (!fome || !dinheiro) {
    console.log("Hoje a janta será em casa")
 } else if (fome && !restaurante) {
    console.log("Peça um delivery!")
 } else {
    console.log ("Hoje o jantar será no seu restaurante preferido!")
 }