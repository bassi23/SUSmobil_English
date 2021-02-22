let weiter;
let zurück;

let trainingStarten;
let trainieren = false;

let iterations;

let inputMerkmal1;
let inputMerkmal2;

let prediction;

let groesse = [];
let taille = [];
let wahreMasse = [];


let massenkalibrierung;


let weiterDebug;
let zurückDebug;

function button() {
  //CreateButtons
  weiter = createButton('');
  zurück = createButton('');
  nnErstellen = createButton('Neuronales Netz erstellen');
  nnErstellen.hide();
  iterations = createSlider(1, 1000, 1, 1);
  prediction = createButton('Treffe Vorhersage');
  inputMerkmal1 = createInput();
  inputMerkmal2 = createInput();
  // weiterDebug = createButton('nächste Seite (Entwickleroption)');
  // weiterDebug.mousePressed(function() {
  //   folie += 1;
  // });
  // zurückDebug = createButton('vorige Seite (Entwickleroption)');
  // zurückDebug.mousePressed(function() {
  //   folie -= 1;
  // })
  for (let i = 0; i < 3; i++) {
    groesse[i] = createInput();
    taille[i] = createInput();
    wahreMasse[i] = createInput();
  }
  //size
  weiter.size(100, 30);
  zurück.size(60, 30);
  nnErstellen.size(200, 50);
  prediction.size(100, 50);
  inputMerkmal1.size(100, 40);
  inputMerkmal2.size(100, 40);

  for (let i = 0; i < 3; i++) {
    groesse[i].size(100, 30);
    taille[i].size(100, 30);
    wahreMasse[i].size(100, 30);
  }



  prediction.hide();
  inputMerkmal1.hide();
  inputMerkmal2.hide();
  //position
  weiter.position(1130, 700);
  zurück.position(-10, 700);
  nnErstellen.position(515, 125);
  iterations.position(530, 205);
  prediction.position(460, 670);
  inputMerkmal1.position(610, 530);
  inputMerkmal2.position(610, 600);

  for (let i = 0; i < 3; i++) {
    groesse[i].position(355, 315 + 40 * i);
    taille[i].position(555, 315 + 40 * i);
    wahreMasse[i].position(975, 315 + 40 * i);
  }

  iterations.hide();

  //style
  for (let i = 0; i < 3; i++) {
    groesse[i].style("font-size", "26px");
    taille[i].style("font-size", "26px");
    wahreMasse[i].style("font-size", "26px");

    groesse[i].hide();
    taille[i].hide();
    wahreMasse[i].hide();
  }


  inputMerkmal1.style("font-size", "20px");
  inputMerkmal2.style("font-size", "20px");

  weiter.style("background-color", "transparent");
  weiter.style("border-top", "20px solid transparent");
  weiter.style("border-left", "70px solid lightblue");
  weiter.style("border-right", "transparent");
  weiter.style("border-bottom: 20px solid transparent");
  weiter.style("width: 100px");
  weiter.mouseOver(onTopWeiter).mouseOut(outsideWeiter);

  function onTopWeiter() {
    weiter.style("border-left", "70px solid #3399ff");
  }

  function outsideWeiter() {
    weiter.style("border-left", "70px solid #99ccff");
  }

  zurück.style("background-color", "transparent");
  zurück.style("border-top", "20px solid transparent");
  zurück.style("border-right", "70px solid lightblue");
  zurück.style("border-left", "transparent");
  zurück.style("border-bottom: 20px solid transparent");
  zurück.style("width: 100px");
  zurück.mouseOver(onTopZurück).mouseOut(outsideZurück);

  function onTopZurück() {
    zurück.style("border-right", "70px solid #3399ff");
  }

  function outsideZurück() {
    zurück.style("border-right", "70px solid #99ccff");
  }

  weiter.mousePressed(function() {
    folie += 1;
  });

  zurück.mousePressed(function() {
    folie -= 1;
  });

  nnErstellen.mousePressed(function() {
    nnErstellenBool = true;
  });

  trainingStarten = createButton('Training starten');
  trainingStarten.size(120, 50);
  trainingStarten.position(650, 220);
  trainingStarten.hide();

  trainingStarten.mousePressed(function() {
    trainieren = true;
  });


  massenkalibrierung = createElement('textarea');
  massenkalibrierung.size(1000, 150);
  massenkalibrierung.position(100, 550);
  massenkalibrierung.hide();

}