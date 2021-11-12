class Cliente {
    nome; 
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Gustavo";
cliente1.cpf = 11122233390;
cliente1.rg = 123456789;
cliente1.saldo = 152.52;
cliente1.agencia = 01;

cliente2.nome = "Nathalie";
cliente2.cpf = 88822233390;
cliente2.rg = 1234569788;
cliente2.saldo = 152.52;

console.log(cliente1);
console.log(cliente2);
