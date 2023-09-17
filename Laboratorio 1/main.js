var recipeText = 'Para fazer :insertx:, você precisará dos seguintes ingredientes: :inserty:. Siga estas etapas:\n\n1. :etapa:\n2. :etapa:\n3. :etapa:\n\nAproveite seu delicioso :pronto:!';
var insertX = ['Espaguete Carbonara', 'Biscoitos de Chocolate', 'Frango Alfredo'];
var insertY = ['ovos, bacon, queijo parmesão', 'farinha, açúcar, gotas de chocolate', 'frango, macarrão fettuccine, molho Alfredo'];
var insertZ = ['Cozinhe o macarrão até ficar al dente.', 'Pré-aqueça o forno a 350°F e leve ao forno por 12 minutos.', 'Misture o frango com o molho e cozinhe por 10 minutos.'];

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

randomize.addEventListener('click', result);

function result() {
  var newRecipe = recipeText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newRecipe = newRecipe.replace(':insertx:', xItem);
  newRecipe = newRecipe.replace(':inserty:', yItem);
  newRecipe = newRecipe.replace(':insertz:', zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newRecipe = newRecipe.replace(/:insertx:/g, name);
  }

  if (document.getElementById('uk').checked) {
    const weight = Math.round((300 * 453.6) / 1000) + ' gramas';
    const temperature = Math.round(((94 - 32)) / 1.8) + ' graus';
    newRecipe = newRecipe.replace('Para fazer', `Para fazer ${xItem}`);
    newRecipe = newRecipe.replace('aproveite o seu delicioso', `aproveite o seu delicioso ${xItem}`);
    newRecipe = newRecipe.replace('94 fahrenheit', temperature);
    newRecipe = newRecipe.replace('300 pounds', weight);
  }

  story.textContent = newRecipe;
  story.style.visibility = 'visible';
}
