import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Gustavo";
cliente1.cpf = 11122233390;

const contaCorrenteGustavo = new ContaCorrente();
contaCorrenteGustavo.agencia = 1001;
contaCorrenteGustavo.cliente = cliente1;
contaCorrenteGustavo.depositar(200);

const cliente2 = new Cliente();
cliente2.nome = "Nathalie";
cliente2.cpf = 88822233390;

const contaCorrenteNathalie = new ContaCorrente();
contaCorrenteNathalie.agencia = 1002;
contaCorrenteNathalie.cliente = cliente2;
contaCorrenteNathalie.depositar(200);

contaCorrenteNathalie.transferir(100, contaCorrenteGustavo);

console.log(contaCorrenteGustavo);
console.log(contaCorrenteNathalie);