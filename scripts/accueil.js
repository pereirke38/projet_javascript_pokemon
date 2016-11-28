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
    a.href = "javascript:insererDescripton(description"+pokemon[i]["nom"]+")";
    section.appendChild(a);

    var article = document.createElement("article");
    article.id = pokemon[i]["nom"];
    a.appendChild(article);

    var nomd = document.createElement("p");
    nomd.className = "nom";
    nomd.innerHTML = pokemon[i]["nom"];
    article.appendChild(nomd);

    var imgd = document.createElement("img");
    imgd.className = "image";
    imgd.src = pokemon[i]["image"]["src"];
    article.appendChild(imgd);

    var numd = document.createElement("p");
    numd.className ="num";
    numd.innerHTML = pokemon[i]['numero'];
    article.appendChild(numd);

    // Insertion des différents types d'un pokémon dans un élément span
    for(j = 0; j < pokemon[i]["types"].length; j++) {
      var typed = document.createElement("span");
      typed.id = pokemon[i]["types"][j]["type"];
      typed.className = "type";
      typed.innerHTML = pokemon[i]["types"][j]["type"];
      article.appendChild(typed);
    }

    var descriptiond = document.createElement("p");
    descriptiond.className = "description";
    descriptiond.innerHTML = pokemon[i]["description"];
    article.appendChild(descriptiond);


  }
  for(i = 0; i < contenu.length; i++) {
    var section = document.createElement("section");
    section.className = "pokemon";
    section.id = "description"+contenu[i]["nom"];
    document.body.appendChild(section);

    var h1 = document.createElement("h1");
    h1.innerHTML = contenu[i]["nom"];
    section.appendChild(h1);

    // Insertion de la section imaage
    var article = document.createElement("article");
    article.className = "descriptionImage";
    section.appendChild(article);

    // Insertion de l'image du pokémon
    var img = document.createElement("img");
    img.src = contenu[i]["image"]["src"];
    article.appendChild(img);

    // Insertion de l'élément section description
    var article = document.createElement("article");
    article.className = "descriptions";
    section.appendChild(article);

    var titre2 = document.createElement("h2");
    titre2.innerHTML = "Description de "+contenu[i]["nom"];
    article.appendChild(titre2);

    // Insertion des différentes descriptions du pokémon
    for(j=0; j < contenu[i]["descriptions"].length; j++){
      var description = document.createElement("p");
      description.innerHTML = contenu[i]["descriptions"][j]["description"];
      article.appendChild(description);
    }

    // Insertion de l'élément section Informations
    var article = document.createElement("article");
    article.className = "descriptionTypes";
    section.appendChild(article);

    var titre2 = document.createElement("h2");
    titre2.innerHTML = "Type";
    article.appendChild(titre2);

    var ul = document.createElement("ul");
    article.appendChild(ul);

    // Insertion des types du pokémon
    for(j = 0; j < contenu[i]["types"].length; j++) {
      var li = document.createElement("li");
      ul.appendChild(li);

      var span = document.createElement("span");
      span.id = contenu[i]["types"][j]["type"];
      span.innerHTML = contenu[i]["types"][j]["type"];
      li.appendChild(span);
    }

    var article = document.createElement("article");
    article.className = "faiblesses";
    section.appendChild(article);

    var titre2 = document.createElement("h2");
    titre2.innerHTML = "Faiblesses";
    article.appendChild(titre2);

    var ul = document.createElement("ul");
    article.appendChild(ul);

    // Insertions des types ainsi que la valeur de l'efficacité sur le pokémon
    for(j=0; j < contenu[i]["faiblesses"].length; j++){
      var li = document.createElement("li");
      ul.appendChild(li);

      var span = document.createElement("span");
      span.id = contenu[i]["faiblesses"][j]["type"];
      span.innerHTML = contenu[i]["faiblesses"][j]["type"];
      li.appendChild(span);

      var span = document.createElement("span");
      span.id = "valeur";
      span.innerHTML = contenu[i]["faiblesses"][j]["valeur"];
      li.appendChild(span);
    }

    // Insertion de l'élément section evolution
    var article = document.createElement("article");
    article.className = "evolution";
    section.appendChild(article);

    var titre2 = document.createElement("h2");
    titre2.innerHTML = "Evolution";
    article.appendChild(titre2);

    var ul = document.createElement("ul");
    article.appendChild(ul);

    // Insertions des différentes images du pokémon en fonction du jeu
    for(j=0; j < contenu[i]["sprites"].length; j++){
      var li = document.createElement("li");
      ul.appendChild(li);

      var p = document.createElement("p");
      p.innerHTML = contenu[i]["sprites"][j]["titre"];
      li.appendChild(p);

      var img = document.createElement("img");
      img.src = contenu[i]["sprites"][j]["normal"];
      li.appendChild(img);

      var img = document.createElement("img");
      img.src = contenu[i]["sprites"][j]["shiny"];
      li.appendChild(img);
    }
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
    a.href = "javascript:insererDescripton(description"+ menu["elem2"]["contenu"][i]["nom"]+")";
    a.textContent = menu["elem2"]["contenu"][i]["nom"];
    li.appendChild(a);
  }

}

function insererDescripton(nom) {
  nom.style.display = "block";
}
