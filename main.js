//variables
canvas=new fabric.Canvas("myCanvas");
block_width=40;
block_height=40;
player_x=10;
player_y=10;
player_object="";
block_objects="";
//variables

//events
window.addEventListener("keydown", keyDown);

//functions
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            left:player_x,
            top:player_y
        });
        canvas.add(player_object);
    });
}
function block_update(getImage){
       fabric.Image.fromURL(getImage, function(Img){
           block_objects=Img;
           block_objects.scaleToWidth(block_width);
           block_objects.scaleToHeight(block_height);
           block_objects.set({
               left:player_x,
               top:player_y
           });
           canvas.add(block_objects);
       });
}
function keyDown(e) {
    keypressed=e.keyCode;
    if (e.shiftKey==true&&keypressed=="80") {
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("cw").innerHTML=block_width;
        document.getElementById("ch").innerHTML=block_height;
    }
    if (e.shiftKey==true&&keypressed=="77") {
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("cw").innerHTML=block_width;
        document,getElementById("ch").innerHTML=block_height;
    }
    if (keypressed=="38") {
     up(); 
    }
    if (keypressed=="40") {
        down(); 
       }
       if (keypressed=="37") {
        left(); 
       }
       if (keypressed=="39") {
        right(); 
       }
       if(keypressed=="87"){
           block_update("wall.jpg")
       }
       if(keypressed=="71"){
        block_update("ground.png")
    }
    if(keypressed=="76"){
        block_update("light_green.png")
    }
    if(keypressed=="84"){
        block_update("trunk.jpg")
    }
    if(keypressed=="82"){
        block_update("roof.jpg")
    }
    if(keypressed=="89"){
        block_update("yellow_wall.png")
    }
    if(keypressed=="68"){
        block_update("dark_green.png")
    }
    if(keypressed=="85"){
        block_update("unique.png")
    }
    if(keypressed=="67"){
        block_update("cloud.jpg")
    }
}
function up(){
    if (player_y>=0) {
        player_y=player_y-block_height;
        canvas.remove(player_object);
        player_update();
        }
}
function down() {
    if (player_y<=500) {
        player_y=player_y+block_height;
        canvas.remove(player_object);
        player_update();
        }
}
function left() {
    if (player_x>=0) {
        player_x=player_x-block_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (player_x<=850) {
        player_x=player_x+block_width;
        canvas.remove(player_object);
        player_update();
    }
}