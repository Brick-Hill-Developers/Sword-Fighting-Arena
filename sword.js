let tool = new Tool("Beta Sword")
tool.model = 6916
score = 0
Game.on("playerJoin", (player) => {
player.topPrint("[#FF0000]Beta version v1. Map still in development sword in beta .Just made for fun!")
   player.on("initialSpawn", () => {
       player.equipTool(tool)
   })
})
tool.on("activated", (p) => {
  //console.log(p.username + " has clicked with the tool equipped!")

  let brick = new Brick(p.position, new Vector3(5, 5, 0.5), "#f54242")
brick.visibility = 0.5

clicker = p.username 
Game.newBrick(brick) // "Parent" the brick to the game so players will download it.

brick.touching(debounce((p) => {


 
//p.setHealth(80)
if (clicker == p.username) {

}else{
p.kill()


score+1
p.setScore(score)
}
p.bottomPrint("[#FF0000]Your Last Kill:"+p.username)

}), 500) // We add a debounce of half a second to prevent double hits.

setTimeout(() => {brick.destroy() }, 2000);
///}), 50)

})