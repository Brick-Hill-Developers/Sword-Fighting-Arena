let tool = new Tool("Reset")
tool.model = 6916
score = 0
Game.on("playerJoin", (player) => {
   player.on("initialSpawn", () => {
       player.equipTool(tool)
   })
})
tool.on("activated", (p) => {
  //console.log(p.username + " has clicked with the tool equipped!")

 
p.kill()



})