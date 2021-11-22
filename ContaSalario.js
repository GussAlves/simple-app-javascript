import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {

    constructor(Conta) {
        super(0, Conta, 100);
    }

    sacar(valor) {
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}