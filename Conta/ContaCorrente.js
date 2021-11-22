import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroContasCorrentes = 0;
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
        ContaCorrente.numeroContasCorrentes += 1;
    }

    sacar(valor) {
        let taxa = 1.08;
        return this._sacar(valor, taxa);
    }
   
    _sacar(valor, taxa) {
        let valorSacado = taxa * valor;
        if (this.saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }
}