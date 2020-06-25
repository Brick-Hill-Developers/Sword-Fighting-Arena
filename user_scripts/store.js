Game.on("playerJoin", (player) => {
   player.on("chatted", (message) => {
if (message.includes("!shop")){
 	player.centerPrint("Buying items use their command: !Darkhearth = 30 score !Firebrand= 10 score !Icedagger= 50 score")
}
})
})