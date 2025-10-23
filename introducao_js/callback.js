const inicio = () => {
  console.log("Início");
};

const fim = () => {
  console.log("Fim");
};

const processa = (ini, final) => {
  ini();

  final();
};

processa(inicio, fim);

processa(fim, inicio);

processa(
  () => {
    console.log("Início 1");
  },
  () => {
    console.log("Fim 1");
  }
);
