function Advogado(nome, horasTrabalhadas, valorHora) {
  this.nome = nome;
  this.horasTrabalhadas = horasTrabalhadas;
  this.valorHora = valorHora;

  this.calcularGanho = function () {
    return this.horasTrabalhadas * this.valorHora;
  };
}

let cadastroAdvogado = new Advogado("Matheus Kirsch", 23, 380);

let ganhoMensal = cadastroAdvogado.calcularGanho();
console.log(
  "Ganho mensal do advogado " + cadastroAdvogado.nome + ": R$" + ganhoMensal
);
