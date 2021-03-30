var paddle,ball,brick
var bgroup,edges


function setup() {
  createCanvas(800,400);
  paddle = createSprite(400,350,150,10)
  ball = createSprite(400,330,30,30)
  ball.velocityX = 2
  ball.velocityY = -3
  bgroup = createGroup()
  for (var i = 50; i<750; i = i+70){
    for (var j = 50; j<200; j = j+40){
      brick = createSprite(i,j,50,10)
      bgroup.add(brick)
    }
  }
  edges = createEdgeSprites()

}

function draw() {
  background(0);  
  paddle.x = mouseX
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[1])
  ball.bounceOff(edges[2]) 
  ball.bounceOff(paddle)
  for (var i = 0; i < bgroup.length; i = i+1){
    if (ball.isTouching(bgroup.get(i))){
      ball.bounceOff(bgroup.get(i))
      bgroup.get(i).destroy()
    }
  }
  if (ball.y > 350){
    background("orange")
    bgroup.destroyEach()
    paddle.destroy()
    ball.destroy()
    text("Game Over",380,200)
  }
  drawSprites(); 
} 