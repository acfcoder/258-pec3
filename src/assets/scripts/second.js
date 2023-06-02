window.onload = function () {
    myScriptSecond();
    console.log('página cargada');
}
window.onresize = function () {
    myScriptSecond();
    console.log('ventana redimensionada');
}

window.onorientationchange = function () {
    myScriptSecond();
    console.log('orientación cambiada');
}

function myScriptSecond() {
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
