function rechercher_in_page(str) {
  console.log(str);
  if(str != ""){
    var articles = document.getElementsByTagName("article");
    for(i = 0; i < articles.length; i++) {
      var found = 0;
      if (articles[i].hasChildNodes()) {
          var childs = articles[i].childNodes;
          console.log(childs);
          console.log(childs[0].innerHTML);
          for(j = 0; j < childs.length; j++) {
            console.log(j);
            var element = childs[j];
            console.log(element);
            if(element.innerHTML != null && element.innerHTML.indexOf(str) != -1) {
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
  } else {
    var articles = document.getElementsByTagName("article");
    for(i = 0; i < articles.length; i++) {
      articles[i].style.display = "inline-block";
    }
  }
  return false;
}
