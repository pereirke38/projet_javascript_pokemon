function insererElements() {

  // Insertion du titre
  var header = document.createElement("header");
  header.innerHTML = contenu["nom"];
  document.body.appendChild(header);

  // Insertion de la section imaage
  var section = document.createElement("section");
  section.id = "image";
  document.body.appendChild(section);

  // Insertion de l'image du pokémon
  var img = document.createElement("img");
  img.src = contenu["image"]["src"];
  section.appendChild(img);

  // Insertion de l'élément section description
  var section = document.createElement("section");
  section.id = "description";
  document.body.appendChild(section);

  var article = document.createElement("article");
  section.appendChild(article);

  var titre1 = document.createElement("h1");
  titre1.innerHTML = "Description de "+contenu["nom"];
  article.appendChild(titre1);

  // Insertion des différentes descriptions du pokémon
  for(i=0; i < contenu["descriptions"].length; i++){
    var description = document.createElement("p");
    description.innerHTML = contenu["descriptions"][i]["description"];
    article.appendChild(description);
  }

  // Insertion de l'élément section Informations
  var section = document.createElement("section");
  section.id = "informations";
  document.body.appendChild(section);

  var titre1 = document.createElement("h1");
  titre1.innerHTML = "Informations sur "+contenu["nom"];
  section .appendChild(titre1);

  var article = document.createElement("article");
  article.id = "types";
  section.appendChild(article);

  var titre2 = document.createElement("h2");
  titre2.innerHTML = "Type";
  article.appendChild(titre2);

  var ul = document.createElement("ul");
  article.appendChild(ul);

  // Insertion des types du pokémon
  for(i = 0; i < contenu["types"].length; i++) {
    var li = document.createElement("li");
    ul.appendChild(li);

    var span = document.createElement("span");
    span.id = contenu["types"][i]["type"];
    span.innerHTML = contenu["types"][i]["type"];
    li.appendChild(span);
  }

  var article = document.createElement("article");
  article.id = "faiblesses";
  section.appendChild(article);

  var titre2 = document.createElement("h2");
  titre2.innerHTML = "Faiblesses";
  article.appendChild(titre2);

  var ul = document.createElement("ul");
  article.appendChild(ul);

  // Insertions des types ainsi que la valeur de l'efficacité sur le pokémon
  for(i=0; i < contenu["faiblesses"].length; i++){
    var li = document.createElement("li");
    ul.appendChild(li);

    var span = document.createElement("span");
    span.id = contenu["faiblesses"][i]["type"];
    span.innerHTML = contenu["faiblesses"][i]["type"];
    li.appendChild(span);

    var span = document.createElement("span");
    span.id = "valeur";
    span.innerHTML = contenu["faiblesses"][i]["valeur"];
    li.appendChild(span);
  }

  // Insertion de l'élément section evolution
  var section = document.createElement("section");
  section.id = "evolution";
  document.body.appendChild(section);

  var article = document.createElement("article");
  section.appendChild(article);

  var titre1 = document.createElement("h1");
  titre1.innerHTML = "Evolution";
  article.appendChild(titre1);

  var ul = document.createElement("ul");
  article.appendChild(ul);

  // Insertions des différentes images du pokémon en fonction du jeu
  for(i=0; i < contenu["sprites"].length; i++){
    var li = document.createElement("li");
    ul.appendChild(li);

    var p = document.createElement("p");
    p.innerHTML = contenu["sprites"][i]["titre"];
    li.appendChild(p);

    var img = document.createElement("img");
    img.src = contenu["sprites"][i]["normal"];
    li.appendChild(img);

    var img = document.createElement("img");
    img.src = contenu["sprites"][i]["shiny"];
    li.appendChild(img);
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
