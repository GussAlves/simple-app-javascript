import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Gustavo", 11122233390);
const cliente2 = new Cliente("Nathalie", 88822233390);

/* const contaCorrenteGustavo = new ContaCorrente(1001, cliente1);
contaCorrenteGustavo.depositar(200);
 */

const contaCorrente = new ContaCorrente(500, cliente2, 1002);
const contaPoupanca = new ContaPoupanca(500, cliente1, 1001); 

contaCorrente.sacar(100);
contaPoupanca.sacar(100);

console.log(contaCorrente);
console.log(contaPoupanca);