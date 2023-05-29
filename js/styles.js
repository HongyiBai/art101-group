const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
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

document.addEventListener("keydown", function (event) {
    jump();
});

document.getElementById("Cat B").addEventListener
{
    <p>cats have super quick reflexes and are quite sneaky. They have various different coat colors.</p>
}
document.getElementById("Frog B").addEventListener
{
    <p>frogs have smooth, moist skin and usually use their hind legs to jump. They are also fast swimmers.</p>
}
document.getElementById("Bunny B").addEventListener
{
    <p>bunnies are small furry animals. They are very friendly and are quite fast.</p>
}
