//Função sem retorno
function inicio() {
  const mensagem = "Estou iniciando...";
  console.log(mensagem);
}

//Função com retorno
function processa() {
  const mensagem = "Estou processando...";
  return mensagem;
}

inicio();

const processado = processa();
console.log(processado);

function soma2(a, b) {
  console.log(a + b);
}
//testes
const resultado = soma2(2, 3);
console.log(resultado);

function soma(a, b) {
  return a + b;
}

const resultado2 = soma(2, 3);
console.log(resultado2);
