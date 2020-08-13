// Using Jquery

/*

// Hiding The BUttons
$('.dice').hide();
$('.btn-roll').hide();
$('.btn-hold').hide();

var scores, roundScore, activePlayer,targetScore,dice;

$('.btn-new').click(function () {

  // Showing the buttons
  $('.dice').fadeIn();
  $('.btn-roll').fadeIn();
  $('.btn-hold').fadeIn();

  // Adding,Removing Active Class
  $('.player-0-panel').addClass('active');
  $('.player-1-panel').removeClass('active');

  $('.player-score').text('0');
  $('.player-current-score').text('0');
  targetScore = 100;
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;

  // Dice Rolling
  $('.btn-roll').click(function () {
    dice = Math.floor(Math.random() * 6) + 1;
    $('.dice').attr('src','dice-' + dice + '.png');
    if (dice > 1) {
      roundScore += dice;
      $('#current-' + activePlayer).text(roundScore);
    } else {
      roundScore = 0;
      $('#current-' + activePlayer).text('0');
      // Changing Turns
      // $('.player-panel').toggleClass('active');
      $('.player-'+ activePlayer +'-panel').removeClass('active');
      activePlayer = [1,0][activePlayer];
      $('.player-'+ activePlayer +'-panel').addClass('active');
    }
  });

  // Score Holding
  $('.btn-hold').click(function () {
    scores[activePlayer] += roundScore;
    if (scores[activePlayer] >= targetScore) {
      $('.dice').fadeOut();
      $('.btn-roll').fadeOut();
      $('.btn-hold').fadeOut();
      // $('player-panel').removeClass('active');
      $('#current-' + activePlayer).text('0');
      $('#score-' + activePlayer).text('Winner!');
    } else {
      roundScore = 0;
      $('#score-' + activePlayer).text(scores[activePlayer]);
      $('#current-' + activePlayer).text('0');
      // Changing Turns
      $('.player-'+ activePlayer +'-panel').removeClass('active');
      activePlayer = [1,0][activePlayer];
      $('.player-'+ activePlayer +'-panel').addClass('active');
    }
  });
});

*/

////////////////////////////////////////////

// Using Jquery (Another Type)

var scores,roundScore,activePlayer,targetScore,dice,playerScoreCardAnim;
// Initializing Function
function init() {
  targetScore = 10;
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  playerScoreCardAnim = false;
  // Updating UI
  $('.player-score').text('0');
  $('.player-current-score').text('0');
  // Hiding The Dice, Buttons Before starting New Game
  $('.dice').hide();
  $('.btn-roll').hide();
  $('.btn-hold').hide();
  // Hinding the Current Boxes
  $('.player-current-box').hide();
}
init();// Initializing the Scores when loading the page

// Events to happen when the NewGame button is clicked
$('.btn-new').click(function () {
  init();
  // Moving the New Game Btn Upwards
  $('.btn-new').addClass('btn-new-anim-up');
  $('.btn-new').removeClass('btn-new-anim-middle');
  // Moving the Player Score Card Upwards
  $('.player-score-card').addClass('player-score-anim-up');
  $('.player-score-card').removeClass('player-score-anim-middle');
  // Showing the Dice, Buttons
  $('.dice').fadeIn();
  $('.btn-roll').fadeIn();
  $('.btn-hold').fadeIn();
  // Adding And Removing Active Classes to and from Panels
  $('.player-0-panel').addClass('active');
  $('.player-1-panel').removeClass('active');
  // Fading In the Current Box of the Active Player
  $('.player-current-box-' + activePlayer).fadeIn();
});

// Events to happen when the RollDice button is clicked
$('.btn-roll').click(function () {
  // Generating a Random number for dice
  dice = Math.floor(Math.random() * 6) + 1;
  // Updating Dice to UI
  $('.dice').attr('src','dice-' + dice + '.png');
  // Processing The Number On The Dice
  if (dice > 1) {
    // Add the Number to Current Round Score
    roundScore += dice;
    // Update the UI with Current Round Score
    $('#current-' + activePlayer).text(roundScore);
  } else {
    // Switch Player
    switchPlayer();
  }
});

// Events to happen when the Hold button is clicked
$('.btn-hold').click(function () {
  // Adding Current Score To The Total Score
  scores[activePlayer] += roundScore;
  // Updating the total score in the UI
  $('#score-' + activePlayer).text(scores[activePlayer]);
  // Comparing Totatl Score with the Target Score
  if (scores[activePlayer] >= targetScore) {
    // Display Winner in Place of Score
    $('#score-' + activePlayer).text('Winner!');
    // Clearing the Dice, Buttons
    $('.dice').fadeOut();
    $('.btn-roll').fadeOut();
    $('.btn-hold').fadeOut();
    // Hiding the Current Box
    $('.player-current-box-' + activePlayer).fadeOut();
    // Moving the New Game Btn to the middle
    $('.btn-new').addClass('btn-new-anim-middle');
    $('.btn-new').removeClass('btn-new-anim-up');
    // Moving the Player Score Card to the middle
    $('.player-score-card').addClass('player-score-anim-middle');
    $('.player-score-card').removeClass('player-score-anim-up');
  } else {
    // Switch Player
    switchPlayer();
  }
});

function switchPlayer() {
  // Clearing The Current Score of active Player
  roundScore = 0;
  // Clearing The Current Score of active Player in UI
  $('#current-' + activePlayer).text('0');
  // Fading Out the Current Box while switching Player
  $('.player-current-box-' + activePlayer).fadeOut();

  // Moving Player Score Card to middle while Switching
  if (playerScoreCardAnim) {
    $('.player-score-card-' + activePlayer).addClass('player-score-anim-middle');
    $('.player-score-card-' + activePlayer).removeClass('player-score-anim-up');
  }

  // Changing the active players
  activePlayer = [1,0][activePlayer];

  // Moving Player Score Card to Up while Switching
  if (playerScoreCardAnim) {
    $('.player-score-card-' + activePlayer).addClass('player-score-anim-up');
    $('.player-score-card-' + activePlayer).removeClass('player-score-anim-middle');
  }

  // Fading In the Current Box while switching Player
  $('.player-current-box-' + activePlayer).fadeIn();

  // Changing the active class from one panel to other
  $('.player-panel').toggleClass('active');
}

///////////////////////////////////////////

// Using Pure JS

/*

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);
document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('.btn-new').addEventListner('click',function () {
//   dice = Math.floor(Math.random() * 6) + 1;
//   document.querySelector('#current-1').innerText = dice;
// });

*/
