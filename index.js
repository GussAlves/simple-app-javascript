import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Gustavo", 11122233390);
const cliente2 = new Cliente("Nathalie", 88822233390);
const cliente3 = new Cliente("Simba", 85822233390);

/* const contaCorrenteGustavo = new ContaCorrente(1001, cliente1);
contaCorrenteGustavo.depositar(200);
 */

const contaCorrente = new ContaCorrente(500, cliente2, 1002);
const contaPoupanca = new ContaPoupanca(500, cliente1, 1001); 
const contaSalario = new ContaSalario(cliente3);

contaSalario.depositar(1000);
contaSalario.sacar(100);


console.log(contaSalario);
console.log(contaCorrente);
console.log(contaPoupanca);