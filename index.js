import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Gustavo", 11122233390);
const cliente2 = new Cliente("Nathalie", 88822233390);

/* const contaCorrenteGustavo = new ContaCorrente(1001, cliente1);
contaCorrenteGustavo.depositar(200);
 */
const contaCorrente = new Conta(0, 1002, cliente2);
contaCorrente.depositar(200);

const contaPoupanca = new Conta(50, cliente1, 1001); 

console.log(contaPoupanca);
console.log(contaCorrente);