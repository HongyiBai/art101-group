const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const buttonBunny = document.getElementById("BunnyB");
const buttonFrog = document.getElementById("FrogB");
const buttonCat = document.getElementById("CatB");
const displayText1 = document.getElementById("displayText1");
const displayText2 = document.getElementById("displayText2");
const displayText3 = document.getElementById("displayText3");
const gameoverscreen = document.getElementById("gameoverscreen");
const playagain = document.getElementById("playagain");

let caton = false;
let frogon = false;
let bunnyon = false;


function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

function gameOver() {
  // Clear the isAlive interval
  clearInterval(isAlive);

  // Hide the dino and cactus elements
  dino.style.display = "none";
  cactus.style.display = "none";

  // Display the game over text and play again option
  gameoverscreen.textContent = "Game Over!";
  playagain.textContent = "Press Enter to play again";

  // Add event listener to listen for the "Enter" key press
  document.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
      // Reload the page to restart the game
      location.reload();
    }
  });
}



let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    gameOver();
  }
}, 10);

document.addEventListener("keydown", function(event) {
  if (event.code === "Space" && !buttonBunny.matches(":focus") && !buttonFrog.matches(":focus") && !buttonCat.matches(":focus")) {
    jump();
}
});

buttonFrog.addEventListener("click", function() {
    
    frogon = !frogon;
    if (frogon) {
      displayText2.textContent = "Frog- frogs have smooth, moist skin and usually use their hind legs to jump. They are also fast swimmers.";
    } else {
      displayText2.textContent = "";
    }
  });

buttonCat.addEventListener("click", function() {
    
    caton = !caton;
    if (caton) {
      displayText1.textContent = "Cat- cats have super quick reflexes and are quite sneaky. They have various different coat colors.";
    } else {
      displayText1.textContent = "";
    }
  });

buttonBunny.addEventListener("click", function() {
    
    bunnyon = !bunnyon;
    if (bunnyon) {
      displayText3.textContent = "Bunny- bunnies are small furry animals. They are very friendly and are quite fast.";
    } else {
      displayText3.textContent = "";
    }
  });

  //High score that displays in top right corner; may or may not work
  <div id="scoring" style = "position:absolute; right: 2%; top: 5%">High Score: 0 Score 0</div>

  // Get the high score from localStorage or set it to 0 if it doesn't exist
var highScore = localStorage.getItem("highScore") || 0;

// Function to update the high score
function updateHighScore(score) {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    document.getElementById("high-score").textContent = "High Score: " + highScore;
  }
}

// Call the updateHighScore function with the current score value
updateHighScore(currentScore);
  