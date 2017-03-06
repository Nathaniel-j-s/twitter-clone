$(document).ready(function() {

//This is to hide/show the tweet controls and resize the box. It will not re-hide the controls if there is text in the input.
  $('#tweet-controls').hide();
  $('.tweet-compose').on('focus', function() {
    $('#tweet-controls').show();
    $('.tweet-compose').css('height', '5em');
  });
  $('.tweet-compose').on('blur', function() {
    if ($('.tweet-compose').val() == '') {
      $('#tweet-controls').hide();
      $('.tweet-compose').css('height', '2.5em');
    }
  })

//This is to make the text counter go up/down and change to red below 10. Also disables submit button when needed.
  $('.tweet-compose').keyup(function() {
    var remaining = 140 - $(this).val().length;
      if (remaining < 0) {
        $('#tweet-submit').prop('disabled', true);
        $('#char-count').css('color', 'rgb(187, 37, 37)');
      } else if (remaining <= 10 && remaining >= 0) {
        $('#char-count').css('color', 'rgb(187, 37, 37)');
        $('#tweet-submit').prop('disabled', false);
      } else if (remaining > 10) {
        $('#char-count').css('color', '#999');
      };
    $('#char-count').text(remaining);
  });

//When the tweet button is clicked, go back to the default phase and post the new one in the junk space.





















});
