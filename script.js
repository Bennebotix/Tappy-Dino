let game = document.querySelector('#game')

game.width = window.innerWidth
game.height = window.innerHeight

let gain = document.querySelector('#gain').value

setInterval(function(){
  game.width = window.innerWidth*gain
  game.height = window.innerHeight*gain
  gain = document.querySelector('#gain').value
}, 0)
