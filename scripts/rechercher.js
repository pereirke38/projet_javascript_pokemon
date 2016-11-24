function rechercher_in_page(str) {
  console.log(str);
  if(str != ""){
    var articles = document.getElementsByTagName("article");
    for(i = 0; i < articles.length; i++) {
      var found = 0;
      if (articles[i].hasChildNodes()) {
          var childs = articles[i].childNodes;
          for(j = 0; childs.length; j++) {
            if(childs[j].innerHTML != null && childs[j].innerHTML.indexOf(str) != -1) {
              found = 1;
            }
          }
      }
      if(found == 0) {
        articles[i].style.display = "none";
      }
    }
  }
}
