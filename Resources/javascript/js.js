
var card = document.getElementById("scratch"),
    cardCanvas = card.getContext('2d'),
    brushRadius = (card.width / 100),
    img = new Image();

if (brushRadius < 1) { brushRadius = 1 }

img.onload = function(){  
    cardCanvas.drawImage(img, 0, 0, card.width, card.height);
}

img.loc = 'https://www.palottery.state.pa.us/uploadedimages/';
img.filename = 'Tripply_Million_CV.jpg';

if (window.devicePixelRatio >= 2) {
  var nameParts = img.filename.split('.');
  img.src = img.loc + nameParts[0]+"-2x"+"."+nameParts[1];
} else {
  img.src = img.loc + img.filename;
}

function detectLeftButton(event) {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

function getBrushPos(xRef, yRef) {
  var cardRect = card.getBoundingClientRect();
    return {
    x: Math.floor((xRef-cardRect.left)/(cardRect.right-cardRect.left)*card.width),
    y: Math.floor((yRef-cardRect.top)/(cardRect.bottom-cardRect.top)*card.height)
    };
}
      
function drawDot(mouseX,mouseY){
    cardCanvas.beginPath();
    cardCanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
    cardCanvas.fillStyle = '#000';
    cardCanvas.globalCompositeOperation = "destination-out";
    cardCanvas.fill();
}

card.addEventListener("mousemove", function(e) {
  var brushPos = getBrushPos(e.clientX, e.clientY);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
    drawDot(brushPos.x, brushPos.y);
  }
}, false);

card.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY);
        drawDot(brushPos.x, brushPos.y);
    }
}, false);

