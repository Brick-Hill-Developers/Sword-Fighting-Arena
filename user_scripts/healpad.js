let brick = new Brick(new Vector3(-191,-134,100), new Vector3(5,5,2), "#007a29")
brick.visibility = 1.0

let brick2 = new Brick(new Vector3(-348,-134,106), new Vector3(5,5,2), "#007a29")
brick2.visibility = 1.0

Game.newBrick(brick) // "Parent" the brick to the game so players will download it.

Game.newBrick(brick2) // "Parent" the brick to the game so players will download it.

brick.touching(debounce((p) => {
     p.setHealth(100)
brick.setCollision(false)
setTimeout(() => {brick.setCollision(true)}, 6000);//2
}), 60000) // We add a debounce of half a second to prevent double hits.


brick2.touching(debounce((p) => {
     p.setHealth(100)
brick2.setCollision(false)
setTimeout(() => {brick.setCollision(true)}, 6000);//2
}), 60000) // We add a debounce of half a second to prevent double hits.


/*.let brick = new Brick(new Vector3(-180,18,-2), new Vector3(6,6,2), "#ffc400")


   }), 500)*/
