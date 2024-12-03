const raio = parseFloat(prompt("Informe o raio do círculo:"));

const circulo = {
  raio: raio,

  calcularCircunferencia: function () {
    return Math.PI * this.raio * 2;
  },

  calcularArea: function () {
    return Math.PI * this.raio * this.raio;
  },
};

console.log("Circunferência:", circulo.calcularCircunferencia());

console.log("Área:", circulo.calcularArea());
