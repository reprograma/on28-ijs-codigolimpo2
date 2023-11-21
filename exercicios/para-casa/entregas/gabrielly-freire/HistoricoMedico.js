class HistoricoMedico {
    constructor() {
        this.consultas = [];
        this.vacinas = [];
        this.procedimentos = [];
    }

    aplicarVacina(vacina) {
        this.vacinas.push(vacina);
        console.log(`A vacina ${vacina} foi adicionada ao histórico médico`);
    }

    realizarConsulta(data) {
        this.consultas.unshift(data);
        console.log(`A consulta da data ${data} foi adicionada ao histórico médico`);
    }

    realizarProcedimento(tipo, motivo) {
        this.procedimentos.push({ tipo, motivo });
        console.log(`O procedimento ${tipo} foi adicionada ao histórico médico`);
    }
}

module.exports = {HistoricoMedico};