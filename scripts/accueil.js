
function insererElements() {
  var section = document.getElementById("listePokemons");
  for (i = 0; i < pokemon.length; i++) {
    var article = document.createElement("article");
    article.id = pokemon[i]["nom"];
    section.appendChild(article);

    var nomd = document.createElement("p");
    nomd.id = "nom";
    nomd.innerHTML = pokemon[i]["nom"];
    article.appendChild(nomd);

    var imgd = document.createElement("img");
    imgd.id = "image";
    imgd.src = pokemon[i]["image"]["src"];
    article.appendChild(imgd);

    var numd = document.createElement("p");
    numd.id ="num";
    numd.innerHTML = pokemon[i]['numero'];
    article.appendChild(numd);

    var typed = document.createElement("p");
    typed.id = "type";
    typed.innerHTML = pokemon[i]["type"];
    article.appendChild(typed);

    var descriptiond = document.createElement("p");
    descriptiond.id = "description";
    descriptiond.innerHTML = pokemon[i]["description"];
    article.appendChild(descriptiond);
  }
}

function insererMenu() {

  var nav = document.getElementById("menu");

  var div = document.createElement("div");
  div.className = "menuItem";
  div.id = "menuAccueil";
  nav.appendChild(div);

  var a = document.createElement("a");
  a.textContent = menu["elem1"]["nom"];
  a.href = menu["elem1"]["lien"];
  div.appendChild(a);

  var div = document.createElement("div");
  div.className = "menuItem";
  div.id = "pokemons";
  div.textContent = "Pokémons"
  nav.appendChild(div);

  var ul = document.createElement("ul");
  div.appendChild(ul);

  for(i = 0; i < menu["elem2"]["contenu"].length; i++) {
    var li = document.createElement("li");
    li.className = "menuElement";
    ul.appendChild(li);

    var a = document.createElement("a");
    a.href = menu["elem2"]["contenu"][i]["lien"];
    a.textContent = menu["elem2"]["contenu"][i]["nom"];
    li.appendChild(a);
  }

}
