var input_1;
var answer_1;
document.getElementById("answer_button_1").addEventListener("click",function() {
  input_1 = document.getElementById("answer_1").value;
  if (input_1 === 'A') {
    answer_1 = "The Germans were the ones who sank the <em>Lucitania</em>, but they might not have considered it an innocent ship. Try again.";
  } else if (input_1 === 'C') {
    answer_1 = "The Americans did wish the Germans Merry Christmas, but this probably did not breed resent.";
  } else if (input_1 == 'D') {
    answer_1 = "The Americans did trespass on the Germans' territory, but this probably wasn't the one that bred the most resentment. Try again.";
  } else if (input_1 === 'B') {
    answer_1 = "Correct! The Americans, after being forced into war, went on to win, and bred a lot of resentment in doing so.";
  } else {
    answer_1 = "Please select A, B, C, or D for your answer (Not your grade).";
  }
  document.getElementById("answer_check_1").innerHTML = answer_1;
});

var input_2;
var answer_2;
document.getElementById("answer_button_2").addEventListener("click",function() {
  input_2 = document.getElementById("answer_2").value;
  if (input_2 === 'A') {
    answer_2 = "Wrong answer. Try again.";
  } else if (input_2 === 'C') {
    answer_2 = "Wrong answer. Try again.";
  } else if (input_2 == 'D') {
    answer_2 = "Nice job remembering the alliances!";
  } else if (input_2 === 'B') {
    answer_2 = "Wrong answer. Try again.";
  } else {
    answer_2 = "Please select A, B, C, or D for your answer (Not your grade).";
  }
  document.getElementById("answer_check_2").innerHTML = answer_2
});

var input_3;
var answer_3;
document.getElementById("answer_button_3").addEventListener("click",function() {
  input_3 = document.getElementById("answer_3").value;
  if (input_3 === 'A') {
    answer_3 = "Correct! Hitler thought that the <em>true</em> Germans had been too watered down with other races.";
  } else if (input_3 === 'C') {
    answer_3 = "Wrong answer. Try again.";
  } else if (input_3 == 'D') {
    answer_3 = "Wrong answer. Try again.";
  } else if (input_3 === 'B') {
    answer_3 = "Wrong answer. Try again.";
  } else {
    answer_3 = "Please select A, B, C, or D for your answer (Not your grade).";
  }
  document.getElementById("answer_check_3").innerHTML = answer_3
});

var input_4;
var answer_4;
document.getElementById("answer_button_4").addEventListener("click",function() {
  input_4 = document.getElementById("answer_4").value;
  if (input_4 === 'A') {
    answer_4 = "Wrong answer. Try again.";
  } else if (input_4 === 'C') {
    answer_4 = "Wrong answer. Try again.";
  } else if (input_4 == 'D') {
    answer_4 = "Correct! Hitler put the non-Germans into concentration camps, and those who couldn't were killed. The Italians had a similar feeling. Mussolini's famous quote: <em>'Everything inside the state; nothing outside the state; nothing against the state.'</em>";
  } else if (input_4 === 'B') {
    answer_4 = "Wrong answer. Try again.";
  } else {
    answer_4 = "Please select A, B, C, or D for your answer (Not your grade).";
  }
  document.getElementById("answer_check_4").innerHTML = answer_4
});
