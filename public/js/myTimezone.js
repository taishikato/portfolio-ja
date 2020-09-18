(function (d, h, m) {
  var js,
    fjs = d.getElementsByTagName(h)[0];
  if (d.getElementById(m)) {
    return;
  }
  js = d.createElement(h);
  js.id = m;
  js.onload = function () {
    window.mytimezoneis({
      position: 'right', // left || right
      emailhash: 'e10ceddc86fc21e74a7854b4aff142e9', // your md5 encoded email address
    });
  };
  js.src = 'https://widgets.mytimezoneis.com/js/widget.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'dhm');
