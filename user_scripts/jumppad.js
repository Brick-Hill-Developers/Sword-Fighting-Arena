let brick = new Brick(new Vector3(-180,18,-2), new Vector3(6,6,2), "#ffc400")
brick.visibility = 1.0


let brick2 = new Brick(new Vector3(-251,-209,91), new Vector3(6,6,2), "#ffc400")
brick.visibility = 1.0


Game.newBrick(brick) // "Parent" the brick to the game so players will download it.

Game.newBrick(brick2) // "Parent" the brick to the game so players will download it.

brick.touching(debounce((p) => {
     p.setJumpPower(16)
     p.centerPrint("Jump Now to use jumppad");
setTimeout(() => {p.setJumpPower(6)}, 2000);
}), 500) // We add a debounce of half a second to prevent double hits.


brick2.touching(debounce((p) => {
     p.setJumpPower(16)
     p.centerPrint("Jump Now to use jumppad");
setTimeout(() => {p.setJumpPower(6)}, 2000);
}), 500) // We add a debounce of half a second to prevent double hits.

/*.let brick = new Brick(new Vector3(-180,18,-2), new Vector3(6,6,2), "#ffc400")

brick.touching(debounce((p) => {
if(brick.Name == "JumpPad") {
       // The player chatted.
//player.kick("You can't chat.")

}
   }), 500)*/
