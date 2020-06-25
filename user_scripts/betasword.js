let brick = new Brick(new Vector3(-266,-131,44), new Vector3(4,4,4), "#ff0000")
brick.visibility =  1.0//0.81//1



Game.newBrick(brick) // "Parent" the brick to the game so players will download it.

let tool = new Tool("Beta Sword")
tool.model = 6916
score = 0

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
//clicker.setScore(clicker.score += 1)
//  if(p.score > 1){
 // p.setScore(p.score -= 1)
 // }


}
p.bottomPrint("[#FF0000]Your Last Kill:"+p.username)

}), 500) // We add a debounce of half a second to prevent double hits.

setTimeout(() => {brick.destroy() }, 2000);
///}), 50)

})


brick.touching(debounce((p) => {

p.topPrint("You've picked Beta!!! sword")
p.equipTool(tool)


brick.setPosition(new Vector3(555,555,555));
setTimeout(() => {brick.setPosition(new Vector3(-266,-131,44));}, 60000);
}), 500) // We add a debounce of half a second to prevent double hits.

//*.let brick = new Brick(new Vector3(-180,18,-2), new Vector3(6,6,2), "#ffc400")


// Sword Script by SmartLion
// Credit not required
// SemVer 1.0.1

Game.on("playerJoin", (player) => {

   player.on("died", () => {

player.destroyTool(tool);
player.setHealth(100);
   })
})



