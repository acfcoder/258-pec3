window.onload = function () {
    myScriptSecond();
    console.log('página cargada');
}
window.onresize = function () {
    myScriptSecond();
    //console.log('ventana redimensionada');
}

window.onorientationchange = function () {
    myScriptSecond();
    console.log('orientación cambiada');
}

function myScriptSecond() {

    let wWidth = window.innerWidth;
    let wW = 0;
    let tw = 0;


    if (wWidth >= 1900) {
        wW = ((window.innerWidth * 0.5) / 8) * 4;
        tw = ((window.innerWidth * 0.5) / 8);
        console.log('1536 - ' + tw);
    } else if (wWidth >= 1536) {
        wW = ((window.innerWidth * 0.66) / 8) * 4;
        tw = ((window.innerWidth * 0.66) / 8);
        console.log('1536 - ' + tw);
    } else if (wWidth >= 1280) {
        wW = ((window.innerWidth * 0.8) / 8) * 4;
        tw = ((window.innerWidth * 0.8) / 8);
        console.log('1280 - ' + tw);
    } else if (wWidth >= 1024) {
        wW = (window.innerWidth / 6) * 4;
        tw = (window.innerWidth / 6);
        console.log('1024 - ' + tw);
    } else if (wWidth >= 768) {
        wW = (window.innerWidth / 6) * 4;
        tw = (wWidth / 6);
        console.log('768 - ' + tw);
    } else {
        wW = (window.innerWidth / 3) * 4;
        tw = (wWidth / 3);
        console.log('640 - ' + tw);
    }

    if (document.querySelector('.header')) {
        document.querySelector('.header').style.height = wW + 'px';
        console.log('done');
    }

    let tilesItems = document.querySelectorAll('.tile');
    for (let i = 0; i < tilesItems.length; i++) {
        tilesItems[i].style.height = tw + 'px';
        tilesItems[i].style.width = tw + 'px';
    };

    if (document.querySelector('.card')) {
        let cardItems = document.querySelectorAll('.card');
        let cardWith = cardItems[0].offsetWidth;
        for (let i = 1; i < cardItems.length; i++) {
            if (cardItems[i].offsetWidth != cardWith) {

                console.log('imagen distinta: ' + i + ' - ' + cardWith + ' - ' + cardItems[i].offsetWidth);
                cardItems[i].style.maxWidth = cardWith + 'px';
                console.log(cardWith + 'px');
            }

        }
    };
}
