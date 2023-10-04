class Computador {
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    SSD

    constructor(tipo, processador, video, armazenamento, MemoriaRam, ssd) {
        this.Tipo = tipo;
        this.Processador = processador;
        this.Video = video;
        this.Armazenamento = armazenamento;
        this.MemoriaRam = MemoriaRam;
        this.Ssd = ssd;
    }

    ExibirInformacoes() {
        console.log("Informações do Computador: ");
        console.log(`Tipo: ${this.Tipo}`);
        console.log(`Processador: ${this.Processador}`);
        console.log(`Video: ${this.Video}`);
        console.log(`MemoriaRam: ${this.MemoriaRam}`);
        console.log(`Ssd: ${this.Ssd}`);
    }
}

// Exemplo de uso
const meuComputador = new Computador("notebook", "Ryzen7". "Dedicado", 1000, 16, true);
meuComputador.ExibirInformacoes();

