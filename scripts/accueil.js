/**
 * Insère les différents éléments dans la page
 */
function insererElements() {
  //On récupère la section dans la laquelle on va insérer les différents articles
  var section = document.getElementById("listePokemons");

  //Création et insertion des articles correspondant à tout les pokémons présents dans le JSON
  for (i = 0; i < pokemon.length; i++) {

    //Création du lien permettant de consulter la page d'un pokémon
    var a = document.createElement("a");
    a.href = pokemon[i]["lien"];
    section.appendChild(a);

    var article = document.createElement("article");
    article.id = pokemon[i]["nom"];
    a.appendChild(article);

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

    // Insertion des différents types d'un pokémon dans un élément span
    for(j = 0; j < pokemon[i]["types"].length; j++) {
      var typed = document.createElement("span");
      typed.id = pokemon[i]["types"][j]["type"];
      typed.innerHTML = pokemon[i]["types"][j]["type"];
      article.appendChild(typed);
    }

    var descriptiond = document.createElement("p");
    descriptiond.id = "description";
    descriptiond.innerHTML = pokemon[i]["description"];
    article.appendChild(descriptiond);


  }
}

/**
 * Création et insertion du menu
 */
function insererMenu() {

  // On récupère l'élément nav de la page html
  var nav = document.getElementById("menu");

  //Création du menu Accueil
  var div = document.createElement("div");
  div.className = "menuItem";
  div.id = "menuAccueil";
  nav.appendChild(div);

  // Création et insertion du lien dans le menu Accueil
  var a = document.createElement("a");
  a.textContent = menu["elem1"]["nom"];
  a.href = menu["elem1"]["lien"];
  div.appendChild(a);

  // Création du menu Pokémons
  var div = document.createElement("div");
  div.className = "menuItem";
  div.id = "pokemons";
  div.textContent = "Pokémons";
  nav.appendChild(div);

  // Créations des sous menus de Pokémons
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
