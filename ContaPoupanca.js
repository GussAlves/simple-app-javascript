import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor (saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }

    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this.saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valorSacado;
        }
        return 0;
    }
}