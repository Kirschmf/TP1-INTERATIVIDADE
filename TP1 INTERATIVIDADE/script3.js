function Carro() {
  this.ano = 1968;
  this.modelo = "Fusca";
  this.acelerar = function () {
    alert("Acelerando!");
  };
}

let carro = new Carro();

carro.acelerar();
