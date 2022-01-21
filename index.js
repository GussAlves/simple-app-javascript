import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Gustavo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Gustavo", 5000, 32165498790);
gerente.cadastrarSenha("123");

const estaLogado = SistemaAutenticacao.login(gerente, "123");

console.log(estaLogado);