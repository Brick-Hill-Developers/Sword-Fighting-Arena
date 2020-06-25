"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const events_1 = require("events");
const VERSION = require("../../package.json").version;
var Weather;
(function (Weather) {
    Weather["Sun"] = "sun";
    Weather["Rain"] = "rain";
    Weather["Snow"] = "snow";
})(Weather = exports.Weather || (exports.Weather = {}));
var GameEvents;
(function (GameEvents) {
    GameEvents["InitialSpawn"] = "initialSpawn";
    GameEvents["PlayerJoin"] = "playerJoin";
    GameEvents["PlayerLeave"] = "playerLeave";
    GameEvents["Chatted"] = "chatted";
    GameEvents["Chat"] = "chat";
})(GameEvents || (GameEvents = {}));
class Game extends events_1.EventEmitter {
    constructor() {
        super();
        this.assignRandomTeam = true;
        this.playerSpawning = true;
        this.sendBricks = true;
        this.systemMessages = true;
        this.players = [];
        this.version = VERSION;
        this.coreScriptsDisabled = [];
        this.sandbox = {};
        this.assignRandomTeam = true;
        this.sendBricks = true;
        this.playerSpawning = true;
        this.playerCount = 0;
        this.systemMessages = true;
        this.MOTD = `[#14d8ff][WELCOME]: Original  Sword Fights on the Heights IV made by Shadalet sky i just remade this game for BrickHill. Currently Work In Progess. This server is proudly hosted with node-hill ${this.version}.`;
        this.world = {
            environment: {
                ambient: "#000000",
                skyColor: "#71b1e6",
                baseColor: "#248233",
                baseSize: 100,
                sunIntensity: 400,
                weather: Weather.Sun
            },
            teams: [],
            bricks: [],
            tools: [],
            spawns: [],
            bots: []
        };
    }
    addListener(event, listener) { return super.addListener(event, listener); }
    getUserInfo(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return scripts.getUserInfo(userId);
        });
    }
    messageAll(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return scripts.message.messageAll(message);
        });
    }
    topPrintAll(message, seconds) {
        return __awaiter(this, void 0, void 0, function* () {
            return scripts.topPrintAll(message, seconds);
        });
    }
    centerPrintAll(message, seconds) {
        return __awaiter(this, void 0, void 0, function* () {
            return scripts.centerPrintAll(message, seconds);
        });
    }
    bottomPrintAll(message, seconds) {
        return __awaiter(this, void 0, void 0, function* () {
            return scripts.bottomPrintAll(message, seconds);
        });
    }
    command(gameCommand, validator, callback) {
        const cmd = (cmd, p, args) => {
            if (cmd === gameCommand) {
                validator(p, args, callback);
            }
        };
        this.on("command", cmd);
        return {
            disconnect: () => this.off("command", cmd)
        };
    }
    commands(gameCommand, validator, callback) {
        const cmd = (cmd, p, args) => {
            if (gameCommand.includes(cmd)) {
                validator(p, args, callback);
            }
        };
        this.on("command", cmd);
        return {
            disconnect: () => this.off("command", cmd)
        };
    }
    newBot(bot) {
        return __awaiter(this, void 0, void 0, function* () {
            this.world.bots.push(bot);
            return scripts.botPacket(bot)
                .broadcast();
        });
    }
    newBrick(brick) {
        return __awaiter(this, void 0, void 0, function* () {
            this.world.bricks.push(brick);
            const packet = new PacketBuilder_1.default(PacketBuilder_1.PacketEnums.SendBrick);
            scripts.addBrickProperties(packet, brick);
            return packet.broadcast();
        });
    }
    deleteBricks(bricks, modifyWorld = true) {
        return __awaiter(this, void 0, void 0, function* () {
            let deletePacket = scripts.deleteBricks(bricks);
            if (modifyWorld) {
                bricks.forEach((brick) => {
                    let index = this.world.bricks.indexOf(brick);
                    if (index !== -1)
                        this.world.bricks.splice(index, 1);
                });
            }
            return deletePacket.broadcast();
        });
    }
    newTeam(team) {
        return __awaiter(this, void 0, void 0, function* () {
            this.world.teams.push(team);
            return scripts.teamPacket.create(team)
                .broadcast();
        });
    }
    loadBricks(bricks, modifyWorld = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (modifyWorld) {
                bricks.forEach((brick) => {
                    this.world.bricks.push(brick);
                });
            }
            return scripts.loadBricks(bricks)
                .broadcast();
        });
    }
    setEnvironment(environment) {
        return __awaiter(this, void 0, void 0, function* () {
            return scripts.setEnvironment(environment);
        });
    }
    loadBrk(location) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = path_1.resolve(process.cwd(), location);
            if (!path.endsWith(".brk"))
                return Promise.reject("Map selected is not a .brk file. Aborting.");
            this.map = path;
            this.mapName = path_1.basename(path);
            yield this.clearMap();
            let brkData = scripts.loadBrk(path);
            this.world.bricks = brkData.bricks;
            this.world.spawns = brkData.spawns;
            let map = scripts.loadBricks(this.world.bricks);
            if (map)
                yield map.broadcast();
            return brkData;
        });
    }
    parseBrk(location) {
        let path = path_1.resolve(process.cwd(), location);
        if (!path.endsWith(".brk"))
            throw new Error("Map selected is not a .brk file. Aborting.");
        return scripts.loadBrk(path);
    }
    clearMap() {
        return __awaiter(this, void 0, void 0, function* () {
            this.world.bricks = [];
            return new PacketBuilder_1.default(PacketBuilder_1.PacketEnums.ClearMap)
                .write("bool", true)
                .broadcast();
        });
    }
    shutdown(status = 0) {
        return process.exit(status);
    }
    pointDistance3D(p1, p2) {
        return Math.sqrt((Math.pow(p1.x - p2.x, 2)) + (Math.pow(p1.y - p2.y, 2)) + (Math.pow(p1.z - p2.z, 2)));
    }
    findPlayerWithName(name) {
        for (let player of this.players) {
            if (player.username === name) {
                return player;
            }
        }
    }
    _newPlayer(p) {
        return __awaiter(this, void 0, void 0, function* () {
            p.socket.player = p;
            p.authenticated = true;
            this.playerCount++;
            this.players.push(p);
            this.emit("playerJoin", p);
            yield p._joined().catch(console.error);
            this.emit("initialSpawn", p);
        });
    }
    _playerLeft(p) {
        return __awaiter(this, void 0, void 0, function* () {
            if (p.authenticated) {
                this.playerCount--;
                this.emit("playerLeave", p);
                let index = this.players.indexOf(p);
                this.players.splice(index, 1);
                yield p._left();
            }
        });
    }
}
exports.Game = Game;
Game.initialSpawn = GameEvents.InitialSpawn;
Game.playerJoin = GameEvents.PlayerJoin;
Game.playerLeave = GameEvents.PlayerLeave;
Game.chatted = GameEvents.Chatted;
Game.chat = GameEvents.Chat;
exports.default = new Game();
const scripts = __importStar(require("../scripts"));
const PacketBuilder_1 = __importStar(require("../net/PacketBuilder"));
