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

    //console.log(scrollPercent);

    //Her gør vi css variablen "--scrollAmount" lig med vores javascript variabel scrollPercent.
    document.getElementById('progress-bar').style.setProperty('--scrollAmount', scrollPercent);

}

//Laver et event der lytter efter 'scroll', og køre funktionen processScroll hvis det sker.
document.addEventListener('scroll', processScroll);