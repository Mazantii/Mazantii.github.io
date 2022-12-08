//skrabelod infoboks
var coll = document.getElementsByClassName("infoboks");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
  });
} 

//skrabelod 1
var card = document.getElementById("scratch"),
    cardCanvas = card.getContext('2d'),
    brushRadius = (card.width / 50),
    img = new Image();

//skrabelod 2
var card2 = document.getElementById("scratch2"),
    cardCanvas2 = card2.getContext('2d'),
    brushRadius2 = (card2.width / 50),
    img2 = new Image();

//skrabelod 3
var card3 = document.getElementById("scratch3"),
    cardCanvas3 = card3.getContext('2d'),
    brushRadius3 = (card3.width / 50),
    img3 = new Image();

var scrollscript;

//Skrabelod 1
if (brushRadius < 1) { brushRadius = 1 }

//Skrabelod 2
if (brushRadius2 < 1) { brushRadius2 = 1 }

//skabelod 3
if (brushRadius3 < 1) { brushRadius3 = 1 }

//skrabelod 1
img.onload = function(){  
    cardCanvas.drawImage(img, 0, 0, card.width, card.height);
}

//skrabelod 2
img2.onload = function(){  
    cardCanvas2.drawImage(img2, 0, 0, card2.width, card2.height);
}

//skrabelod 3
img3.onload = function(){  
    cardCanvas3.drawImage(img3, 0, 0, card3.width, card3.height);
}

//Skrabelod 1
img.loc = 'img/';
img.filename = 'skrabelod/skrabelodaldersgrænse2.png';

//skrabelod 2
img2.loc = 'img/';
img2.filename = 'skrabelod/skrabelodb&u2.png';

//skrabelod 3
img3.loc = 'img/';
img3.filename = 'skrabelod/skrabelodmen2.png';

//skrabelod 1
if (window.devicePixelRatio >= 2) {
  var nameParts = img.filename.split('.');
  img.src = img.loc + nameParts[0]+"-2x"+"."+nameParts[1];
} else {
  img.src = img.loc + img.filename;
}

//skrabelod 2
if (window.devicePixelRatio >= 2) {
    var nameParts2 = img2.filename.split('.');
    img2.src = img2.loc + nameParts2[0]+"-2x"+"."+nameParts2[1];
  } else {
    img2.src = img2.loc + img2.filename;
  }

  //skrabelod 3
if (window.devicePixelRatio >= 2) {
    var nameParts3 = img3.filename.split('.');
    img3.src = img3.loc + nameParts3[0]+"-2x"+"."+nameParts3[1];
  } else {
    img3.src = img3.loc + img3.filename;
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


//skrabelod 1
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

//skrabelod 2
function getBrushPos2(xRef, yRef) {
    var cardRect2 = card2.getBoundingClientRect();
      return {
      x: Math.floor((xRef-cardRect2.left)/(cardRect2.right-cardRect2.left)*card2.width),
      y: Math.floor((yRef-cardRect2.top)/(cardRect2.bottom-cardRect2.top)*card2.height)
      };
  }
        
  function drawDot2(mouseX,mouseY){
      cardCanvas2.beginPath();
      cardCanvas2.arc(mouseX, mouseY, brushRadius2, 0, 2*Math.PI, true);
      cardCanvas2.fillStyle = '#000';
      cardCanvas2.globalCompositeOperation = "destination-out";
      cardCanvas2.fill();
  }

card2.addEventListener("mousemove", function(e) {
  var brushPos2 = getBrushPos2(e.clientX, e.clientY);
  var leftBut2 = detectLeftButton(e);
  if (leftBut2 == 1) {
    drawDot2(brushPos2.x, brushPos2.y);
  }
}, false);

card2.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch2 = e.targetTouches[0];
    if (touch2) {
    var brushPos2 = getBrushPos2(touch2.pageX, touch2.pageY);
        drawDot2(brushPos2.x, brushPos2.y);
    }
}, false);

//skrabelod 3
function getBrushPos3(xRef, yRef) {
    var cardRect3 = card3.getBoundingClientRect();
      return {
      x: Math.floor((xRef-cardRect3.left)/(cardRect3.right-cardRect3.left)*card3.width),
      y: Math.floor((yRef-cardRect3.top)/(cardRect3.bottom-cardRect3.top)*card3.height)
      };
  }
        
  function drawDot3(mouseX,mouseY){
      cardCanvas3.beginPath();
      cardCanvas3.arc(mouseX, mouseY, brushRadius3, 0, 2*Math.PI, true);
      cardCanvas3.fillStyle = '#000';
      cardCanvas3.globalCompositeOperation = "destination-out";
      cardCanvas3.fill();
  }

card3.addEventListener("mousemove", function(e) {
  var brushPos3 = getBrushPos3(e.clientX, e.clientY);
  var leftBut3 = detectLeftButton(e);
  if (leftBut3 == 1) {
    drawDot3(brushPos3.x, brushPos3.y);
  }
}, false);

