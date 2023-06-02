/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
// O importar solo los complementos necesarios


window.onload = function () {
  myScript();
}

window.onresize = function () {
  myScript();
}

window.onorientationchange = function () {
  myScript();
}

function myScript() {
  let wWidth = window.innerWidth;
  let wW = 0;

  if (wWidth >= 1900) {
    wW = ((window.innerWidth * 0.5) / 8) * 4;
  } else if (wWidth >= 1400) {
    wW = ((window.innerWidth * 0.7) / 8) * 4;
  } else if (wWidth >= 1200) {
    wW = ((window.innerWidth * 0.8) / 8) * 4;
  } else if (wWidth >= 768) {
    wW = (window.innerWidth / 6) * 4;
  } else {
    wW = (window.innerWidth / 3) * 4;
  }

  document.querySelector('.header').style.height = wW + 'px';
  let headerTile = document.querySelector("#tile").offsetHeight;
  let headerHeight = document.querySelector('.header').offsetHeight;

  //  document.querySelector('.main__contenedor').style.gridTemplateRows = headerTile + 'px ' + headerTile + 'px ' + headerTile + 'px';
  //let contentHeight = document.querySelector('.content').offsetHeight;
  // document.querySelector('.main').style.height = contentHeight + 'px';
  //document.querySelector('.footer__contenedor').style.gridTemplateRows = headerTile + 'px ' + headerTile + 'px ';
}