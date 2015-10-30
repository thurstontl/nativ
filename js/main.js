//hide all pages except for splash
function init() {
  $('.full').hide();
  $('.splash').show();
  $('.escape').hide();
  c1 = '';
  c2 = '';
  c3 = '';
  $('.textbox').val('');
  $('#input').val('');
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


init();

//show button on name submit




//click button to hide current and show next page
$('button').click(function() {

  $('.escape').show();

  $('.escape').click(init);

  if( $(this).hasClass('reset') ) {
    $(this).parent().hide();
    //show splash page
    $('.splash').fadeIn('fast');
    $('input').show();
    $('input').val('');
    $('.message p').hide();
  } 

  if( $(this).hasClass('escape') ) {
    $('.splash').fadeIn('fast');
    $('input').show();
    $('input').val('');
    $('.message p').hide();
  } else {
    //hide current page
    $(this).parent().hide();
    //show next page
    $(this).parent().next().fadeIn('fast');
  }

  $('#input').change(function() {
    txtinput = $(this).val();

    $('.message p').text(txtinput);
  });
});

//question clicking functionality
$('.question').click(function() {

  $('.escape').show();

  $('.escape').click(init);
  
  //hide current page
  $(this).parent().hide();
  //show next page
  $(this).parent().next().fadeIn('fast');

});


//greeting function
$('.textbox').change(function(){
  
  var textboxval =  $(this).val();
  
  if (textboxval.length <= 1) {
    $('.message p').html("That's way too short. Type more, bro.");
  } else {
    $('.message p').html("Hey, " + textboxval + ". Great to have you here. :)");
    $('input').hide();
  }

});

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