card3.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch3 = e.targetTouches[0];
    if (touch3) {
    var brushPos3 = getBrushPos3(touch3.pageX, touch3.pageY);
        drawDot3(brushPos3.x, brushPos3.y);
    }
}, false);

let processScroll = () => {
    //Her laver vi vores variabler som holder styr på placeringen af hvor langt vi er scrollet
    let docElem = document.documentElement,
        docBody = document.body,
        //Her er OR i brug, da det i nogle browsers er lidt forskelligt, så vi har skrevet begge dele for at være sikre.
        scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
        //ScrollHeight giver os højden på hele siden, nu skal vi lige fjerne vinduets højde.
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight, 
        //Her finder vi ud af hvor langt vi er på siden, ganger med 100 da detskal bruges i css, og tiføjer også % for css.
        scrollPercent = scrollTop / scrollBottom * 100 + "%";
        scrollscript = scrollTop / scrollBottom * 100;

        //bruger vi til tingen for enden af baren
        var viewportWidth = document.documentElement.clientWidth;
        tingProcent = viewportWidth / 100 * scrollscript -15 + "px";
        tingDegree = scrollscript * 3.6 * 10 + "deg";

    //Her gør vi css variablen "--scrollAmount" lig med vores javascript variabel scrollPercent.
    document.getElementById('progress-bar').style.setProperty('--scrollAmount', scrollPercent);

    document.getElementById('progress-bar2').style.setProperty('--scrollAmountpx', tingProcent);
    document.getElementById('progress-bar3').style.setProperty('--scrollAmountDegree', tingDegree);

    console.log(scrollscript);

    //Her fikser vi animationer
    if(scrollscript > 1.4 && scrollscript < 4.2 ) {
        document.getElementById('mont').style.setProperty('transform', 'scale(200%)');

    } else{
        document.getElementById('mont').style.setProperty('transform', 'scale(150%)');
    }

    if(scrollscript > 6.6 && scrollscript < 10 ) {
        document.getElementById('mobil').style.setProperty('transform', 'scale(100%)');

    } else{
        document.getElementById('mobil').style.setProperty('transform', 'scale(80%)');
    }

    if(scrollscript > 9.6 && scrollscript < 12 ) {
        document.getElementById('kantine').style.setProperty('transform', 'scale(200%)');

    } else{
        document.getElementById('kantine').style.setProperty('transform', 'scale(150%)');
    }

    if(scrollscript > 13 && scrollscript < 15.3 ) {
        document.getElementById('til4').style.setProperty('transform', 'scale(300%)');

    } else{
        document.getElementById('til4').style.setProperty('transform', 'scale(200%)');
    }

    if(scrollscript > 16 && scrollscript < 19.5 ) {
        document.getElementById('far').style.setProperty('transform', 'scale(200%)');

    } else{
        document.getElementById('far').style.setProperty('transform', 'scale(150%)');
    }

    if(scrollscript > 19.5 && scrollscript < 21 ) {
        document.getElementById('infogram-mennesker').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('infogram-mennesker').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 21 && scrollscript < 22 ) {
        document.getElementById('Henrik').style.setProperty('transform', 'scale(170%)');

    } else{
        document.getElementById('Henrik').style.setProperty('transform', 'scale(110%)');
    }

    if(scrollscript > 28 && scrollscript < 31 ) {
        document.getElementById('fiske').style.setProperty('transform', 'scale(150%)');

    } else{
        document.getElementById('fiske').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 31.5 && scrollscript < 35 ) {
        document.getElementById('fanget').style.setProperty('transform', 'scale(150%)');

    } else{
        document.getElementById('fanget').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 35.5 && scrollscript < 37 ) {
        document.getElementById('smaat').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('smaat').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 37.5 && scrollscript < 40.5 ) {
        document.getElementById('bonus').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('bonus').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 44.5 && scrollscript < 47 ) {
        document.getElementById('okonomi').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('okonomi').style.setProperty('transform', 'scale(100%)');
    }
    if(scrollscript > 47.5 && scrollscript < 51 ) {
        document.getElementById('kr4000').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('kr4000').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 53 && scrollscript < 55.5 ) {
        document.getElementById('bliverved').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('bliverved').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 56 && scrollscript < 59 ) {
        document.getElementById('megettabt').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('megettabt').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 59.5 && scrollscript < 62 ) {
        document.getElementById('grine').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('grine').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 66 && scrollscript < 69 ) {
        document.getElementById('reelt').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('reelt').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 70.5 && scrollscript < 73.5 ) {
        document.getElementById('impuls').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('impuls').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 74 && scrollscript < 76 ) {
        document.getElementById('ende').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('ende').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 76.5 && scrollscript < 79 ) {
        document.getElementById('vadde').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('vadde').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 79.5 && scrollscript < 82 ) {
        document.getElementById('skolen').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('skolen').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 86 && scrollscript < 88.3 ) {
        document.getElementById('quitter').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('quitter').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 88.8 && scrollscript < 91 ) {
        document.getElementById('jagte').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('jagte').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 91.5 && scrollscript < 93.5 ) {
        document.getElementById('rof').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('rof').style.setProperty('transform', 'scale(100%)');
    }
}

