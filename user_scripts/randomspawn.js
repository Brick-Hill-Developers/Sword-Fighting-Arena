Game.on("playerJoin", (p) => {

spawn = Math.floor(Math.random() * 8); 
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
 if(spawn == 5){

setTimeout(() => {
p.setPosition(new Vector3(-265,18,98));//v
}, 100);
}
 if(spawn == 6){

setTimeout(() => {
p.setPosition(new Vector3(-358,-249,111));//v
}, 100);
}
 if(spawn == 7){

setTimeout(() => {
p.setPosition(new Vector3(-372,-258,111));//v
}, 100);
}

 if(spawn  == 8){

setTimeout(() => {
p.setPosition(new Vector3(-268,-134,170));//v
}, 100);
}


p.on("died", () => {


spawn2 = Math.floor(Math.random() * 8); 
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
 if(spawn2 == 5){

setTimeout(() => {
p.setPosition(new Vector3(-265,18,98));//v
}, 100);
}
 if(spawn2 == 6){

setTimeout(() => {
p.setPosition(new Vector3(-358,-249,111));//v
}, 100);
}
 if(spawn2 == 7){

setTimeout(() => {
p.setPosition(new Vector3(-372,-258,111));//v
}, 100);
}
 if(spawn2 == 8){

setTimeout(() => {
p.setPosition(new Vector3(-268,-134,170));//v
}, 100);
}


})
})