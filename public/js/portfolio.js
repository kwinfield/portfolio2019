$(document).ready(function () {
  'use strict';
  $(window).on('scroll', doThis);
  $(window).on('scroll', aboutFade);
});

function doThis() {
  'use strict';
  var scrollPosY = window.pageYOffset;
  if (scrollPosY > 700) {
    $('.navbar').addClass('nav-colored');
  }else if (scrollPosY <= 700) {
    $('.navbar').removeClass('nav-colored');
  }
}

function aboutFade() {
  var scrollPosY = window.pageYOffset;
  if (scrollPosY > 500) {
    $('#aboutTitle').fadeIn('slow');
    $('#aboutPic').fadeIn('slow');
    $('#aboutSummary').fadeIn('slow');
  }else if (scrollPosY <= 500) {
    $('#aboutTitle').fadeOut('slow');
    $('#aboutPic').fadeOut('slow');
    $('#aboutSummary').fadeOut('slow');
  }
}

var loopText = [
  'Keith',
  'a Programmer',
  'a Web Developer',
];
var i = 0;
var max = loopText.length;
var $text = $('#swapText');
var css = {};
(function changeText() {

  if (i < max) {

    if (i === (max - 1)) {
      css['color'] = 'red';
      $('.workButton').css("visibility", "visible");
    }

    $text
      .fadeOut(0)
      .text(loopText[i++])
      .css(css)
      .fadeIn(500);

    setTimeout(changeText, 2500);

  }

}());
