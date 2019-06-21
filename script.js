var magicBall = ["Without a doubt","Most likely","Yes","Outlook not so good","Ask again later","You may rely on it","My reply is no","Better not tell you now","Don't count on it","Cannot predict now", "It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "As I see it, yes", "Outlook good", "Signs point to yes", "Reply hazy, try again", "Concentrate and ask again", "Very doubtful", "My sources say no"]

// console.log(magicBall[0])
// console.log(magicBall[1])
// console.log(magicBall[2])
// console.log(magicBall[3])
// console.log(magicBall[4])
// console.log(magicBall[5])
// console.log(magicBall[6])
// console.log(magicBall[7])
// console.log(magicBall[8])
// console.log(magicBall[9])

var result = 8
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    result = (Math.floor(Math.random() * (max - min + 1)) + min);
    // console.log(result);
    console.log(magicBall[result]);
}
//getRandomInt(0, 9);
// var button = document.querySelector("button");

//document.getElementById("generate")

var button = document.getElementById("generate")

button.addEventListener("click", function(){
  getRandomInt(0, 20);
  document.querySelector("h2").innerHTML = magicBall[result]
})
