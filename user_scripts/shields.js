let brick = new Brick(new Vector3(-194,55,70), new Vector3(4,4,4), "#007a29")
brick.visibility = 0.0

Game.newBrick(brick) // "Parent" the brick to the game so players will download it.

brick.touching(debounce((p) => {
     p.setHealth(200)
brick.setCollision(false)
setTimeout(() => {brick.setCollision(true); p.setHealth(100);}, 6000);//2
}), 60000 )// We add a debounce of half a second to prevent double hits.

