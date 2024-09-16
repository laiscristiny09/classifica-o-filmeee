let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background ("black");
  let idade = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 15));
  textAlign(CENTER, CENTER);
  textSize(50);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 12) {
    if (idade >= 12) {
      return "Para Todos Os Meninos Que Já Amei";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "O Rei Leão";          
        } else{
         return "Os Vingadores";
        }
      } else {
        if (gostaDeFantasia) {
          return "Zootopia";
        } else {
          return "A Fantástica Fábrica De Chocolate";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Os Incríveis";
    } else {
      return "Jurassic Park";
    }
  }
}
