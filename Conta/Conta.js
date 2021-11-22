import { Cliente } from "../Cliente.js";

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar essa conta");
        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    // Quando usarmos o set é necessário utilizar o instanceof para validar se a instancia é válida 
    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this._cliente = cliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        throw new Error("O método sacar é abstrado, não devemos utilizar");
    }

    _sacar(valor, taxa) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    // Transfere de uma conta para outra
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}