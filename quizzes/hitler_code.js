var input;
var answer;

var answered_1 = "False";
document.getElementById("answer_button_1").addEventListener("click",function() {
  if (answered_1 === "False") {
    input = document.getElementById("answer_1").value;
    if (input === 'A') {
      answer = "<p class='wrong-answer'>The Germans were the ones who sank the <em>Lucitania</em>, but they might not have considered it an innocent ship. Try again.</p>";
      answered_1 = "True";
    } else if (input === 'C') {
      answer = "<p class='wrong-answer'>The Americans did wish the Germans Merry Christmas, but this probably did not breed resent.</p>";
      answered_1 = "True";
    } else if (input === 'D') {
      answer = "<p class='wrong-answer'>The Americans did trespass on the Germans' territory, but this probably wasn't the one that bred the most resentment. Try again.</p>";
      answered_1 = "True";
    } else if (input === 'B') {
      answer = "<p class='correct-answer'>Correct! The Americans, after being forced into war, went on to win, and bred a lot of resentment in doing so.</p>";
      answered_1 = "True";
    } else {
      answer = "Please select A, B, C, or D for your answer (Not your grade).";
    }
    document.getElementById("answer_check_1").innerHTML = answer;
  };
});

var answered_2 = "False";
document.getElementById("answer_button_2").addEventListener("click",function() {
  if (answered_2 === "False") {
    input = document.getElementById("answer_2").value;
    if (input === 'A') {
      answer = "<p class='wrong-answer'>Wrong answer. Try again.</p>";
      answered_2 = "True";
    } else if (input === 'C') {
      answer = "<p class='wrong-answer'>Wrong answer. Try again.</p>";
      answered_2 = "True";
    } else if (input === 'D') {
      answer = "<p class='correct-answer'>Nice job remembering the alliances! The Italians had a similar belief to the Germans', but the Japanese just saw the alliance as a helpful weapon.</p>";
      answered_2 = "True";
    } else if (input === 'B') {
      answer = "<p class='wrong-answer'>Wrong answer. Try again.</p>";
      answered_2 = "True";
    } else {
      answer = "Please select A, B, C, or D for your answer (Not your grade).";
    }
    document.getElementById("answer_check_2").innerHTML = answer
  };
});

var answered_3 = "False";
document.getElementById("answer_button_3").addEventListener("click",function() {
  if (answered_3 === "False") {
    input = document.getElementById("answer_3").value;
    if (input === 'A') {
      answer = "<p class='correct-answer'>Correct! Hitler thought that the <em>true</em> Germans had been too watered down with other races.</p>";
      answered_3 = "True";
    } else if (input === 'C') {
      answer = "<p class='wrong-answer'>Wrong answer. Try again.</p>";
      answered_3 = "True";
    } else if (input === 'D') {
      answer = "<p class='wrong-answer'>Wrong answer. Try again.</p>";
      answered_3 = "True";
    } else if (input === 'B') {
      answer = "<p class='wrong-answer'>Wrong answer. Try again.</p>";
      answered_3 = "True";
    } else {
      answer = "Please select A, B, C, or D for your answer (Not your grade).";
    }
    document.getElementById("answer_check_3").innerHTML = answer
  };
});

var answered_4 = "False";
document.getElementById("answer_button_4").addEventListener("click",function() {
  if (answered_4 === "False") {
    input = document.getElementById("answer_4").value;
    if (input === 'A') {
      answer = "<p class='wrong-answer'>Wrong answer. Try again.</p>";
      answered_4 = "True";
    } else if (input === 'C') {
      answer = "<p class='wrong-answer'>Wrong answer. Try again.</p>";
      answered_4 = "True";
    } else if (input === 'D') {
      answer = "<p class='correct-answer'>Correct! Hitler put the non-Germans into concentration camps, and those who couldn't were killed.</p>";
      answered_4 = "True";
    } else if (input === 'B') {
      answer = "<p class='wrong-answer'>Wrong answer. Try again.</p>";
      answered_4 = "True";
    } else {
      answer = "Please select A, B, C, or D for your answer (Not your grade).";
    };
    document.getElementById("answer_check_4").innerHTML = answer
  }
});

var answered_5 = "False";
document.getElementById("answer_button_5").addEventListener("click",function() {
  if (answered_5 === "False") {
    input = document.getElementById("answer_5").value;
    if (input === 'A') {
      answer = "<p class='wrong-answer'>Wrong answer. Try again.</p>";
      answered_5 = "True";
    } else if (input === 'D') {
      answer = "<p class='wrong-answer'>Wrong answer. Try again.</p>";
      answered_5 = "True";
    } else if (input === 'C') {
      answer = "<p class='correct-answer'>Correct! Hitler thought: 'A few human lives don't matter when the nation being strong is at stake'.<br>The Italians had a similar feeling. Mussolini's famous quote: <em>'Everything inside the state; nothing outside the state; nothing against the state.'</em></p>";
      answered_5 = "True";
    } else if (input === 'B') {
      answer = "<p class='wrong-answer'>Wrong answer. Try again.</p>";
      answered_5 = "True";
    } else {
      answer = "Please select A, B, C, or D for your answer (Not your grade).";
    }
    document.getElementById("answer_check_5").innerHTML = answer
  };
});
