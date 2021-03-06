let brick = new Brick(new Vector3(-164,-87,85), new Vector3(1,1,6), "#cce096")
brick.visibility =  0.81//1.0//1



Game.newBrick(brick) // "Parent" the brick to the game so players will download it.

// Settings \\
swordDamage = 27 // How much damage does the sword deal when clicked?
swordRange = 4 // How far can the sword hit players?
swordModelID = 15119 // The mesh of the sword from the store ID

effectsEnabled = false // Enable or disable particles effects? Note: This will disable all related settings (Disable if your server crashes or lags when this is enabled)
    particleSize = new Vector3(0.5,0.5,0.5) // The size of the particles
    hitParticles = true // If true then particles will emit from damaged players
    redBlood = true // If false then particles will be a random color
    deathExplosion = true // When the player dies they make a big brick explosion

legacyBug = false // Enable the "player can still kill players if dead" bug
// Settings \\





let tool = new Tool("Venomshank")
tool.model = swordModelID

tool.on("activated", (attacker) => {
    if (attacker.alive == false && legacyBug == false) return
    for (let player of Game.players) {
        if (Game.pointDistance3D(attacker.position, player.position) <= swordRange) {
            if (player.username !== attacker.username) {
            if (player.alive == true) { // A check to see if the player is attacking themselfs or their target is already dead
                    player.setHealth(player.health - swordDamage) // Damage the player
		    player.centerPrint("#228B22You are poisoned!!!!!");//top
		    setTimeout(() => {player.setHealth(player.health - 5) }, 1000);//2}), 1000)
		    setTimeout(() => {player.setHealth(player.health - 10) }, 1500);//2}), 1000)
		    setTimeout(() => {player.setHealth(player.health - 15) }, 2000);//2}), 1000)
	            attacker.bottomPrint("Victim Health:"+player.health)
		    player.bottomPrint("Attacker Health:}"+attacker.health)//v
                    if (effectsEnabled == true && hitParticles == true) {
                        damagecolor = 0
                        if (redBlood == false) {
                            damagecolor = randomColor()
                        } else {
                            damagecolor = "ff0000"
                        }
                        playerexplode(player,damagecolor) 
                    }
                    if (player.alive == false) { // Was the player killed? Award the killer with a point
                    Game.messageAll(`\\c6${attacker.username} killed ${player.username}`)
                    attacker.setScore(attacker.score += 1)
		    if(player.score > 1){
		    player.setScore(player.score -= 1)
		    }
                    }
                }
            }
        }
    }
})

function playerexplode(player,color) {
    let brick = new Brick(player.position,particleSize,color)
    Game.newBrick(brick)
    var grav = 0.8
    var time = 0
    var prot = randomIntFromInterval(0,9999)
    brick.setInterval(() => {
        var rotx = brick.position.x += 1 * Math.sin(prot)
        var roty = brick.position.y - 1 * Math.cos(prot)
        var rotz = brick.position.z += grav
        grav -= 0.1
        brick.setPosition(new Vector3(rotx,roty,rotz))
        time++
        if (time > 80 && !brick.destroyed) {
            brick.destroy()
        }
    }, 35)
}

Game.on('playerJoin', (p) => {
    p.on("died", () => {
        if (effectsEnabled == false || deathExplosion == false) return // If effects or explosions are disabled then dont run anything
        deathcolor = 0
        if (redBlood == false) {
            deathcolor = randomColor()
        } else {
            deathcolor = "#ff0000"
        }
        for (i = 0; i < 5; i++) { //repeat 5 times for 5 blocks
            playerexplode(p,deathcolor)
        }
    })
})

function randomColor() {
    return '#' + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


brick.touching(debounce((p) => {

p.topPrint("You've picked VenomShank sword")
p.equipTool(tool)


brick.setPosition(new Vector3(774,555,555));
setTimeout(() => {brick.setPosition(new Vector3(-164,-87,85));}, 60000);
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



