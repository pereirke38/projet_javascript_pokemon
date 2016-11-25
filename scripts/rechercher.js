/**
 * Cherche la chaîne de caractères entrée puis affiche les articles qui contiennent cette chaîne
 */
function rechercher_in_page(str) {
  // Si la chaine est vide on affiche tout les articles
  if(str != ""){
    //On récupère tout les éléments article
    var articles = document.getElementsByTagName("article");

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
