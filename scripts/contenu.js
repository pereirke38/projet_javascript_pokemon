function insererElements() {
  var section = document.createElement("section");
  section.id = "titre";
  document.body.appendChild(section);
  var article = document.createElement("article");
  section.appendChild(article);

  var header = document.createElement("header");
  article.appendChild(header);

  var titre1 = document.createElement("h1");
  titre1.innerHTML = contenu["nom"];
  header.appendChild(titre1);

  var div = document.createElement("div");
  div.id = "image"+contenu["nom"];
  document.body.appendChild(div);

  var img = document.createElement("img");
  img.src = contenu["image"]["src"];
  div.appendChild(img);

  var section = document.createElement("section");
  section.id = "description"+contenu["nom"];
  document.body.appendChild(section);

  var article = document.createElement("article");
  section.appendChild(article);

  var header = document.createElement("header");
  article.appendChild(header);

  var titre1 = document.createElement("h1");
  titre1.innerHTML = "Description de "+contenu["nom"];
  header.appendChild(titre1);

  for(i=0; i < contenu["descriptions"].length; i++){
    var description = document.createElement("p");
    description.innerHTML = contenu["descriptions"][i]["description"];
    article.appendChild(description);
  }

  var section = document.createElement("section");
  section.id = "Information sur "+contenu["nom"];
  document.body.appendChild(section);

  var article = document.createElement("article");
  article.id = "types";
  section.appendChild(article);

  var header = document.createElement("header");
  article.appendChild(header);

  var titre2 = document.createElement("h1");
  titre2.innerHTML = "Types";
  header.appendChild(titre2);

  var p = document.createElement("p");
  p.innerHTML = contenu["types"]["type1"];
  article.appendChild(p);

  var p = document.createElement("p");
  p.innerHTML = contenu["types"]["type2"];
  article.appendChild(p);

  var article = document.createElement("article");
  article.id = "faiblesses";
  section.appendChild(article);

  var header = document.createElement("header");
  article.appendChild(header);

  var titre2 = document.createElement("h1");
  titre2.innerHTML = "Faiblesses";
  header.appendChild(titre2);

  for(i=0; i < contenu["faiblesses"].length; i++){
    var p = document.createElement("p");
    p.innerHTML = contenu["faiblesses"][i]["type"];
    article.appendChild(p);

    var p = document.createElement("p");
    p.innerHTML = contenu["faiblesses"][i]["valeur"];
    article.appendChild(p);
  }
  var article = document.createElement("article");
  article.id = "evolution";
  section.appendChild(article);

  var header = document.createElement("header");
  article.appendChild(header);

  var titre2 = document.createElement("h1");
  titre2.innerHTML = "Evolution";
  header.appendChild(titre2);

  var ul = document.createElement("ul");
  article.appendChild(ul);

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
