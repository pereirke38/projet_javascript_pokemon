
function insererElements() {
  var section = document.getElementById("listePokemons");
  for (i = 0; i < pokemon.length; i++) {
    var article = document.createElement("article");
    article.id = pokemon[i]["nom"];
    section.appendChild(article);

    var numd = document.createElement("p");
    numd.id ="num"+pokemon[i]["nom"];
    numd.innerHTML = pokemon[i]['numero'];
    article.appendChild(numd);

    var nomd = document.createElement("p");
    nomd.id = "nom"+pokemon[i]["nom"];
    nomd.innerHTML = pokemon[i]["nom"];
    article.appendChild(nomd);

    var imgd = document.createElement("img");
    imgd.id = "image"+pokemon[i]["nom"];
    imgd.src = pokemon[i]["image"]["src"];
    article.appendChild(imgd);

    var typed = document.createElement("p");
    typed.id = "type"+pokemon[i]["nom"];
    typed.innerHTML = pokemon[i]["type"];
    article.appendChild(typed);

    var descriptiond = document.createElement("p");
    descriptiond.id = "description"+pokemon[i]["nom"];
    descriptiond.innerHTML = pokemon[i]["description"];
    article.appendChild(descriptiond);
  }
}

function insererMenu() {

  var nav = document.getElementById("menu");

  var div = document.createElement("div");
  div.class = "menuItem";
  div.id = "accueil";
  nav.appendChild(div);

  var a = document.createElement("a");
  a.textContent = menu["elem1"]["nom"];
  a.href = menu["elem1"]["lien"];
  div.appendChild(a);

}
