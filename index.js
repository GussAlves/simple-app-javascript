import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Gustavo", 11122233390);
const cliente2 = new Cliente("Nathalie", 88822233390);

const contaCorrenteGustavo = new ContaCorrente(1001, cliente1);
contaCorrenteGustavo.depositar(200);

const contaCorrenteNathalie = new ContaCorrente(1002, cliente2);
contaCorrenteNathalie.depositar(200);

contaCorrenteNathalie.transferir(100, contaCorrenteGustavo);

console.log(ContaCorrente.numeroContasCorrentes);