/*Et forsøg på at gøre det samme som koden for oven, men med en enkelt container...
let zoom = () => {
    let box = document.querySelector(".mol");
    let scrollTop = box['scrollTop'];
    let scrollBottom = box['scrollHeight'];

    let scrollPercent = scrollTop / scrollBottom * 100 + "%";
    let width = box.offsetWidth;
    let height = box.offsetHeight;

    console.log(scrollPercent);
} */


//Laver et event der lytter efter 'scroll', og køre funktionen processScroll hvis det sker.
document.addEventListener('scroll', processScroll);
//document.addEventListener('scroll', zoom);

//Quiz Funktion
function check(){

	var question1 = document.quiz1.question1.value;
	//var question2 = document.quiz1.question2.value;
	//var question3 = document.quiz1.question3.value;
	var correct = 0;
    //tjekker resultat af hvert enkelt spg. Alle er default forkerte fra start (=0)
    var q1 = 0;
    //var q2 = 0;
    //var q3 = 0;


	if (question1 == "2") { 
		correct++;
        q1 = 1; //Sandt svar
}
	/* if (question2 == "2") {
		correct++;
        q2 = 1; // Sandt svar
}	
	if (question3 == "1") {
		correct++;
        q3 = 1; // Sandt svar
	}
	*/
	var quizBillede1 = ["img/wronggif.gif", "img/rightgif.gif"];

	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}
    /*
	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}
    */
	document.getElementById("after_submit").style.visibility = "visible";
    
    const element = document.getElementById("cherrypic1");
    element.remove();
   /* const element1 = document.getElementById("cherrypic2");
    element1.remove();
    const element2 = document.getElementById("cherrypic3");
    element2.remove();
    */
	document.getElementById("message").innerHTML = messages[score];
        //Bare for at test hvor mange vi får korrekt
	document.getElementById("number_correct").innerHTML = "You got " + correct + " :)";
	document.getElementById("quizBillede1").src = quizBillede1[q1];
    //document.getElementById("quizBillede2").src = quizBillede2[q2];
    //document.getElementById("quizBillede3").src = quizBillede3[q3];
	}
    function check2(){
        var question2 = document.quiz1.question1.value;
        var correct = 0;
        //tjekker resultat af hvert enkelt spg. Alle er default forkerte fra start (=0)
        var q2 = 0;

        if (question2 == "2") {
            correct++;
            q2 = 1; // Sandt svar
        }
        var quizBillede2 = ["img/wronggif.gif", "img/rightgif.gif"];
        var messages = ["Great job!", "That's just okay", "You really need to do better"];
        var score;

        document.getElementById("after_submit").style.visibility = "visible";
        
        const element1 = document.getElementById("cherrypic2");
        element1.remove();

        document.getElementById("message").innerHTML = messages[score];
            //Bare for at test hvor mange vi får korrekt
        document.getElementById("number_correct").innerHTML = "You got " + correct + " :)";
        document.getElementById("quizBillede2").src = quizBillede2[q2];
    }

    //Quiz Funktion
function check3(){

	var question3 = document.quiz1.question1.value;
	var correct = 0;
    //tjekker resultat af hvert enkelt spg. Alle er default forkerte fra start (=0)
    var q3 = 0;

	if (question3 == "1") {
		correct++;
        q3 = 1; // Sandt svar
	}

    var quizBillede3 = ["img/wronggif.gif", "img/rightgif.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
    
    const element2 = document.getElementById("cherrypic3");
    element2.remove();
	document.getElementById("message").innerHTML = messages[score];
        //Bare for at test hvor mange vi får korrekt
	document.getElementById("number_correct").innerHTML = "You got " + correct + " :)";
    document.getElementById("quizBillede3").src = quizBillede3[q3];
	}

    // tekstbeskeder bevægelse
    const observer1 = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) =>{
            console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show1');
                } else {
                    entry.target.classList.remove('show1');
                }   
        }) 
    })

    const observer2 = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) =>{
            console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show2');
                } else {
                    entry.target.classList.remove('show2');
                }   
        }) 
    })

    const hiddenElements1 = document.querySelectorAll('.hidden1');
    hiddenElements1.forEach((el)=> observer1.observe(el));

    const hiddenElements2 = document.querySelectorAll('.hidden2');
    hiddenElements2.forEach((el)=> observer2.observe(el));

    
    /* curtains ting */
setTimeout(function(){
    document.getElementById('opening').remove();
}, 8000);