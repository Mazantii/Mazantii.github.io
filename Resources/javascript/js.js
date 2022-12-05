var card = document.getElementById("scratch"),
    cardCanvas = card.getContext('2d'),
    brushRadius = (card.width / 50),
    img = new Image();

var scrollscript;

if (brushRadius < 1) { brushRadius = 1 }

img.onload = function(){  
    cardCanvas.drawImage(img, 0, 0, card.width, card.height);
}

img.loc = 'img/';
img.filename = 'skrabelod2.jpg';

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
        tingDegree = scrollscript * 3.6 + "deg";

    //Her gør vi css variablen "--scrollAmount" lig med vores javascript variabel scrollPercent.
    document.getElementById('progress-bar').style.setProperty('--scrollAmount', scrollPercent);

    document.getElementById('progress-bar2').style.setProperty('--scrollAmountpx', tingProcent);
    document.getElementById('progress-bar3').style.setProperty('--scrollAmountDegree', tingDegree);

    console.log(scrollscript);

    //Her fikser vi animationer
    if(scrollscript > 1 && scrollscript < 3.2 ) {
        document.getElementById('mont').style.setProperty('transform', 'scale(200%)');

    } else{
        document.getElementById('mont').style.setProperty('transform', 'scale(150%)');
    }

    if(scrollscript > 5.6 && scrollscript < 8.2 ) {
        document.getElementById('mobil').style.setProperty('transform', 'scale(100%)');

    } else{
        document.getElementById('mobil').style.setProperty('transform', 'scale(80%)');
    }

    if(scrollscript > 9.6 && scrollscript < 11.5 ) {
        document.getElementById('kantine').style.setProperty('transform', 'scale(200%)');

    } else{
        document.getElementById('kantine').style.setProperty('transform', 'scale(150%)');
    }

    if(scrollscript > 12.2 && scrollscript < 14.3 ) {
        document.getElementById('til4').style.setProperty('transform', 'scale(300%)');

    } else{
        document.getElementById('til4').style.setProperty('transform', 'scale(200%)');
    }

    if(scrollscript > 15.4 && scrollscript < 16.3 ) {
        document.getElementById('mellem').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('mellem').style.setProperty('transform', 'scale(100%)');
    }

    if(scrollscript > 17.5 && scrollscript < 20.3 ) {
        document.getElementById('far').style.setProperty('transform', 'scale(200%)');

    } else{
        document.getElementById('far').style.setProperty('transform', 'scale(150%)');
    }

    if(scrollscript > 21.1 && scrollscript < 22.2 ) {
        document.getElementById('infogram-mennesker').style.setProperty('transform', 'scale(120%)');

    } else{
        document.getElementById('infogram-mennesker').style.setProperty('transform', 'scale(100%)');
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