console.log("Bem vindo à Calculadora de Partidas Rankeadas");

function saldoVitorias(vitorias, derrotas) {
  let saldo = vitorias - derrotas
  return saldo;
}

function getRanked(balance) {
  switch (true) {
    case balance <= 10:
      return "Ferro";
    case balance >= 11 && balance <= 20:
      return "Bronze";
    case balance >= 21 && balance <= 50:
      return "Prata";
    case balance >= 51 && balance <= 80:
      return "Ouro";
    case balance >= 81 && balance <= 90:
      return "Diamante";
    case balance >= 91 && balance <= 100:
      return "Lendário";
    case balance >= 101:
      return "Imortal";
  }
}

let balance = saldoVitorias(200, 15);
let ranked = getRanked(balance);

console.log(`O Herói tem saldo de ${balance} vitórias e está no nível ${ranked}`);