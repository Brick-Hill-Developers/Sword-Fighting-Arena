Game.on("playerJoin", (player) => {

   player.on("died", () => {
if (player.score > 5){
       player.setScore(player.score-=5)
}
   })
})