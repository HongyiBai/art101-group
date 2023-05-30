const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const buttonBunny = document.getElementById("BunnyB");
const buttonFrog = document.getElementById("FrogB");
const buttonCat = document.getElementById("CatB");
const displayText1 = document.getElementById("displayText1");
const displayText2 = document.getElementById("displayText2");
const displayText3 = document.getElementById("displayText3");

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

let isAlive = setInterval(function () {
    //get current dino Y position
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top"));

    //Get current cactus x position
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left"));
    //detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        //collision
        alert("Game Over!");
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

