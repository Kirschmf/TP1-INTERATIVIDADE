let nomeColegio = "Infnet";
let anoFundacao = 1994;

let colegio = {
  nome: nomeColegio,
  ano: anoFundacao,
  nomeDiretor: "Gisele",
  numeroAlunos: 1400,
  telefone: "(99) 9999-9999",

  obterDiretor: function () {
    alert("Nome do diretor do colégio é:" + " " + this.nomeDiretor);
  },
};

colegio.obterDiretor();
