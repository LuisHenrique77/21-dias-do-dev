//CRIANDO CLASSE HOTEL 
class Hotel {
    Id
    Nome
    Categoria
    Endereço
    Telefone
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereço = endereco
        this.Telefone = telefone
    }
}

//CRIANDO CLASSE RESERVA
class Reserva {
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = id
        this.IdHotel = idHotel
        this.Responsavel = responsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

//CRIANDO ARRAYS 
let hoteis = []
let reservas = []
let idHotel = []
let idReserva = []

//FUNÇÃO PARA CADASTRAR HOTEL
function CadastrarHotel() {
    let nome = prompt("Digite o nome do hotel")
    let categoria = parseInt(prompt("Digite a categoria do hotel"))
    let endereco = prompt("Digite o endereço do hotel")
    let telefone = prompt("Digite o telefone do hotel")
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

//FUNÇÃO PARA CADASTRAR RESERVA 
function cadastrarReserva() {
    let idHotel
    let existe = false
    do {
        idHotel = parseInt(prompt("Digite o id do hotel"))
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel == hoteis[i].id) {
                i = hoteis.length
                existe = true
            } else if (i = hoteis.length - 1) {
                console.log("id de hotel não encontrado")
            }
        }
    } while (!existe)

    let nome = prompt("Digite o nome dp responsável")
    let diaEntrada = parseInt(prompt("Digite o dia da entrada"))
    let diaSaida
    do {
        diaSaida = parseInt(prompt("Digite o dia de saída"))
        if (diaSaida < diaEntrada) {
            console.log("O dia de saída deve ser maior que o dia de entrada")
        }
    } while (diaSaida < diaEntrada)

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}

//FUNÇÃO PARA PROCURAR RESERVAS PELO HOTEL
function ProcurarReservasPeloHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.idHotel) {
            let i = idHotel - 1
            console.log("hotel:", hoteis[i].Nome)
            console.log("responsável:", reserva.Responsavel)
            console.log("Dia de entrada:", reserva.DiaEntrada)
            console.log("Dia de saída:", reserva.DiaSaida)
        }
    })
}

//FUNÇÃO PARA PROCURAR HOTEL PELA RESERVA 
function ProcurarHotelPelaReserva(idReserva) {
    let idHotel = reservas[idReserva - 1].idHotel
    console.log("hotel:", hoteis[id])
    console.log("endereço:", hoteis[idHotel - 1].Endereço)
    console.log("dia de entrada:", reservas[id.reserva - 1].diaEntrada)
    console.log("dia de saída:", hoteis[idHotel - 1].diaSaida)
}

//FUNÇÃO PARA PROCURAR RESERVA PELO RESPONSÁVEL 
function ProcurarReservaPeloNome(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (nome == reservas[i].responsavel) {
            console.log("id de Reserva: " + reservas[i].Id)
            console.log("hotel:" + hoteis[(reservas[i].idHotel) - 1].nome)
        }
    }
}

//FUNÇÃO PARA PROCURAR HOTÉIS PELA CATEGORIA 
function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = []
    for (let i = 0; i < hoteis.length; i++) {
        if (categoria == hoteis[i].Categoria) {
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}

//FUNÇÃO PARA ATUALIZAR TELEFONE DO HOTEL
function AtualizarTelefone(idHotel, telefone) {
    hoteis[idHotel - 1].telefone = telefone
    console.log("Número de telefone atualizado!")
}

//FLUXO DE FUNCIONAMENTO
let continuar = true
do {
    let opcao = prompt("escolha uma opção: \n1- Cadastrar hotel \n2- Cadastrar Reserva \n3-Procurar reserva pelo hotel" + "\n4- Procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar hotéis por categoria" + "\n7 - Atualizar telefone de um hotel \n8 - encerrar o programa")

    switch (opcao) {
        case "1":
            CadastrarHotel()
            break;
        case "2":
            cadastrarReserva()
            break;
        case "3":
            ProcurarReservasPeloHotel(prompt("Digite o id do hotel"))
            break;
        case "4":
            ProcurarHotelPelaReserva(prompt("Digite o id da reserva"))
            break;
        case "5":
            ProcurarReservaPeloNome(prompt("Digite o nome do responsável pela reserva"))
            break;
        case "6":
            let hoteisProcurados = ProcurarHotelPelaCategoria(parseInt(prompt("Digite a categoria que deseja procurar")))
            console.log(hoteisProcurados)
            break;
        case "7":
            let idHotel = parseInt(prompt("Digite o id do hotel que deseja atualizar"))
            let telefone = prompt("Digite o novo telefone")
            AtualizarTelefone(idHotel, telefone)
            break;
        default:
            console.log("Opcção Inválida")
            break;
    }
} while (continuar)     