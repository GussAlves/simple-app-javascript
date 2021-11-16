import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;

    _cliente;
    
    // Quando usarmos o set é necessário utilizar o instanceof para validar se a instancia é válida 
    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this._cliente = cliente;
        }
    } 

    get cliente() {
        return this._cliente;
    }

    _saldo = 0;

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
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