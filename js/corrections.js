//hide all pages except for splash
function init() {
  $('.full').hide();
  $('.splash').show();
  $('.reset').hide();
  c1 = '';
  c2 = '';
  c3 = '';
  $('.textbox').val('');
  $('#input').val('');
  $('#btn-splash').hide();

  $('.reset').click(init);

  $('#input').change(function() {
    txtinput = $(this).val();

    $('.message p').text(txtinput);
  });
}

function printResults() {

  if( c1 == 'correct' && c2 == 'correct' && c3 == 'correct') {
    $('.score').find('span').text("100%! That's awesome.");
  } else if( c1 == 'incorrect' && c2 == 'correct' && c3 == 'correct'){
    $('.score').find('span').text("67%! Not bad!");
  } else if( c1 == 'incorrect' && c2 == 'incorrect' && c3 == 'correct'){
    $('.score').find('span').text("33%! Study more.");
  } else if( c1 == 'incorrect' && c2 == 'incorrect' && c3 == 'incorrect'){
    $('.score').find('span').text("0%. Really?");
  } else if( c1 == 'correct' && c2 == 'incorrect' && c3 == 'correct'){
    $('.score').find('span').text("67%! Not bad!");
  } else if( c1 == 'correct' && c2 == 'incorrect' && c3 == 'incorrect'){
    $('.score').find('span').text("33%! Study more.");
  } else if( c1 == 'correct' && c2 == 'correct' && c3 == 'incorrect'){
    $('.score').find('span').text("67%! Not bad!");
  } else if( c1 == 'incorrect' && c2 == 'correct' && c3 == 'incorrect'){
    $('.score').find('span').text("33%! Study more.");
  }

}

$(document).ready(function() {
  init();
})


//show button on name submit
$('input').on('keyup',function() {
  $('#btn-splash').show();
  $('label').hide();
  $('.instruction').hide();
  $('.splash h2').hide();
});

$('#reset').click(function() {
    //hide current page
    $(this).parent().hide();
    $('.splash').fadeIn('fast');
    $('input').val('');
    $('input').show();
    $('.message p').hide();
    $('.message2 p').hide();
    $('.form label').show();
    $('.form p').show();
    $('.splash h2').show();

   
  });



//click button to hide current and show next page
$('button').click(function() {

  $('.reset').show();


  if( $(this).hasClass('again') ) {
    $(this).parent().hide();
    //show splash page
    $('.splash').fadeIn('fast');
    $('.form').hide();
    $('.message p').hide();
    $('.message2 p').show();
  }

  
  if( !$(this).hasClass('reset') ) {

    //hide current page
    $(this).parent().hide();
    //show next page
    $(this).parent().next().fadeIn('fast');
  }

  
});

//question clicking functionality
$('.question').click(function() {

  $('.reset').show();

  $('.reset').click(init);
  
  //hide current page
  $(this).parent().hide();
  //show next page
  $(this).parent().next().fadeIn('fast');

});


//greeting function
$('.textbox').change(function(){
  
  var textboxval =  $(this).val();
  
  if (textboxval.length <= 1) {
    $('.message p').html("Your name is only one letter?");
  } else {
    $('.message p').html("Hey, " + textboxval + ". Nice to have you here. :)");
    $('input').hide();
    $('.message2 p').html("Alright, let's do this again " + textboxval + ".");
    $('.message2 p').hide();
  }

});

//duolingo fadein


//quiz function
var c1;
$('.c1').find('.question').click(function(){
  c1 = $(this).find('h3').attr('class');
});

var c2;
$('.c2').find('.question').click(function(){
  c2 = $(this).find('h3').attr('class');
});

var c3;
$('.c3').find('.question').click(function(){
  c3 = $(this).find('h3').attr('class');
  printResults();
});





