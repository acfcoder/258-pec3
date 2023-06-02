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


    if (wWidth >= 1536) {
        wW = ((window.innerWidth * 0.5) / 8) * 4;
        console.log('1536');
    } else if (wWidth >= 1280) {
        wW = ((window.innerWidth * 0.66) / 8) * 4;
        console.log('1280');
    } else if (wWidth >= 1024) {
        wW = ((window.innerWidth * 0.8) / 8) * 4;
        console.log('1024');
    } else if (wWidth >= 768) {
        wW = (window.innerWidth / 6) * 4;
        console.log('768');
    } else {
        wW = (window.innerWidth / 3) * 4;
        console.log('640');
    }

    document.querySelector('.header').style.height = wW + 'px';
    console.log(wW);
    let tilesItems = document.querySelectorAll('.tile');
    let tilesItemsWidth = tilesItems[0].offsetWidth - 1;
    document.querySelector('#tile').style.height = (tilesItemsWidth - 1) + 'px';
    for (let i = 0; i < tilesItems.length; i++) {
        tilesItems[i].style.height = tilesItemsWidth + 'px';
        //  tilesItems[i].style.width = tilesItemsWidth + 'px';
    };
    //document.querySelector('.footer__contenedor').style.gridTemplateRows = tilesItemsWidth + 'px ' + tilesItemsWidth + 'px ';

    if (document.querySelector('.card')) {
        let cardWith = document.querySelector('.first-card').offsetWidth;
        document.querySelector('.card:last-child').style.width = cardWith + 'px';
        console.log('cargado card');
    };
}
