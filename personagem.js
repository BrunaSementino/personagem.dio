// Definindo a classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  }

  atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
          case 'mago':
              ataque = 'usou magia';
              break;
          case 'guerreiro':
              ataque = 'usou espada';
              break;
          case 'monge':
              ataque = 'usou artes marciais';
              break;
          case 'ninja':
              ataque = 'usou shuriken';
              break;
          default:
              ataque = 'atacou de maneira desconhecida';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de criação de heróis e chamadas do método atacar
const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
const heroi2 = new Heroi('Merlin', 150, 'mago');
const heroi3 = new Heroi('Buddha', 40, 'monge');
const heroi4 = new Heroi('Hanzo', 25, 'ninja');

heroi1.atacar(); // O guerreiro atacou usando espada
heroi2.atacar(); // O mago atacou usando magia
heroi3.atacar(); // O monge atacou usando artes marciais
heroi4.atacar(); // O ninja atacou usando shuriken
