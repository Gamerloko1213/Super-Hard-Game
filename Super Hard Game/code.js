var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["206e82bc-4ee5-4f23-8443-e455fbb095a2","3d1b5790-1bf0-463d-b4a5-d0d86cb7a8ed"],"propsByKey":{"206e82bc-4ee5-4f23-8443-e455fbb095a2":{"name":"sam","sourceUrl":null,"frameSize":{"x":61,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"Omwm8cfmsiOBcc6bvEgt4crvDmYgyZIq","loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":94},"rootRelativePath":"assets/206e82bc-4ee5-4f23-8443-e455fbb095a2.png"},"3d1b5790-1bf0-463d-b4a5-d0d86cb7a8ed":{"name":"sam2","sourceUrl":null,"frameSize":{"x":61,"y":94},"frameCount":4,"looping":true,"frameDelay":1,"version":"9Ejug2rLENCw8whha4RGsm_xSDi0mgnp","loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":188},"rootRelativePath":"assets/3d1b5790-1bf0-463d-b4a5-d0d86cb7a8ed.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sam = createSprite(20,200,20,20);
var parede1 = createSprite(200,120,400,5)
var parede2 = createSprite(200,280,400,5)
var fim = createSprite(380,200,80,166)
var car1 = createSprite(70,200,10,20)
var car2 = createSprite(130,200,10,20)
var car3 = createSprite(190,200,10,20)
var car4 = createSprite(250,200,10,20)
var car5 = createSprite(310,200,10,20)
var mortes = 0;
var gamestate = "play"
sam.setAnimation("sam")
sam.scale=0.3
fim.shapeColor = "yellow"





car1.velocityY = 7;
car2.velocityY = -7;
car3.velocityY = 7;
car4.velocityY = -7;
car5.velocityY = 7;

function draw() {
  
background("white");
textSize(20);
text("Mortes: " + mortes,100,100);
   
  
if (keyDown("up")) {
    sam.y = sam.y - 5
  }
    
  if (keyDown("down")) {
    sam.y = sam.y + 5
  }
  
  if (keyDown("left")) {
    sam.x = sam.x - 5
  }
  
  if (keyDown("right")) {
    sam.x = sam.x + 5
  }
  
  if (sam.isTouching(car1) || sam.isTouching(car2) ||
sam.isTouching(car3) || sam.isTouching(car4) || sam.isTouching(car5)){
  mortes = mortes + 1;
  sam.x = 20;
  sam.y = 200;
}
  
 if (sam.isTouching(fim)) {
    parede1.destroy()
    parede2.destroy()
    textSize(20);
    text("PARABENS WOOO", 100, 200);
    sam.velocityY = 0;
    sam.velocityX = 0;
    sam.setAnimation(sam2)
  }
   
  
car1.bounceOff(parede1);
car2.bounceOff(parede1);
car3.bounceOff(parede1);
car4.bounceOff(parede1);
car5.bounceOff(parede1)
car1.bounceOff(parede2);
car2.bounceOff(parede2);
car3.bounceOff(parede2);
car4.bounceOff(parede2);
car5.bounceOff(parede2)    
 drawSprites();
   
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
