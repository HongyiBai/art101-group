const dino = document.getElementById("dino");
const dinoImg = document.querySelector('#dino>img')
const cactus = document.getElementById("cactus");
const buttonBunny = document.getElementById("BunnyB");
const buttonFrog = document.getElementById("FrogB");
const buttonCat = document.getElementById("CatB");
const displayText1 = document.getElementById("displayText1");
const displayText2 = document.getElementById("displayText2");
const displayText3 = document.getElementById("displayText3");
const gameoverscreen = document.getElementById("gameoverscreen");
const playagain = document.getElementById("playagain");
const numText = document.querySelector('.num');
const numMax  = document.querySelector('#numMax');

let caton = false;
let frogon = false;
let bunnyon = false;
let num = 0;
//  timer for scores
var numjia = setInterval(() => {
  num++
  numMax.innerHTML = `Scores:${num}`
}, 1000);

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

buttonBunny.style.display = "none";
buttonFrog.style.display = "none";
buttonCat.style.display = "none";

function gameOver() {
  // Clear the isAlive interval
  clearInterval(isAlive);

  // Hide the dino and cactus elements
  dino.style.display = "none";
  cactus.style.display = "none";
  numMax.style.display = 'none'

  // Show the character buttons
  buttonBunny.style.display = "block";
  buttonFrog.style.display = "block";
  buttonCat.style.display = "block";

  // Display the game over text and play again option
  gameoverscreen.textContent = "Game Over!";
  playagain.textContent = "click on a animal & Press Enter to play again";
  
  numText.innerHTML = `Your score is<span style="margin: 0 20px;">${num}</span>!`

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
  dinoImg.src = './images/fixedfrog.png'
  let imgUrl = './images/fixedfrog.png'
    
  localStorage.setItem('imgUrl',JSON.stringify(imgUrl))
    frogon = !frogon;
    if (frogon) {
      displayText2.textContent = "Frog- Frogs have smooth, moist skin and usually use their hind legs to jump. They are also fast swimmers. Frog account for around 88% of extrant amphiblan sspecies. They are one of the most diverse vetebrate orders. Each frogs call is unique to it's species. FUN FROG FACTS: (1) Frogs have been on Earth for more than 200 million years, that's as far back to the dinosaur age! (2) Frogs can leap more than 20 times their body length! (3) Frogs were the first land animals to have a vocal cords! ";
    } else {
      displayText2.textContent = "";
    }
  });

buttonCat.addEventListener("click", function() {
  dinoImg.src = './images/PixelCatresized.png'
  let imgUrl = './images/PixelCatresized.png'
    
    localStorage.setItem('imgUrl',JSON.stringify(imgUrl))
    caton = !caton;
    if (caton) {
      displayText1.textContent = "Cat- Cats have super quick reflexes and are quite sneaky. They have various different coat colors. This particular cat's is a Tabby cat. Tabby cats is the type of coat usaully amongst other domestic cat breeds. It consist of patterns that naturally occur and connect. Which comes from is from their ancestor cat the African wildcat. FUN CAT FACT'S: (1) Cats share 95.6% of their genetics with tigers! (2) Cats put their rear end by you face as a sign of trust! (3) Blackie was on the Guinness World Records for being the richest cat ever. His owner left him $12.5 million in his will!";
    } else {
      displayText1.textContent = "";
    }
  });

buttonBunny.addEventListener("click", function() {
  // Change path of img
    dinoImg.src = './images/Bunnynew.png'
      // Save path of img
    let imgUrl = './images/Bunnynew.png'
    // Save it on browser
    localStorage.setItem('imgUrl',JSON.stringify(imgUrl))
    bunnyon = !bunnyon;
    if (bunnyon) {
      displayText3.textContent = "Bunny- bunnies are small furry animals. They are very friendly and are quite fast. There is no differance between bunny and rabbit. However there is a difference between a hare and a rabbit. FUN BUNNY FACTS: (1) A young bunny can be refered to as a kitten! (2) A male rabbit is called a buck! (3) Their teeth never stop growing!  ";
    } else {
      displayText3.textContent = "";
    }
  });
  
  // Detect if the path of img changed
  if (localStorage.key('imgUrl')) {
    dinoImg.src = JSON.parse(localStorage.getItem('imgUrl'))
  } 
  