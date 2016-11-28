/**
 * Cherche la chaîne de caractères entrée puis affiche les articles qui contiennent cette chaîne
 */
function rechercher_in_page(str) {
  // Si la chaine est vide on affiche tout les articles
  if(str != ""){
    //On vérifie la pésence d'un opérateur
    if(str.indexOf("=") != -1 || str.indexOf(">") != -1 || str.indexOf(">=") != -1 || str.indexOf("<") != -1 || str.indexOf("<=") != -1) {
      //Si l'opérateur est =
      if(str.indexOf("=") != -1 && str.indexOf("<=") == -1 && str.indexOf(">=") == -1) {
        // On stock dans la variable caracteristique la chaine de caracteres avant l'opérateur
        var caracteristique = str.substr(0,str.indexOf("=")-1);
        if(caracteristique.indexOf(" ") != -1) {
          caracteristique = caracteristique.substr(0,caracteristique.indexOf(" ")-1);
        }
        // On stock dans la variable valeur la chaine de caractere qui suit l'opérateur
        var valeur = str.substr(str.indexOf("=")+1);
        if(valeur.indexOf(" ")+1 != -1) {
          valeur = valeur.substr(valeur.indexOf(" ")+1);
        }
        var section = document.getElementById("listePokemons");
        var articles = section.getElementsByTagName("article");
        for(i = 0; i < articles.length; i++) {
          var found = 0;
          if (articles[i].hasChildNodes()) {
              var childs = articles[i].childNodes;
              for(j = 0; j < childs.length; j++) {
                var strCompare = childs[j].innerHTML.toUpperCase();
                if(childs[j].className == caracteristique && strCompare.indexOf(valeur.toUpperCase()) != -1) {
                  found = 1;
                }
              }
          }
          if(found == 0) {
            articles[i].style.display = "none";
          } else {
            articles[i].style.display = "inline-block";
          }
        }
      } else if(str.indexOf("<") != -1 && str.indexOf("<=") == -1) {
        console.log("test");
        var caracteristique = str.substr(0,str.indexOf("<")-1);
        if(caracteristique.indexOf(" ") != -1) {
          caracteristique = caracteristique.substr(0,caracteristique.indexOf(" ")-1);
        }
        var valeur = str.substr(str.indexOf("<")+1);
        if(valeur.indexOf(" ")+1 != -1) {
          valeur = valeur.substr(valeur.indexOf(" ")+1);
          // On transforme la variable number de chaine de caractère à number
          valeur = Number(valeur)
        }
        if(typeof(valeur) == "number") {
          var section = document.getElementById("listePokemons");
          var articles = section.getElementsByTagName("article");
          for(i = 0; i < articles.length; i++) {
            var found = 0;
            if (articles[i].hasChildNodes()) {
                var childs = articles[i].childNodes;
                for(j = 0; j < childs.length; j++) {
                  var strCompare = childs[j].innerHTML;
                  if(childs[j].className == caracteristique && strCompare < valeur) {
                    found = 1;
                  }
                }
            }
            if(found == 0) {
              articles[i].style.display = "none";
            } else {
              articles[i].style.display = "inline-block";
            }
          }
        }
      } else if(str.indexOf("<=") != -1) {
        console.log(str.indexOf("<="));
        var caracteristique = str.substr(0,str.indexOf("<=")-1);
        if(caracteristique.indexOf(" ") != -1) {
          caracteristique = caracteristique.substr(0,caracteristique.indexOf(" ")-1);
        }
        var valeur = str.substr(str.indexOf("<=")+1);
        if(valeur.indexOf(" ")+1 != -1) {
          valeur = valeur.substr(valeur.indexOf(" ")+1);
          valeur = Number(valeur)
        }
        if(typeof(valeur) == "number") {
          var section = document.getElementById("listePokemons");
          var articles = section.getElementsByTagName("article");
          for(i = 0; i < articles.length; i++) {
            var found = 0;
            if (articles[i].hasChildNodes()) {
                var childs = articles[i].childNodes;
                for(j = 0; j < childs.length; j++) {
                  var strCompare = childs[j].innerHTML;
                  if(childs[j].className == caracteristique && strCompare <= valeur) {
                    found = 1;
                  }
                }
            }
            if(found == 0) {
              articles[i].style.display = "none";
            } else {
              articles[i].style.display = "inline-block";
            }
          }
        }
      } else if(str.indexOf(">") != -1 && str.indexOf(">=") == -1) {
        var caracteristique = str.substr(0,str.indexOf(">")-1);
        if(caracteristique.indexOf(" ") != -1) {
          caracteristique = caracteristique.substr(0,caracteristique.indexOf(" ")-1);
        }
        var valeur = str.substr(str.indexOf(">")+1);
        if(valeur.indexOf(" ")+1 != -1) {
          valeur = valeur.substr(valeur.indexOf(" ")+1);
          valeur = Number(valeur)
        }
        if(typeof(valeur) == "number") {
          var section = document.getElementById("listePokemons");
          var articles = section.getElementsByTagName("article");
          for(i = 0; i < articles.length; i++) {
            var found = 0;
            if (articles[i].hasChildNodes()) {
                var childs = articles[i].childNodes;
                for(j = 0; j < childs.length; j++) {
                  var strCompare = childs[j].innerHTML;
                  if(childs[j].className == caracteristique && strCompare > valeur) {
                    found = 1;
                  }
                }
            }
            if(found == 0) {
              articles[i].style.display = "none";
            } else {
              articles[i].style.display = "inline-block";
            }
          }
        }
      }else if(str.indexOf(">=") != -1) {
        var caracteristique = str.substr(0,str.indexOf(">=")-1);
        if(caracteristique.indexOf(" ") != -1) {
          caracteristique = caracteristique.substr(0,caracteristique.indexOf(" ")-1);
        }
        var valeur = str.substr(str.indexOf(">=")+1);
        if(valeur.indexOf(" ")+1 != -1) {
          valeur = valeur.substr(valeur.indexOf(" ")+1);
          valeur = Number(valeur)
        }
        if(typeof(valeur) == "number") {
          var section = document.getElementById("listePokemons");
          var articles = section.getElementsByTagName("article");
          for(i = 0; i < articles.length; i++) {
            var found = 0;
            if (articles[i].hasChildNodes()) {
                var childs = articles[i].childNodes;
                for(j = 0; j < childs.length; j++) {
                  var strCompare = childs[j].innerHTML;
                  if(childs[j].className == caracteristique && strCompare >= valeur) {
                    found = 1;
                  }
                }
            }
            if(found == 0) {
              articles[i].style.display = "none";
            } else {
              articles[i].style.display = "inline-block";
            }
          }
        }
      }
    } else {
      //On récupère tout les éléments article
      var section = document.getElementById("listePokemons");
      var articles = section.getElementsByTagName("article");

      for(i = 0; i < articles.length; i++) {
        // Variable qui sert à vérifier que la chaîne a été trouvée dans l'article
        var found = 0;
        //On vérifie que l'élément article a des fils
        if (articles[i].hasChildNodes()) {
            var childs = articles[i].childNodes;
            for(j = 0; j < childs.length; j++) {
              // Variable qui contient le fils courant de l'élément article
              var element = childs[j];
              /**
               * Variable qui sert à comparer le contenu du fils courant avec la chaîne entrée
               * sans tenir compte de la case
               */
              var strCompare = element.innerHTML.toUpperCase();
              if(strCompare != null && strCompare.indexOf(str.toUpperCase()) != -1) {
                found = 1;
              }
            }
        }
        //Si la chaine n'est pas trouvée on n'affiche plus l'article correspondant
        if(found == 0) {
          articles[i].style.display = "none";
        } else {
          articles[i].style.display = "inline-block";
        }
      }
    }
  } else {
    var articles = document.getElementsByTagName("article");
    for(i = 0; i < articles.length; i++) {
      articles[i].style.display = "inline-block";
    }
  }
  return false;
}

function refuserToucheEntree(event)
{
    // Compatibilité IE / Firefox
    if(!event && window.event) {
        event = window.event;
    }
    // IE
    if(event.keyCode == 13) {
        event.returnValue = false;
        event.cancelBubble = true;
    }
    // DOM
    if(event.which == 13) {
        event.preventDefault();
        event.stopPropagation();
    }
}
