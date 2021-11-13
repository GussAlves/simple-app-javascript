class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

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
}

const cliente1 = new Cliente();
cliente1.nome = "Gustavo";
cliente1.cpf = 11122233390;

const cliente2 = new Cliente();
cliente2.nome = "Nathalie";
cliente2.cpf = 88822233390;

const contaCorrenteGustavo = new ContaCorrente();
contaCorrenteGustavo.agencia = 1001;
contaCorrenteGustavo.depositar(300);
contaCorrenteGustavo.depositar(200);

const valorSacado = contaCorrenteGustavo.sacar(50)

console.log(valorSacado);
console.log(contaCorrenteGustavo);