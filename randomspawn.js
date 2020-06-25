Game.on("playerJoin", (p) => {

spawn = Math.floor(Math.random() * 4); 
 if(spawn == 0){
setTimeout(() => {
p.setPosition(new Vector3(-8,-3,-2));
}, 100);
 }
 if(spawn == 1){
setTimeout(() => {
p.setPosition(new Vector3(-258,-123,98));
}, 100);
 }
 if(spawn == 2){
setTimeout(() => {
p.setPosition(new Vector3(-287,-222,117));//v
}, 100);
}//))
 if(spawn == 3){
setTimeout(() => {
p.setPosition(new Vector3(-278,-123,98));//v
}, 100);
}
 if(spawn == 4){

setTimeout(() => {
p.setPosition(new Vector3(-258,-143,98));//v
}, 100);
}
p.on("died", () => {


spawn2 = Math.floor(Math.random() * 4); 
 if(spawn2 == 0){
setTimeout(() => {
p.setPosition(new Vector3(-8,-3,-2));
}, 100);
 }
 if(spawn2 == 1){
setTimeout(() => {
p.setPosition(new Vector3(-258,-123,98));
}, 100);
 }
 if(spawn2 == 2){
setTimeout(() => {
p.setPosition(new Vector3(-287,-222,117));//v
}, 100);
}//))
 if(spawn2 == 3){
setTimeout(() => {
p.setPosition(new Vector3(-278,-123,98));//v
}, 100);
}
 if(spawn2 == 4){//spawnd
setTimeout(() => {
p.setPosition(new Vector3(-258,-143,98));//v
}, 100);
}



})
})