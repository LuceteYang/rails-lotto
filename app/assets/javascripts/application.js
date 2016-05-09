// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// = require jquery
// = require jquery_ujs
// = require turbolinks
// = require_tree .
// = requere test

var arr = new Array();
$('.next-ball').on('click', function(){
  var random = Math.floor(Math.random()*50);
  console.log(random);
  if( arr.indexOf(random) < 1){
    arr.push(random);
    $('.lottery').append('<li class="lottery-ball">' + random + '</li>');
  } else {
    alert(random + ' has already been picked, go again.');
  }
  console.log(arr);
  if ( $('.lottery').children().length > 5 ) {
    $('.next-ball').hide();
    $('.play-again').show();
  }

  
});
$('.play-again').on('click', function(){
  $('.lottery').children().remove();
  arr = [];
  $('.next-ball').show();
  $('.play-again').hide();
});