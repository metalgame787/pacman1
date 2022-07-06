var pacman,amarillo,rojo,azul;



function setup(){
    createCanvas(740,800);
    amarillo= createSprite(550,450,1200,40);
    rojo= createSprite(550,20,1200,40);
    azul= createSprite(15,235,40,390);

   pacman=createSprite(60,120,25,25);







}
function draw(){
background("red");

if (keyDown("right")){
    pacman.x +=5
}
if (keyDown("left")){
    pacman.x -=5
    }
if (keyDown("up")){
        pacman.y -=5
        }
if (keyDown("down")){
            pacman.y +=5
            }
























drawSprites ();
}














































































