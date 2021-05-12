window.onscroll = function() {Scroll()};

function Scroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scroll").style.width = scrolled + "%";
}

console.log("%c  ", "background-image: url('https://batutarim.github.io/favicon.png'); background-repeat: no-repeat; background-size: 128px 128px; font-size: 128px")

console.warn("You are not supposed to be here >:/")