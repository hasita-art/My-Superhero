let canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
let player_object = "";
let block_image_object = "";

function player_update(){
    fabric.Image.fromURL("https://drive.google.com/file/d/1fGz6T2OZeGqzLGfhN1fZ2VffCG-OzWxL/view?usp=sharing",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_Image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_heigth);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keyDown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true&&Pressed=='80'){
        console.log('p + shift key');
        block_image_width=block_image_width+10;
        block_image_height=block_image_heigth+10;
        document.getElementById("width").innerHTML=block_image_width;
        document.getElementById("height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true&&Pressed=='77'){
        console.log('m + shift key');
        block_image_width=block_image_width-10;
        block_image_height=block_image_heigth-10;
        document.getElementById("width").innerHTML=block_image_width;
        document.getElementById("height").innerHTML=block_image_height;
    }
    if(keyPressed=='70'){
        new_Image('https://i.postimg.cc/hGnyTPLB/ironman-face.png');
        console.log("f");
    }
    if(keyPressed == "66") {
    new_Image('https://i.postimg.cc/FscwL6M0/spiderman-body.png');
    console.log("b");
    }
    if (keyPressed == "76") {
    new_Image('https://i.postimg.cc/KzF6GDqt/hulk-legs.png');
    console.log("l");
    }
    if (keyPressed == "82") {
    new_Image('https://i.postimg.cc/8s8BGtwS/thor-right-hand.png');
    console.log("r");
    }
    if (keyPressed == "72") {
    new_Image('https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png');
    console.log("h");
    }
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block image height ="+block_image_height);
        console.log("when up arrow key is pressed X ="+player_x+", Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
if (player_y <= 600) {
    player_y = player_y - block_image_height;
    console.log("block image height =" + block_image_height);
    console.log(
    "when down arrow key is pressed X =" + player_x + ", Y =" + player_y
    );
    canvas.remove(player_object);
    player_update();
}
}
function left() {
if (player_x >= 0) {
    player_x = player_x - block_image_height;
    console.log("block image height =" + block_image_height);
    console.log(
    "when left arrow key is pressed X =" + player_x + ", Y =" + player_y
    );
    canvas.remove(player_object);
    player_update();
}
}
function right() {
if (player_x <= 1000) {
    player_x = player_x - block_image_height;
    console.log("block image height =" + block_image_height);
    console.log(
    "when right arrow key is pressed X =" + player_x + ", Y =" + player_y
    );
    canvas.remove(player_object);
    player_update();
}
}