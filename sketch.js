var fundo;
var chao;



function preload() {
fundo = loadImage("./imagens/background.jpg");
}



function setup() {
 createCanvas(windowWidth, windowHeight);

 chao = createSprite(width/2, height -10, width, 20);
 chao.x = chao.width / 2;
 chao.shapeColor = "black";
}



function draw() {
background(fundo);
drawSprites();

}









