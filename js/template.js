function menubar(){
  var html="";

  html += '<nav>';
    html += '<div id="menu-common">';
      html += '<div id="menu-first">';
        html += '<ul>';
          html += '<li><a href="/lidepla/index.html">TOP</a></li>';
        html += '</ul>';
      html += '</div>';
    html += '</div>';
    html += '<br>';
    html += '初級編';
    html += '<div id="menu-syokyu">';
      html += '<div id="menu-first">';
        html += '<ul>';
          html += '<li><a href="/lidepla/leson/1-01.html">1 はじめに</a></li>';
          html += '<li><a href="/lidepla/leson/1-02.html">2 文字と発音</a></li>';
          html += '<li><a href="">3 基本的な文の構造</a></li>';
        html += '</ul>';
      html += '</div>';
    html += '</div>';
  html += '</nav>';

  document.write(html);
}

function footer(){
  var html="";

  html += '<footer>';
  html += '<div class="container">';
  html += '<br>© 2017 frecafloros';
  html += '</div>';
  html += '</footer>';

  document.write(html);
}
