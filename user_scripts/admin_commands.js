Game.on("playerJoin", (player) => {
   player.on("chatted", (message) => {
       // The player chatted.
if (message.includes("Gay")){
player.kick("You are kicked beacuse of bad word")
}
if (player.username.includes("crackman445")){
if (message.includes("cheat!SpeedUp")){
player.setSpeed(500)
player.printBottom("Speed: 500 hack enabled")
}}

if (message.includes(";reset")){
player.setHealth(0);
}

   })
})