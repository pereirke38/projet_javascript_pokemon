function insererElements() {
  var data = JSON.parse(dracaufeu);
  var section = document.createElement("section");
  section.id = "titre";
  document.body.appendChild(section);
  var article = document.createElement("article");
  section.appendChild(article);

  var header = document.createElement("header");
  article.appendChild(header);

  var titre1 = document.createElement("h1");
  titre1.innerHTML = data["nom"];
  header.appendChild(titre1);

  var div = document.createElement("div");
  div.id = "image"+data["nom"];
  document.body.appendChild(div);

  var img = document.createElement("img");
  img.src = data["image"]["src"];
  div.appendChild(img);

  var section = document.createElement("section");
  section.id = "description"+data["nom"];
  document.body.appendChild(section);

  var article = document.createElement("article");
  section.appendChild(article);

  var header = document.createElement("header");
  article.appendChild(header);

  var titre1 = document.createElement("h1");
  titre1.innerHTML = "Description de "+data["nom"];
  header.appendChild(titre1);

  for(i=0; i < data["descriptions"].length; i++){
    var description = document.createElement("p");
    description.innerHTML = data["descriptions"][i]["description"];
    article.appendChild(description);
  }

  var section = document.createElement("section");
  section.id = "Information sur "+data["nom"];
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
  p.innerHTML = data["types"]["type1"];
  article.appendChild(p);

  var p = document.createElement("p");
  p.innerHTML = data["types"]["type2"];
  article.appendChild(p);

  var article = document.createElement("article");
  article.id = "faiblesses";
  section.appendChild(article);

  var header = document.createElement("header");
  article.appendChild(header);

  var titre2 = document.createElement("h1");
  titre2.innerHTML = "Faiblesses";
  header.appendChild(titre2);

  for(i=0; i < data["faiblesses"].length; i++){
    var p = document.createElement("p");
    p.innerHTML = data["faiblesses"][i]["type"];
    article.appendChild(p);

    var p = document.createElement("p");
    p.innerHTML = data["faiblesses"][i]["valeur"];
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

  for(i=0; i < data["sprites"].length; i++){
    var li = document.createElement("li");
    ul.appendChild(li);

    var p = document.createElement("p");
    p.innerHTML = data["sprites"][i]["titre"];
    li.appendChild(p);

    var img = document.createElement("img");
    img.src = data["sprites"][i]["normal"];
    li.appendChild(img);

    var img = document.createElement("img");
    img.src = data["sprites"][i]["shiny"];
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
