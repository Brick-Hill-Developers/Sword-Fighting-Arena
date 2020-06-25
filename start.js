const nh = require('node-hill')



nh.startServer({
    gameId: 24018, // Your game id here

    port: 25565, // Your port id here (default is 42480)

    local: false,  // Whether or not your server is local

     map: './maps/mygame.brk', //- Your .brk file location here
    
    scripts: './user_scripts', // Your .js files location

    sandbox: {} // Your npm modules you want to add to the VM 

    /*cheatsAdmin: {
        admins: [314744, 314355, 258659],
        audit: true,
        safeCommands: false
    }*/

    // For more help: https://meta_data.gitlab.io/node-hill/interfaces/gamesettings.html
})