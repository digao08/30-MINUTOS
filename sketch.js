var tela;
var bloco1, bloco2, bloco3, bloco4;
var bola, arestas;
var music;

function preload() {

}


function setup() {
    tela = createCanvas(800, 600);

    bloco1 = createSprite(0, 580, 360, 30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295, 580, 200, 30);
    bloco2.shapeColor = "red";

    bloco3 = createSprite(510, 580, 200, 30);
    bloco3.shapeColor = "orange";

    bloco4 = createSprite(800, 580, 360, 30);
    bloco4.shapeColor = "yellow";
    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4

    bola = createSprite(random(20, 750), 100, 40, 40);
    bola.velocityX = "7"
    bola.velocityY = "7"
    bola.shapeColor = rgb(255, 255, 255);
    //escreva o código para adicionar velocityX e velocityY

}

function draw() {
    background(rgb(169, 169, 169));
    arestas = createEdgeSprites();
    bola.bounceOff(arestas);


    //escreva o código de ricochete de bola para bloco1 
    if (bloco1.isTouching(bola) && bola.bounceOff(bloco1)) {
        bola.shapeColor = "blue";
    }


    if (bloco2.isTouching(bola) && bola.bounceOff(bloco2)){
        bola.shapeColor = "red";
    }

    if (bloco3.isTouching(bola) && bola.bounceOff(bloco3)) {
        bola.shapeColor = "orange";
    }

    if (bloco4.isTouching(bola) && bola.bounceOff(bloco4)) {
        bola.shapeColor = "yellow";
    }
    //escreva o código para definir velocityX e velocityY da bola como 0

    //escreva o código para parar a música


//escreva o código de ricochete de bola para bloco3

//escreva o código de ricochete de bola para bloco4

drawSprites();
}