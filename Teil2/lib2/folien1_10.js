function Folie1() {
  textStyle(BOLD);
  textSize(20);
  text("Wie gelingt eine Zuordnung von Konzentration und Merkmalsausprägungen?", 250, 50);
  textStyle(NORMAL);
  text("Ihr habt euch für die Merkmale " + string1 + " und " + string2 + " entschieden. In den beiden Diagrammen sind die Ausprägungen der beiden\nMerkmale in Abhängigkeit der Konzentrationen dargestellt.", 20, 100);


  fill(255);
  stroke(0);
  translate(0, -40);
  rect(100, 190, 450, 310);
  rect(700, 190, 450, 310);
  translate(0, -50);
  line(100, 250, 100, 555);
  line(95, 245, 100, 240);
  line(100, 240, 105, 245);
  line(95, 550, 550, 550);
  line(545, 545, 550, 550);
  line(550, 550, 545, 555);

  line(700, 250, 700, 555);
  line(695, 245, 700, 240);
  line(700, 240, 705, 245);
  line(695, 550, 1150, 550);
  line(1145, 545, 1150, 550);
  line(1150, 550, 1145, 555);
  fill(0);
  noStroke();
  text("0 ppm", 110, 570);
  text("10 ppm", 190, 570);
  text("20 ppm", 280, 570);
  text("30 ppm", 370, 570);
  text("40 ppm", 460, 570);
  text("Ethanol-Konzentration", 220, 610);

  text("0 ppm", 710, 570);
  text("10 ppm", 790, 570);
  text("20 ppm", 880, 570);
  text("30 ppm", 970, 570);
  text("40 ppm", 1060, 570);
  text("Ethanol-Konzentration", 820, 610);
  //Messwerte werden eingezeichnet:
  noStroke();
  fill(50, 150);
  for (let i = 0; i < training_data.length; i++) {
    ellipse((training_data[i].outputs[0]) * 350 + 140, 550 - 300 * (training_data[i].inputs[0]), 10, 10);
    ellipse((training_data[i].outputs[0]) * 350 + 740, 550 - (training_data[i].inputs[1]) * 300, 10, 10);
  }
  fill(0);

  stroke(200);
  for (let i = 0; i < 4; i++) {
    line(175 + 90 * i, 240, 175 + 90 * i, 550);
    line(775 + 90 * i, 240, 775 + 90 * i, 550);
  }
  text(round(featureMaximum1 / 1000), 20, 260);
  text(round(featureMaximum2 / 1000), 620, 260);
  text(round(featureMinimum1 / 1000), 20, 550);
  text(round(featureMinimum2 / 1000), 620, 550);
  push();
  translate(width / 2, height / 2);
  rotate(-PI / 2);
  text(string1 + " [kΩ]", -70, -620);
  text(string2 + " [kΩ]", -70, -20);
  pop();
  translate(0, 90);
  noStroke();
}

function Folie2() {

  Folie1();
  text("Alle zehn Datenpunkte sind sogenannte                            . Wir nutzen sie, um ein mathematisches Modell, dass die Merkmals-\nausprägungen mit den Konzentrationen in Beziehung setzt, sozusagen zu trainieren. Je besser die von euch ausgewählten bzw.\nbestimmten Trainingsdaten, desto besser wird eure Kalibrierung sein.", 20, 580);
  textStyle(BOLD);
  text("Trainingsdaten", 380, 580);

}

function Folie3() {
  Folie2();
  fill(200, 200, 255);
  stroke(0);
  rect(120, 680, 960, 50);
  noStroke();
  fill(0);
  text("Die Frage lautet aber nun:", 500, 665);
  text("Wie gelingt eigentlich eine Zuordnung der Konzentrationen und der Merkmalsausprägungen?", 150, 710);
}


function Folie4() {
  textStyle(BOLD);
  textSize(20);
  text("Wie gelingt eine Zuordnung von Konzentrationen und Merkmalsausprägungen?", 250, 50);
  textStyle(NORMAL);
  text("Leicht einzusehen ist folgende Methode, die bei Kalibrierungen auch oft Verwendung findet:", 20, 100);

  fill(200, 200, 255);
  stroke(0);
  rect(125, 150, 950, 50);
  noStroke();
  fill(0);
  text('Suche eine "                         ", die sich optimal an die Trainingsdaten anschmiegt (auch: "             ").', 160, 180);
  textStyle(BOLD);
  text("Kalibrierkurve", 276, 180);
  text("Best Fit", 945, 180);
}

function Folie5() {
  textStyle(BOLD);
  textSize(20);
  text("Wie gelingt eine Zuordnung von Konzentrationen und Merkmalsausprägungen?", 250, 50);
  textStyle(NORMAL);
  text("Leicht einzusehen ist folgende Methode, die bei Kalibrierungen auch oft Verwendung findet:", 20, 100);
  text('In den Bildern unten ist das für zwei fiktive Zusammenhänge angedeutet. Beachte, dass "optimal anschmiegen" nicht heißt, dass\ndie Trainingsdaten exakt auf der Kurve liegen müssen. Es ist eine Näherungslösung.', 20, 250);

  fill(200, 200, 255);
  stroke(0);
  rect(125, 150, 950, 50);
  noStroke();
  fill(0);
  text('Suche eine "                         ", die sich optimal an die Trainingsdaten anschmiegt (auch: "             ").', 160, 180);
  textStyle(BOLD);
  text("Kalibrierkurve", 276, 180);
  text("Best Fit", 945, 180);


  textStyle(NORMAL);
  textSize(16);
  translate(0, -50);
  text("Trainingsdaten", 400, 400);
  text('"Kalibrierkurve"', 400, 420);


  text("Trainingsdaten", 710, 400);
  text('"Kalibrierkurve"', 710, 420);



  text("Konzentration", 290, 620);
  text("Konzentration", 790, 620);

  push();
  translate(width / 2, height / 2)
  rotate(3 * PI / 2);
  text("Ausprägung Merkmal 1", -215, -570);
  text("Ausprägung Merkmal 2", -215, -70);
  pop();

  stroke(0);
  line(150, 400, 150, 605);
  line(145, 600, 500, 600);

  line(650, 400, 650, 605);
  line(645, 600, 1000, 600);


  line(145, 405, 150, 400);
  line(150, 400, 155, 405);

  line(495, 595, 500, 600);
  line(500, 600, 495, 605);


  line(645, 405, 650, 400);
  line(650, 400, 655, 405);


  line(995, 595, 1000, 600);
  line(1000, 600, 995, 605);

  strokeWeight(5);
  for (let i = 0; i < 20; i++) {
    let x = 150 + 350 * i / 20;
    let y = 540 - 75 * (i - 20) * (i - 20) / 250;
    point(x, y);

    let x2 = 650 + 350 * i / 20;
    let y2 = 550 - 75 * (i) * (i) / 200;
    point(x2, y2);
  }

  point(375, 415);
  point(690, 415);


  fill(0, 0, 255);
  strokeWeight(1);
  ellipse(150, 410, 10, 10);
  ellipse(225, 470, 10, 10);
  ellipse(300, 490, 10, 10);
  ellipse(375, 530, 10, 10);
  ellipse(450, 535, 10, 10);

  ellipse(375, 395, 10, 10);



  fill(255, 0, 0);
  ellipse(650, 560, 10, 10);
  ellipse(725, 530, 10, 10);
  ellipse(800, 535, 10, 10);
  ellipse(875, 480, 10, 10);
  ellipse(950, 440, 10, 10);

  ellipse(690, 395, 10, 10);
  translate(0, 50);
}




function Folie6() {
  textStyle(BOLD);
  textSize(20);
  text("Wie gelingt eine Zuordnung von Konzentrationen und Merkmalsausprägungen?", 250, 50);
  textStyle(NORMAL);
  text("Leicht einzusehen ist folgende Methode, die bei Kalibrierungen auch oft Verwendung findet:", 20, 100);
  text('In den Bildern unten ist das für zwei fiktive Zusammenhänge angedeutet. Beachte, dass "optimal anschmiegen" nicht heißt, dass\ndie Trainingsdaten exakt auf der Kurve liegen müssen. Es ist eine Näherungslösung.', 20, 250);


  text('Für eine unbekannte Konzentration könnten wir nun die Ausprägungen der Merkmale bestimmen und diese anhand der\nKalibrierkurven einer Konzentration zuordnen (der "x-Wert" von     ).', 20, 650);
  fill(200, 200, 255);
  stroke(0);
  rect(125, 150, 950, 50);
  noStroke();
  fill(0);
  text('Suche eine "                         ", die sich optimal an die Trainingsdaten anschmiegt (auch: "             ").', 160, 180);
  textStyle(BOLD);
  text("Kalibrierkurve", 276, 180);
  text("Best Fit", 945, 180);


  textStyle(NORMAL);
  textSize(16);
  translate(0, -50);
  text("Trainingsdaten", 400, 400);
  text('"Kalibrierkurve"', 400, 420);


  text("Trainingsdaten", 710, 400);
  text('"Kalibrierkurve"', 710, 420);
  text("Konzentration", 290, 620);
  text("Konzentration", 790, 620);

  push();
  translate(width / 2, height / 2)
  rotate(3 * PI / 2);
  text("Ausprägung Merkmal 1", -215, -570);
  text("Ausprägung Merkmal 2", -215, -70);
  pop();
  stroke(0);
  line(150, 400, 150, 605);
  line(145, 600, 500, 600);

  line(650, 400, 650, 605);
  line(645, 600, 1000, 600);


  line(145, 405, 150, 400);
  line(150, 400, 155, 405);

  line(495, 595, 500, 600);
  line(500, 600, 495, 605);


  line(645, 405, 650, 400);
  line(650, 400, 655, 405);


  line(995, 595, 1000, 600);
  line(1000, 600, 995, 605);

  strokeWeight(5);
  for (let i = 0; i < 20; i++) {
    let x = 150 + 350 * i / 20;
    let y = 540 - 75 * (i - 20) * (i - 20) / 250;
    point(x, y);

    let x2 = 650 + 350 * i / 20;
    let y2 = 550 - 75 * (i) * (i) / 200;
    point(x2, y2);
  }

  point(375, 415);
  point(690, 415);


  fill(0, 0, 255);
  strokeWeight(1);
  ellipse(150, 410, 10, 10);
  ellipse(225, 470, 10, 10);
  ellipse(300, 490, 10, 10);
  ellipse(375, 530, 10, 10);
  ellipse(450, 535, 10, 10);

  ellipse(375, 395, 10, 10);



  fill(255, 0, 0);
  ellipse(650, 560, 10, 10);
  ellipse(725, 530, 10, 10);
  ellipse(800, 535, 10, 10);
  ellipse(875, 480, 10, 10);
  ellipse(950, 440, 10, 10);

  ellipse(690, 395, 10, 10);


  stroke(0);
  line(150, 535, 420, 535);
  line(420, 535, 420, 600);


  line(650, 473, 900, 473);
  line(900, 473, 900, 600);


  fill(0, 200, 0);
  ellipse(420, 535, 20, 20);
  ellipse(900, 473, 20, 20);
  ellipse(592, 720, 15, 15);

  translate(0, 50);
}

function Folie7() {
  textStyle(BOLD);
  textSize(20);
  text("Wie gelingt eine Zuordnung von Konzentrationen und Merkmalsausprägungen?", 250, 50);
  text("linear", 907, 475);
  text("exponentieller", 390, 500);
  text("quadratischer", 670, 500);
  textStyle(NORMAL);
  text("Die Anwendung der „Best-Fit-Methode“ ist jedoch an eine Voraussetzung geknüpft: Wir müssen zumindest im Prinzip wissen, wel-\ncher funktionale Zusammenhang zwischen den Größen besteht.", 20, 400);
  text("Zum Beispiel ist beim Flüssigkeitsthermometer der Zusammenhang von Temperatur und Steighöhe             (linke Darstellung). Bei\nden anderen Kurven liegt in der Mitte ein                            und rechts ein                          Zusammenhang zu Grunde.", 20, 475);




  translate(190, -270);
  text("Konzentration", 350, 620);
  text("Konzentration", 775, 620);
  textSize(16);
  text("Trainingsdaten", -80, 400);
  text('"Kalibrierkurve"', -80, 420);

  text("Trainingsdaten", 400, 400);
  text('"Kalibrierkurve"', 400, 420);


  text("Trainingsdaten", 710, 400);
  text('"Kalibrierkurve"', 710, 420);

  push();
  translate(width / 2, height / 2)
  rotate(3 * PI / 2);
  textSize(16);
  text("Ausprägung Merkmal 1", -215, -480);
  text("Ausprägung Merkmal 2", -215, -70);
  text("Steighöhe", -165, -870);
  pop();

  stroke(0);
  translate(90, 0);
  line(150, 400, 150, 605);
  line(145, 600, 500, 600);
  translate(-90, 0);
  line(650, 400, 650, 605);
  line(645, 600, 1000, 600);

  translate(90, 0);
  line(145, 405, 150, 400);
  line(150, 400, 155, 405);
  translate(-90, 0);

  translate(90, 0);
  line(495, 595, 500, 600);
  line(500, 600, 495, 605);
  translate(-90, 0);

  line(645, 405, 650, 400);
  line(650, 400, 655, 405);


  line(995, 595, 1000, 600);
  line(1000, 600, 995, 605);

  strokeWeight(5);
  for (let i = 0; i < 20; i++) {
    translate(90, 0);
    let x = 150 + 350 * i / 20;
    let y = 540 - 75 * (i - 20) * (i - 20) / 250;
    point(x, y);
    translate(-90, 0);
    let x2 = 650 + 350 * i / 20;
    let y2 = 550 - 75 * (i) * (i) / 200;
    point(x2, y2);
  }

  point(375, 415);
  point(690, 415);
  point(-100, 415);



  fill(0, 0, 255);
  strokeWeight(1);
  translate(90, 0);
  ellipse(150, 410, 10, 10);
  ellipse(225, 470, 10, 10);
  ellipse(300, 490, 10, 10);
  ellipse(375, 530, 10, 10);
  ellipse(450, 535, 10, 10);
  ellipse(285, 395, 10, 10);
  translate(-90, 0);


  fill(255, 0, 0);
  ellipse(650, 560, 10, 10);
  ellipse(725, 530, 10, 10);
  ellipse(800, 535, 10, 10);
  ellipse(875, 480, 10, 10);
  ellipse(950, 440, 10, 10);
  ellipse(690, 395, 10, 10);
  translate(-190, 270);



  line(30, 130, 30, 335);
  line(25, 330, 375, 330);
  line(25, 135, 30, 130);
  line(30, 130, 35, 135);
  line(370, 325, 375, 330);
  line(375, 330, 370, 335);
  fill(0, 255, 0);
  stroke(0);
  strokeWeight(5);
  for (let i = 0; i < 20; i++) {

    let x = 30 + 350 * i / 20;
    let y = 140 - 8.5 * (i - 20);
    point(x, y);
  }

  stroke(0);
  strokeWeight(1);
  ellipse(30, 300, 10, 10);
  ellipse(105, 274, 10, 10);
  ellipse(180, 241, 10, 10);
  ellipse(255, 203, 10, 10);
  ellipse(330, 160, 10, 10);

  ellipse(90, 125, 10, 10);

  noStroke();
  fill(0);
  textSize(20);
  text("Temperatur", 140, 350);
}

function Folie8() {
  Folie7();
  text("Merkmalsausprägungen und Konzentrationen können aber sehr unterschiedlich zusammenhängen und Modellgleichungen können\nim Allgemeinen nicht so einfach angegeben werden. ", 20, 550);
  text("Für die Kalibrierung wählen wir daher eine andere mathematische Methode.", 300, 650);
}


function Folie9() {
  textStyle(BOLD);
  textSize(20);
  text("Wie gelingt eine Zuordnung von Konzentrationen und Merkmalsausprägungen?", 250, 50);


  text("Köpergröße (K)", 672, 170);
  text("Taillenumfang (T)", 860, 170);
  text("Masse (M)", 1097, 170);

  textStyle(NORMAL);
  text("Um sich diese mathematische Methode klar zu machen, verlassen wir kurz den konkreten Anwendungsfall des Gassensors und\nbetrachten stattdessen ein anschauliches Beispiel:", 20, 100);
  text("Stellt euch vor, ein Wissenschaftler möchte anhand der beiden Merkmale                            und                               auf die\neines erwachsenen Menschens schließen.", 20, 170);
}

function Folie10() {
  Folie9();
  textStyle(BOLD);
  translate(0, -30);
  text("Zielgröße", 560, 570);

  textStyle(NORMAL);
  text("Die Masse als Zielgröße entspricht der Konzentration.", 370, 670);

  fill(255, 100, 100);
  stroke(0);
  rect(200, 510, 200, 100);
  rect(800, 510, 200, 100);

  fill(0);
  textSize(30);
  noStroke();
  text("Masse", 250, 570);
  text("Konzentration", 810, 570);
  translate(0, 30);
}

function Folie11() {
  Folie9();
  translate(0, -30);
  textStyle(BOLD);
  text("Merkmale", 560, 420);
  text("Zielgröße", 560, 570);

  stroke(0);
  line(600, 440, 600, 540);
  line(595, 535, 600, 540);
  line(600, 540, 605, 535);
  noStroke();

  textStyle(NORMAL);
  text("Die Körpergröße und die Taille sind wie die Merkmale\n         der Widerstands-Zeit-Kurven anzusehen", 370, 300);
  text("Die Masse als Zielgröße entpsricht der Konzentration.", 370, 670);
  fill(200, 200, 255);

  stroke(0);
  rect(190, 390, 125, 50);
  rect(340, 390, 60, 50);
  line(252, 440, 300, 510);
  line(370, 440, 300, 510);
  rect(790, 390, 100, 50);
  rect(905, 390, 105, 50);
  line(840, 440, 900, 510);
  line(957, 440, 900, 510);
  fill(0);
  noStroke();
  text("Köpergröße", 200, 420);
  text("Taille", 350, 420);
  text(string1, 800, 420);
  text(string2, 920, 420);
  stroke(0);
  fill(255, 100, 100);
  rect(200, 510, 200, 100);
  rect(800, 510, 200, 100);
  noStroke();
  fill(0);
  textSize(30);
  text("Masse", 250, 570);
  text("Konzentration", 810, 570);
  translate(0, 30);
}

function Folie12() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  text("Seht ihr ein, dass die Vorhersage der Masse aus nur einem der beiden Merkmale Körpergröße oder Taille Probleme mit sich bringt?\nSo gibt es dicke kleine oder schlanke große Menschen.", 20, 100);

}

function Folie13() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  text("Seht ihr ein, dass die Vorhersage der Masse aus nur einem der beiden Merkmale Körpergröße oder Taille Probleme mit sich bringt?\nSo gibt es dicke kleine oder schlanke große Menschen.", 20, 100);


  text('Beide „Typen“ werden wahrscheinlich ähnlich viel wiegen.\nWählte man aber nur die Taille als Merkmal, so würde in\neiner solchen Vorhersage der große Mensch, weil er ja\ndünner ist, weniger wiegen als der kleine.', 600, 270);
  text("untersetzt", 100, 550);
  text("schmächtig", 350, 550);
  fill(255);
  stroke(0);
  ellipse(150, 300, 50, 50);
  ellipse(400, 250, 50, 50);


  fill(200);
  ellipse(150, 375, 120, 100);
  ellipse(400, 350, 70, 150);

  strokeWeight(4);
  line(120, 360, 60, 350);
  line(180, 360, 240, 350);
  line(120, 420, 100, 480);
  line(180, 420, 200, 480);



  line(380, 320, 330, 350);
  line(420, 320, 470, 350);
  line(385, 420, 360, 480);
  line(415, 420, 440, 480);
}

function Folie14() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  text("Seht ihr ein, dass die Vorhersage der Masse aus nur einem der beiden Merkmale Körpergröße oder Taille Probleme mit sich bringt?\nSo gibt es dicke kleine oder schlanke große Menschen.", 20, 100);


  text('Beide „Typen“ werden wahrscheinlich ähnlich viel wiegen.\nWählte man aber nur die Taille als Merkmal, so würde in\neiner solchen Vorhersage der große Mensch, weil er ja\ndünner ist, weniger wiegen als der kleine.', 600, 270);
  text("Das gilt auch für den Gassensor: Wenn wir zwei Merkmale\ndes Widerstands-Zeit-Verlaufes betrachten, so können wir die\nKalibrierung verbessern.", 600, 400);

  text("untersetzt", 100, 550);
  text("schmächtig", 350, 550);
  fill(255);
  stroke(0);
  ellipse(150, 300, 50, 50);
  ellipse(400, 250, 50, 50);


  fill(200);
  ellipse(150, 375, 120, 100);
  ellipse(400, 350, 70, 150);

  strokeWeight(4);
  line(120, 360, 60, 350);
  line(180, 360, 240, 350);
  line(120, 420, 100, 480);
  line(180, 420, 200, 480);



  line(380, 320, 330, 350);
  line(420, 320, 470, 350);
  line(385, 420, 360, 480);
  line(415, 420, 440, 480);
}

function Folie15() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  text("Für die Vorhersage sucht der Wissenschaftler insgesamt 100 Menschen, von denen je 20 genau 60 kg, 70 kg, 80 kg, 90 kg und\n100 kg wiegen und bestimmt zudem deren Körpergröße und deren Taillenumfang. Die Mittelwerte einer jeden „Gewichtsklasse“\nträgt der Wissenschaftler in einer Tabelle zusammen.", 20, 100);

  text("Masse [kg]                  Körpergröße [cm]                     Taille [cm]", 300, 250);
  text("60", 330, 300);
  text("70", 330, 340);
  text("80", 330, 380);
  text("90", 330, 420);
  text("100", 320, 460);

  text("159", 570, 300);
  text("168", 570, 340);
  text("178", 570, 380);
  text("184", 570, 420);
  text("187", 570, 460);


  text("66", 800, 300);
  text("70", 800, 340);
  text("77", 800, 380);
  text("87", 800, 420);
  text("104", 795, 460);


  stroke(0);
  line(280, 270, 900, 270);
  line(450, 220, 450, 470);
  line(730, 220, 730, 470);
}

function Folie16() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  text("Für die Vorhersage sucht der Wissenschaftler insgesamt 100 Menschen, von denen je 20 genau 60 kg, 70 kg, 80 kg, 90 kg und\n100 kg wiegen und bestimmt zudem deren Körpergröße und deren Taillenumfang. Die Mittelwerte einer jeden „Gewichtsklasse“\nträgt der Wissenschaftler in einer Tabelle zusammen.", 20, 100);
  translate(0, -40);
  text("Grafisch dargestellt sieht das dann so aus", 400, 540);

  text("Masse [kg]                  Körpergröße [cm]                     Taille [cm]", 300, 250);
  text("60", 330, 300);
  text("70", 330, 340);
  text("80", 330, 380);
  text("90", 330, 420);
  text("100", 320, 460);

  text("159", 570, 300);
  text("168", 570, 340);
  text("178", 570, 380);
  text("184", 570, 420);
  text("187", 570, 460);


  text("66", 800, 300);
  text("70", 800, 340);
  text("77", 800, 380);
  text("87", 800, 420);
  text("104", 795, 460);


  stroke(0);

  fill(255);
  line(280, 270, 900, 270);
  line(450, 220, 450, 470);
  line(730, 220, 730, 470);

  translate(0, 30);
  rect(200, 550, 300, 150);
  line(200, 550, 200, 705);
  line(195, 700, 500, 700);


  line(195, 555, 200, 550);
  line(200, 550, 205, 555);
  line(495, 695, 500, 700);
  line(500, 700, 495, 705);


  rect(750, 550, 300, 150);
  line(750, 550, 750, 705);
  line(745, 700, 1050, 700);


  line(745, 555, 750, 550);
  line(750, 550, 755, 555);
  line(1045, 695, 1050, 700);
  line(1050, 700, 1045, 705);

  stroke(200);
  for (let i = 0; i < 7; i++) {
    line(237.5 + 37.5 * i, 550, 237.5 + 37.5 * i, 700);
    line(787.5 + 37.5 * i, 550, 787.5 + 37.5 * i, 700);
  }

  for (let i = 0; i < 6; i++) {
    line(200, 571.4 + 21.43 * i, 500, 571.4 + 21.43 * i);
    line(750, 571.4 + 21.43 * i, 1050, 571.4 + 21.43 * i);
  }
  fill(0);
  noStroke();
  textSize(14);

  for (let i = 0; i < 9; i++) {
    text(40 + 10 * i, 190 + 37.5 * i, 720);
    text(40 + 10 * i, 740 + 37.5 * i, 720);
  }

  for (let i = 0; i < 8; i++) {
    text(210 - 10 * i, 170, 555 + 21.43 * i);
    text(110 - 10 * i, 720, 555 + 21.43 * i);
  }
  textSize(18);

  noStroke();
  fill(0);
  text("Masse [kg]", 320, 740);
  text("Masse [kg]", 870, 740);
  translate(0, -30);


  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  text("Größe [cm]", -330, -540);
  text("Taille [cm]", -330, 10);

  pop();


  fill(0, 0, 255);
  stroke(0);
  ellipse(275, 690, 10, 10);
  ellipse(312.5, 669, 10, 10);
  ellipse(350, 650, 10, 10);
  ellipse(387.5, 639, 10, 10);
  ellipse(425, 631, 10, 10);


  fill(255, 0, 0);
  ellipse(825, 675, 10, 10);
  ellipse(862.5, 665, 10, 10);
  ellipse(900, 650, 10, 10);
  ellipse(937.5, 625, 10, 10);
  ellipse(975, 595, 10, 10);
  translate(0, 40);
}

function Folie17() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  text("Anstatt der Bestimmung zweier Kalibrierkurven nutzt der Wissenschaftler folgenden Ansatz mit der Modellgleichung…", 20, 100);

  textSize(50);
  textStyle(ITALIC);
  text("M = g ⋅ G + g ⋅ T", 450, 200);
  textSize(30);
  text("1", 575, 220);
  text("2", 740, 220);
}

function Folie18() {
  Folie17();
  textSize(20);
  textStyle(NORMAL);
  text("Die Masse M wird hier als                                   von Körpergröße G und Taille T bestimmt. Ein Kinderspiel, vorausgesetzt wir kennen\ndie Faktoren g  und g   (auch Gewichte genannt). Diese sind zunächst jedoch unbekannt und müssen anhand der „Trainingsdaten“ in\neinem Gleichungssystem bestimmt werden.", 20, 300);
  textStyle(BOLD);
  text("gewichtete Summe", 258, 300);
  textStyle(NORMAL);
  textSize(16);
  text("1", 147, 330);
  text("2", 210, 330);
}

function Folie19() {
  Folie18();
  textSize(20);
  translate(-250, 170);
  text("Masse [kg]                  Körpergröße [cm]                     Taille [cm]", 300, 250);
  text("60", 330, 300);
  text("70", 330, 340);
  text("80", 330, 380);
  text("90", 330, 420);
  text("100", 320, 460);

  text("159", 570, 300);
  text("168", 570, 340);
  text("178", 570, 380);
  text("184", 570, 420);
  text("187", 570, 460);


  text("66", 800, 300);
  text("70", 800, 340);
  text("77", 800, 380);
  text("87", 800, 420);
  text("104", 795, 460);


  stroke(0);

  fill(255);
  line(280, 270, 900, 270);
  line(450, 220, 450, 470);
  line(730, 220, 730, 470);
  translate(250, -170);

  fill(0);
  noStroke();
  text("Daten in Modell-\n\ngleichung setzen", 670, 500);
  stroke(0);
  line(620, 520, 850, 520);
  line(845, 515, 850, 520);
  line(850, 520, 845, 525);

  noStroke();
  text("Löse das Gleichungssystem", 900, 420);
  textStyle(BOLD);
  text("60 = g  ⋅ 159 + g  ⋅ 66", 920, 470);
  text("70 = g  ⋅ 168 + g  ⋅ 70", 920, 510);
  text("80 = g  ⋅ 178 + g  ⋅ 77", 920, 550);
  text("90 = g  ⋅ 184 + g  ⋅ 87", 920, 590);
  text("100 = g  ⋅ 187 + g  ⋅ 104", 910, 630);

  textSize(16);
  for (let i = 0; i < 5; i++) {
    text("1", 979, 480 + 40 * i);
    text("2", 1069, 480 + 40 * i);
  }
}

function Folie20() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);

  text("Ein Kinderspiel! Oder etwa doch nicht?", 450, 450);
  text("Schaut euch hierzu die Diskussion dreier Schüler während einer Gruppenarbeit an.", 230, 500);
}

function linksRedet() {
  stroke(255, 0, 0);
  fill(255);
  strokeWeight(4);
  ellipse(250, 520, 250, 150);
  beginShape();
  vertex(200, 587);
  vertex(145, 670);
  vertex(240, 593);
  endShape();
  strokeWeight(1);
  noStroke();
  fill(0);
}

function linksDenkt() {
  stroke(255, 0, 0);
  strokeWeight(4);
  fill(255);
  ellipse(150, 650, 10, 10);
  ellipse(170, 620, 20, 20);
  ellipse(250, 520, 250, 150);
  strokeWeight(1);
  noStroke();
  fill(0);
}

function mitteRedet() {
  stroke(0);
  fill(255);
  strokeWeight(4);
  ellipse(600, 500, 350, 200);
  beginShape();
  vertex(585, 597);
  vertex(600, 700);
  vertex(615, 597);
  endShape();
  strokeWeight(1);
  noStroke();
  fill(0);
}

function mitteDenkt() {
  stroke(0);
  strokeWeight(4);
  fill(255);
  ellipse(600, 650, 10, 10);
  ellipse(600, 620, 20, 20);
  ellipse(600, 520, 250, 150);
  strokeWeight(1);
  noStroke();
  fill(0);
}

function rechtsRedet() {
  stroke(0, 0, 255);
  fill(255);
  strokeWeight(4);
  ellipse(950, 520, 250, 150);
  beginShape();
  vertex(1000, 587);
  vertex(1025, 670);
  vertex(960, 593);
  endShape();
  strokeWeight(1);
  noStroke();
  fill(0);
}

function rechtsDenkt() {
  stroke(0, 0, 255);
  strokeWeight(4);
  fill(255);
  ellipse(1050, 650, 10, 10);
  ellipse(1030, 620, 20, 20);
  ellipse(950, 520, 250, 150);
  strokeWeight(1);
  noStroke();
  fill(0);
}

function Folie21() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);

  linksDenkt();
  rechtsDenkt();


  noStroke();
  fill(0);
  text('...*rechnet*...', 187, 525);
  text('...*rechnet*...', 895, 525);
}

function Folie22() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);

  linksDenkt();
  mitteDenkt();
  rechtsDenkt();


  noStroke();
  fill(0);
  text('...*rechnet*...', 187, 525);
  text('...*rechnet*...', 895, 525);
  text('Warum rechnen die beiden\n                 denn?', 480, 515);
}

function Folie23() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);


  linksRedet();
  fill(0);
  text("g  = 1 und g  = -1.5\n  löst schon mal\n     Gleichung I", 165, 500);
  textSize(16);
  text("1", 176, 510);
  text("2", 271, 510);


}

function Folie24() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);


  linksRedet();
  rechtsRedet();
  fill(0);
  text("g  = 1 und g  = -1.5\n  löst schon mal\n     Gleichung I", 165, 500);
  text("     Hä? Ich hab' da ne\nganz andere Lösung für\n    Gleichung I, nämlich\n   g  = 0 und g  = 10/11.", 840, 480);
  textSize(16);
  text("1", 176, 510);
  text("2", 271, 510);


  text("1", 869, 565);
  text("2", 963, 565);

}

function Folie25() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);


  linksRedet();
  rechtsRedet();
  mitteRedet();
  fill(0);
  text("g  = 1 und g  = -1.5\n  löst schon mal\n     Gleichung I", 165, 500);
  text("     Hä? Ich hab' da ne\nganz andere Lösung für\n    Gleichung I, nämlich\n   g  = 0 und g  = 10/11.", 840, 480);
  text("           Ihr habt beide recht. Setzt\n  aber mal eure Lösungen in Gleichung\n         II ein. Das passt beides nicht!", 420, 470);
  textSize(16);
  text("1", 176, 510);
  text("2", 271, 510);


  text("1", 869, 565);
  text("2", 963, 565);
}

function Folie26() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);
  text("Eine kurze Pause, dann...", 500, 500);
}

function Folie27() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);

  linksRedet();
  text("            Stimmt.\n168 ⋅ 1 - 70 ⋅ 1,5 ergibt\n      63 und nicht 70.", 150, 500);
}

function Folie28() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);

  linksRedet();
  rechtsRedet();
  text("            Stimmt.\n168 ⋅ 1 - 70 ⋅ 1,5 ergibt\n      63 und nicht 70.", 150, 500);
  text("Und meins passt auch\nnicht. Aber warte - ich\n          hab's...", 850, 500);
}

function Folie29() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);

  linksRedet();
  rechtsRedet();
  mitteRedet();
  text("            Stimmt.\n168 ⋅ 1 - 70 ⋅ 1,5 ergibt\n      63 und nicht 70.", 150, 500);
  text("Und meins passt auch\nnicht. Aber warte - ich\n          hab's...", 850, 500);
  text("... na da bin ich ja mal gespannt!!", 455, 500);
}

function Folie30() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);

  linksRedet();
  rechtsRedet();
  mitteRedet();
  text("Na, was hast\n   du raus?", 194, 510);
  text("Und meins passt auch\nnicht. Aber warte - ich\n          hab's...", 850, 500);
  text("... na da bin ich ja mal gespannt!!", 455, 500);
}

function Folie31() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);

  linksRedet();
  rechtsRedet();
  mitteRedet();
  text("Na, was hast\n   du raus?", 194, 510);
  text("   Also mit g  = -10 und\ng  = 25 geht's bei beiden\n      Gleichungen auf.", 845, 500);
  text("... na da bin ich ja mal gespannt!!", 455, 500);

  textSize(16);
  text("1", 950, 510);
  text("2", 858, 535);
}

function Folie32() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);


  text("In Gedanken...", 530, 420);

  linksDenkt();
  mitteDenkt();
  rechtsDenkt();

  text("(probt mit Taschen-\n       rechner)\n    Na mal sehen...", 155, 500);
  text("BIN ICH GUT!!", 885, 525);
  textStyle(BOLD);
  text("Die raffen's nicht...", 510, 525);
}

function Folie33() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);
  rechtsRedet();
  text("Und - hab ich recht?", 855, 525);
}

function Folie34() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);
  rechtsRedet();
  linksRedet();
  text("Und - hab ich recht?", 855, 525);
  text("       Ja, klappt!\nTaschenrechnertest\n       bestanden", 160, 500);
}

function Folie35() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);
  rechtsRedet();
  linksRedet();
  mitteRedet();
  text("Und - hab ich recht?", 855, 525);
  text("       Ja, klappt!\nTaschenrechnertest\n       bestanden", 160, 500);
  text("                  (genervt)\nJa und wie sieht es mit den drei\n    übrigen Gleichungen aus?", 460, 470);
}

function Folie36() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);

  linksRedet();


  text("Achso! Das soll für\n        Gleichungen\n    richtig sein?!", 160, 500);
  textStyle(BOLD);
  text("alle", 167, 525);

}

function Folie37() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);

  linksRedet();
  rechtsRedet();


  text("Achso! Das soll für\n        Gleichungen\n    richtig sein?!", 160, 500);
  text("    Ok. Das ist heraus-\nfordernd. Aber wartet, ich\n         hab's gleich.", 840, 500);
  textStyle(BOLD);
  text("alle", 167, 525);
}

function Folie38() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);

  linksRedet();
  rechtsRedet();
  mitteRedet();


  text("Achso! Das soll für\n        Gleichungen\n    richtig sein?!", 160, 500);
  text("    Ok. Das ist heraus-\nfordernd. Aber wartet, ich\n         hab's gleich.", 840, 500);
  text("(Hält die Hände vor den Kopf),\n\n       Na dann, viel Spass!", 470, 480),
    textStyle(BOLD);
  text("alle", 167, 525);
}

function Folie39() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);


  text("Nach längerem Rechnen...", 490, 420);
}

function Folie40() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);


  linksRedet();
  text("Ich krieg immer einen\n Widerspruch raus...", 160, 510);
}

function Folie41() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);


  linksRedet();
  rechtsRedet();
  text("Ich krieg immer einen\n Widerspruch raus...", 160, 510);
  text("Häh?? Das geht gar nicht.", 839, 525);
}

function Folie42() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);


  linksRedet();
  rechtsRedet();
  mitteRedet();
  text("Ich krieg immer einen\n Widerspruch raus...", 160, 510);
  text("Häh?? Das geht gar nicht.", 839, 525);
  text("Das kann doch auch gar nicht\ngehen.", 470, 480);
  textStyle(BOLD);
  text("       Das Gleichungssystem\nist doch überbestimmt!", 500, 505);
}

function Folie43() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);


  rechtsRedet();
  mitteRedet();

  text("         (erschrocken)\nAch ja! Mehr Gleichungen\n       als Unbekannte.", 839, 495);
  text("Das kann doch auch gar nicht\ngehen.", 470, 480);
  textStyle(BOLD);
  text("       Das Gleichungssystem\nist doch überbestimmt!", 500, 505);
}

function Folie44() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  image(tafel, 200, 150);

  linksRedet();
  rechtsRedet();
  mitteRedet();

  text("         (erschrocken)\nAch ja! Mehr Gleichungen\n       als Unbekannte.", 839, 495);
  text("Das kann doch auch gar nicht\ngehen.", 470, 480);
  text("Wie jetzt? Es gibt gar\n    keine Lösung?", 160, 515);
  textStyle(BOLD);
  text("       Das Gleichungssystem\nist doch überbestimmt!", 500, 505);
}

function Folie45() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  text("Bis auf Spezialfälle abgesehen hat ein Gleichungssystem mit mehr Gleichungen\nals Unbekanntne keine (exakte) Lösung.", 20, 100);

  text("fünf Gleichungen", 700, 200);
  text("zwei Unbekannte", 950, 380);



  textStyle(BOLD);
  text("60 = g  ⋅ 159 + g  ⋅ 66", 920, 120);
  text("70 = g  ⋅ 168 + g  ⋅ 70", 920, 160);
  text("80 = g  ⋅ 178 + g  ⋅ 77", 920, 200);
  text("90 = g  ⋅ 184 + g  ⋅ 87", 920, 240);
  text("100 = g  ⋅ 187 + g  ⋅ 104", 910, 280);

  textSize(16);
  for (let i = 0; i < 5; i++) {
    text("1", 979, 130 + 40 * i);
    text("2", 1069, 130 + 40 * i);
  }

  stroke(0);
  line(855, 193, 910, 110);
  line(855, 193, 910, 150);
  line(855, 193, 910, 190);
  line(855, 193, 910, 230);
  line(855, 193, 910, 270);

  line(1030, 360, 985, 300);
  line(1030, 360, 1070, 300);
}

function Folie46() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  text("Bis auf Spezialfälle abgesehen hat ein Gleichungssystem mit mehr Gleichungen\nals Unbekanntne keine (exakte) Lösung.", 20, 100);

  text("fünf Gleichungen", 700, 200);
  text("zwei Unbekannte", 950, 380);



  textStyle(BOLD);
  text("60 = g  ⋅ 159 + g  ⋅ 66", 920, 120);
  text("70 = g  ⋅ 168 + g  ⋅ 70", 920, 160);
  text("80 = g  ⋅ 178 + g  ⋅ 77", 920, 200);
  text("90 = g  ⋅ 184 + g  ⋅ 87", 920, 240);
  text("100 = g  ⋅ 187 + g  ⋅ 104", 910, 280);

  textSize(16);
  for (let i = 0; i < 5; i++) {
    text("1", 979, 130 + 40 * i);
    text("2", 1069, 130 + 40 * i);
  }

  stroke(0);
  line(855, 193, 910, 110);
  line(855, 193, 910, 150);
  line(855, 193, 910, 190);
  line(855, 193, 910, 230);
  line(855, 193, 910, 270);

  line(1030, 360, 985, 300);
  line(1030, 360, 1070, 300);

  fill(200, 200, 255);
  rect(20, 220, 700, 140);

  noStroke();
  fill(0);
  textSize(20);
  text("Aber", 340, 240);
  textStyle(NORMAL);
  text('Man kann zeigen, dass es eine "am wenigsten falsche Lösung" gibt. Mit an-\nderen Worten: Es gibt ein g * und ein g *, mit denen die Vorhersagen zwar\nnach wie vor fehlerhaft sind, dieser Fehler im Mittel aller Gleichungne aber\nminimiert ist.', 30, 270);
  textSize(16);
  text("1", 271, 305);
  text("2", 373, 305);

}

function Folie47() {
  Folie46();
  linksRedet();
  textSize(20);
  textStyle(BOLD);
  text("Wie jetzt? Es gibt gar\n    keine Lösung?!", 150, 515);
}

function Folie48() {
  Folie46();
  linksRedet();
  mitteRedet();
  textSize(20);
  textStyle(BOLD);
  text("Wie jetzt? Es gibt gar\n    keine Lösung?!", 150, 515);
  text("Nun ja. Es gibt zumindest eine\nam wenigsten falsche Lösung.", 460, 490);
}

let beispiel_data = [{
  inputs: [159, 66],
  outputs: [60]
}, {
  inputs: [168, 70],
  outputs: [70]
}, {
  inputs: [178, 77],
  outputs: [80]
}, {
  inputs: [184, 87],
  outputs: [90]
}, {
  inputs: [187, 104],
  outputs: [100]
}, ]

let g1 = 0.8;
let g2 = -1.4;

function predict(input) {
  let output = input[0] * g1 + input[1] * g2;
  return output;
}

function Folie49() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  text('Die "Kalibrierung" ist\nnoch zu fehlerhaft.', 295, 110);
  text('In dem Diagramm ist für die fünf Trainingsdaten die\nwahre Masse gegen die aus der Modellgleichung\nberechnete ("kalibrierte") Masse aufgetragten.\n\nGrundlage der speziellen Situation sind die Faktoren\ng  = 0,8 und g  = -1,4. Mit diesen Faktoren sind alle\nVohersagen völlig falsch!', 700, 165);
  textSize(14);
  text("1                          2", 710, 300);
  textSize(20);
  strokeWeight(5);
  stroke(255, 0, 0);
  line(200, 90, 250, 140);
  line(200, 140, 250, 90);
  strokeWeight(2);
  stroke(0);
  fill(255);
  rect(100, 150, 500, 500);
  line(100, 150, 100, 605);
  line(95, 650, 600, 650);

  line(95, 155, 100, 150);
  line(100, 150, 105, 155);
  line(595, 645, 600, 650);
  line(600, 650, 595, 655);

  //Winkelhalbierende
  line(100, 650, 600, 150);


  strokeWeight(1);
  noStroke();
  fill(0);
  text("Wahre Masse [kg]", 270, 715);
  for (let i = 0; i < 7; i++) {
    text(20 * i, 90 + 83.333333 * i, 680);
    text(120 - 20 * i, 50, 157 + 83.333333 * i);

  }
  stroke(200);
  for (let i = 0; i < 13; i++) {
    line(90, 150 + 83.333333 * i / 2, 600, 150 + 83.333333 * i / 2);
    line(100 + 83.333333 * i / 2, 150, 100 + 83.33333 * i / 2, 660);
  }
  stroke(0);
  beginShape();
  fill(255, 0, 0, 50);
  vertex(100, 650);
  vertex(100, 608.333);
  vertex(600 - 41.6666, 150);
  vertex(600, 150);
  vertex(600, 150 + 41.66666666);
  vertex(100 + 41.66666, 650);
  endShape();


  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  noStroke();
  fill(0);
  text('"Kalibrierte" Masse [kg]', -150, -670);
  pop();

  fill(0, 0, 255);
  for (let i = 0; i < beispiel_data.length; i++) {
    let x = 100 + 4.166666666 * beispiel_data[i].outputs[0];
    let y = 650 - 4.166666666 * predict(beispiel_data[i].inputs);
    ellipse(x, y, 20, 20);
  }

}

function Folie50() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  text('Die "Kalibrierung" ist\nnoch zu fehlerhaft.', 295, 110);
  text('In dem Diagramm ist für die fünf Trainingsdaten die\nwahre Masse gegen die aus der Modellgleichung\nberechnete ("kalibrierte") Masse aufgetragten.\n\nGrundlage der speziellen Situation sind die Faktoren\ng  = 0,8 und g  = -1,4. Mit diesen Faktoren sind alle\nVohersagen völlig falsch!', 700, 165);
  text("Zum Beispiel sagt das Modell bei einer Körpergröße\nK = 189 cm und einer Taille T = 104 cm nicht 100 kg,\nsondern nur 4 kg voraus. Etwa so viel wie ein Baby.", 700, 400);
  textSize(14);
  text("1                          2", 710, 300);
  textSize(20);
  strokeWeight(5);
  stroke(255, 0, 0);
  line(200, 90, 250, 140);
  line(200, 140, 250, 90);
  strokeWeight(2);

  stroke(0);
  fill(255);
  rect(100, 150, 500, 500);
  line(100, 150, 100, 605);
  line(95, 650, 600, 650);

  line(95, 155, 100, 150);
  line(100, 150, 105, 155);
  line(595, 645, 600, 650);
  line(600, 650, 595, 655);

  //Winkelhalbierende
  line(100, 650, 600, 150);

  strokeWeight(1);
  noStroke();
  fill(0);
  text("Wahre Masse [kg]", 270, 715);
  for (let i = 0; i < 7; i++) {
    text(20 * i, 90 + 83.333333 * i, 680);
    text(120 - 20 * i, 50, 157 + 83.333333 * i);

  }
  stroke(200);
  for (let i = 0; i < 13; i++) {
    line(90, 150 + 83.333333 * i / 2, 600, 150 + 83.333333 * i / 2);
    line(100 + 83.333333 * i / 2, 150, 100 + 83.33333 * i / 2, 660);
  }
  stroke(0);
  beginShape();
  fill(255, 0, 0, 50);
  vertex(100, 650);
  vertex(100, 608.333);
  vertex(600 - 41.6666, 150);
  vertex(600, 150);
  vertex(600, 150 + 41.66666666);
  vertex(100 + 41.66666, 650);
  endShape();


  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  noStroke();
  fill(0);
  text('"Kalibrierte" Masse [kg]', -150, -670);
  pop();

  fill(0, 0, 255);
  for (let i = 0; i < beispiel_data.length; i++) {
    let x = 100 + 4.166666666 * beispiel_data[i].outputs[0];
    let y = 650 - 4.166666666 * predict(beispiel_data[i].inputs);
    ellipse(x, y, 20, 20);
  }
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  rect(500, 618, 35, 30);
}

function Folie51() {
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  text('Die "Kalibrierung" ist\nnoch zu fehlerhaft.', 295, 110);
  text('In dem Diagramm ist für die fünf Trainingsdaten die\nwahre Masse gegen die aus der Modellgleichung\nberechnete ("kalibrierte") Masse aufgetragten.\n\nGrundlage der speziellen Situation sind die Faktoren\ng  = 0,8 und g  = -1,4. Mit diesen Faktoren sind alle\nVohersagen völlig falsch!', 700, 165);
  text("Zum Beispiel sagt das Modell bei einer Körpergröße\nK = 189 cm und einer Taille T = 104 cm nicht 100 kg,\nsondern nur 4 kg voraus. Etwa so viel wie ein Baby.", 700, 400);
  strokeWeight(5);
  stroke(255, 0, 0);
  line(200, 90, 250, 140);
  line(200, 140, 250, 90);
  strokeWeight(2);

  stroke(0);
  fill(255);
  rect(100, 150, 500, 500);
  line(100, 150, 100, 605);
  line(95, 650, 600, 650);

  line(95, 155, 100, 150);
  line(100, 150, 105, 155);
  line(595, 645, 600, 650);
  line(600, 650, 595, 655);

  //Winkelhalbierende
  line(100, 650, 600, 150);

  strokeWeight(1);
  noStroke();
  fill(0);
  text("Wahre Masse [kg]", 270, 715);
  for (let i = 0; i < 7; i++) {
    text(20 * i, 90 + 83.333333 * i, 680);
    text(120 - 20 * i, 50, 157 + 83.333333 * i);

  }
  stroke(200);
  for (let i = 0; i < 13; i++) {
    line(90, 150 + 83.333333 * i / 2, 600, 150 + 83.333333 * i / 2);
    line(100 + 83.333333 * i / 2, 150, 100 + 83.33333 * i / 2, 660);
  }
  stroke(0);
  beginShape();
  fill(255, 0, 0, 50);
  vertex(100, 650);
  vertex(100, 608.333);
  vertex(600 - 41.6666, 150);
  vertex(600, 150);
  vertex(600, 150 + 41.66666666);
  vertex(100 + 41.66666, 650);
  endShape();


  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  noStroke();
  fill(0);
  text('"Kalibrierte" Masse [kg]', -150, -670);
  pop();

  fill(0, 0, 255);
  for (let i = 0; i < beispiel_data.length; i++) {
    let x = 100 + 4.166666666 * beispiel_data[i].outputs[0];
    let y = 650 - 4.166666666 * predict(beispiel_data[i].inputs);
    ellipse(x, y, 20, 20);
  }
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  rect(500, 618, 35, 30);

  line(535, 630, 700, 630);
  line(695, 625, 700, 630);
  line(700, 630, 695, 635);

  noStroke();
  textStyle(BOLD);
  fill(0);
  text("0,8 ⋅ 187 - 1,4 ⋅ 104 = 4", 720, 635);
}

function Folie52() {
  weiter.show();
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  textStyle(NORMAL);
  text('Die "Kalibrierung" erfüllt\ndie Fehlertoleranz. Prima!', 295, 110);
  text('Vorhersagen sind gut, wenn sich alle Punkte\nder Trainingsdaten auf der Winkelhalbierenden\noder zumindest in dem rötlichen Bereich befinden.\n\nDie Fehlertoleranz ist links mit 10 kg recht groß.\nAber für unsere Zwecke soll das reichen.', 700, 225);

  strokeWeight(5);
  stroke(0, 255, 0);
  line(200, 115, 225, 140);
  line(225, 140, 250, 90);
  strokeWeight(2);

  stroke(0);
  fill(255);
  rect(100, 150, 500, 500);
  line(100, 150, 100, 605);
  line(95, 650, 600, 650);

  line(95, 155, 100, 150);
  line(100, 150, 105, 155);
  line(595, 645, 600, 650);
  line(600, 650, 595, 655);

  //Winkelhalbierende
  line(100, 650, 600, 150);

  strokeWeight(1);
  noStroke();
  fill(0);
  text("Wahre Masse [kg]", 270, 715);
  for (let i = 0; i < 7; i++) {
    text(20 * i, 90 + 83.333333 * i, 680);
    text(120 - 20 * i, 50, 157 + 83.333333 * i);

  }
  stroke(200);
  for (let i = 0; i < 13; i++) {
    line(90, 150 + 83.333333 * i / 2, 600, 150 + 83.333333 * i / 2);
    line(100 + 83.333333 * i / 2, 150, 100 + 83.33333 * i / 2, 660);
  }
  stroke(0);
  beginShape();
  fill(255, 0, 0, 50);
  vertex(100, 650);
  vertex(100, 608.333);
  vertex(600 - 41.6666, 150);
  vertex(600, 150);
  vertex(600, 150 + 41.66666666);
  vertex(100 + 41.66666, 650);
  endShape();


  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  noStroke();
  fill(0);
  text('"Kalibrierte" Masse [kg]', -150, -670);
  pop();

  fill(0, 0, 255);
  for (let i = 0; i < beispiel_data.length; i++) {
    let x = 100 + 4.166666666 * beispiel_data[i].outputs[0];
    let y = 650 - 4.166666666 * (beispiel_data[i].inputs[0] * 0.03 + beispiel_data[i].inputs[1] * 0.92);
    ellipse(x, y, 20, 20);
  }
  g1_slider.hide();
  g2_slider.hide();
}

function Folie53() {
  g1_slider.show();
  g2_slider.show();
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);
  text("Aufgabe:", 20, 100);

  textStyle(NORMAL);
  text("                 Findet Gewichte g  und g  , sodass alle Trainingsdaten innerhalb der Fehlertoleranz liegen. Mit den Reglern rechts könnt\nihr die Gewichte in den Grenzen von jeweils -2 bis 2 variieren.", 20, 100);


  textSize(16);
  text("1", 275, 108);
  text("2", 338, 108);
  //Graph
  strokeWeight(2);

  stroke(0);
  fill(255);
  rect(100, 150, 500, 500);
  line(100, 150, 100, 605);
  line(95, 650, 600, 650);

  line(95, 155, 100, 150);
  line(100, 150, 105, 155);
  line(595, 645, 600, 650);
  line(600, 650, 595, 655);

  //Winkelhalbierende
  line(100, 650, 600, 150);
  let error = calcError();
  if (error > 17) {
    strokeWeight(5);
    stroke(255, 0, 0);
    line(150, 175, 200, 225);
    line(150, 225, 200, 175);
    weiter.hide();
  } else {
    strokeWeight(5);
    stroke(0, 255, 0);
    line(150, 200, 175, 225);
    line(175, 225, 200, 175);
    weiter.show();
  }

  strokeWeight(1);
  noStroke();
  fill(0);
  text("Wahre Masse [kg]", 270, 715);
  for (let i = 0; i < 7; i++) {
    text(20 * i, 90 + 83.333333 * i, 680);
    text(120 - 20 * i, 50, 157 + 83.333333 * i);

  }
  stroke(200);
  for (let i = 0; i < 13; i++) {
    line(90, 150 + 83.333333 * i / 2, 600, 150 + 83.333333 * i / 2);
    line(100 + 83.333333 * i / 2, 150, 100 + 83.33333 * i / 2, 660);
  }
  stroke(0);

  beginShape();
  fill(255, 0, 0, 50);
  vertex(100, 650);
  vertex(100, 608.333);
  vertex(600 - 41.6666, 150);
  vertex(600, 150);
  vertex(600, 150 + 41.66666666);
  vertex(100 + 41.66666, 650);
  endShape();


  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  noStroke();
  fill(0);
  text('"Kalibrierte" Masse [kg]', -150, -670);
  pop();

  fill(0, 0, 255);
  g1 = g1_slider.value();
  g2 = g2_slider.value();
  for (let i = 0; i < beispiel_data.length; i++) {
    let x = 100 + 4.166666666 * beispiel_data[i].outputs[0];
    let y = 650 - 4.166666666 * predict(beispiel_data[i].inputs);
    if (y > 150 && y < 650) {
      ellipse(x, y, 20, 20);
    }
  }




  //G1 und G2 variieren
  g1_slider.show();
  strokeWeight(2);
  stroke(0);
  fill(255);
  rect(675, 150, 500, 500);

  textSize(30);
  fill(0);
  noStroke();
  text("g  = " + nf(g1_slider.value(), 0, 2).replace('.', ','), 870, 710);
  text("g  = " + nf(g2_slider.value(), 0, 2).replace('.', ','), 685, 430);
  textSize(20);
  text("1", 885, 720);
  text("2", 700, 440);

  for (let i = 0; i < 11; i++) {
    text(nf((200 - 40 * i) / 100, 0, 1).replace('.', ','), 635, 155 + 50 * i);
    text(nf(-(200 - 40 * i) / 100, 0, 1).replace('.', ','), 650 + 50 * i, 680);
  }

  stroke(0);
  strokeWeight(2);
  line(675 + 124 * (g1_slider.value() + 2), 150, 675 + 124 * (g1_slider.value() + 2), 650);
  line(675, 649 - 124 * (g2_slider.value() + 2), 1175, 649 - 124 * (g2_slider.value() + 2));

}

function calcError() {
  let err = 0;
  for (let i = 0; i < beispiel_data.length; i++) {
    let delta = beispiel_data[i].outputs[0] - predict(beispiel_data[i].inputs);
    delta = delta * delta;
    err = err + delta;
  }
  err = Math.pow(err, 0.5);
  return err;
}

function Folie54() {
  for (let i = 0; i < 3; i++) {
    groesse[i].hide();
    taille[i].hide();
    wahreMasse[i].hide();
  }
  massenkalibrierung.hide();
  g1_slider.hide();
  g2_slider.hide();
  textStyle(BOLD);
  textSize(20);
  text("Bestimme die Masse aus der Körpergröße und dem Taillenumfang", 300, 50);


  textStyle(NORMAL);
  text("Gut gemacht. Übrigens siehst du unten rechts, in welchem Bereich (grün) der Fehler recht klein ist. Die optimalen Gewichte sind\nbei g * = 0,03 und g * = 0,92.", 20, 100);
  textSize(16);
  text("1", 63, 135);
  text("2", 195, 135);
  //Graph
  strokeWeight(2);

  stroke(0);
  fill(255);
  rect(100, 150, 500, 500);
  line(100, 150, 100, 605);
  line(95, 650, 600, 650);

  line(95, 155, 100, 150);
  line(100, 150, 105, 155);
  line(595, 645, 600, 650);
  line(600, 650, 595, 655);

  //Winkelhalbierende
  line(100, 650, 600, 150);
  strokeWeight(1);
  noStroke();
  fill(0);
  text("Wahre Masse [kg]", 270, 715);
  for (let i = 0; i < 7; i++) {
    text(20 * i, 90 + 83.333333 * i, 680);
    text(120 - 20 * i, 50, 157 + 83.333333 * i);

  }
  stroke(0);
  for (let i = 0; i < 13; i++) {
    line(90, 150 + 83.333333 * i / 2, 100, 150 + 83.333333 * i / 2);
    line(100 + 83.333333 * i / 2, 650, 100 + 83.33333 * i / 2, 660);
  }

  beginShape();
  fill(255, 0, 0, 50);
  vertex(100, 650);
  vertex(100, 608.333);
  vertex(600 - 41.6666, 150);
  vertex(600, 150);
  vertex(600, 150 + 41.66666666);
  vertex(100 + 41.66666, 650);
  endShape();


  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  noStroke();
  fill(0);
  text('"Kalibrierte" Masse [kg]', -150, -670);
  pop();

  fill(0, 0, 255);
  g1 = g1_slider.value();
  g2 = g2_slider.value();
  for (let i = 0; i < beispiel_data.length; i++) {
    let x = 100 + 4.166666666 * beispiel_data[i].outputs[0];
    let y = 650 - 4.166666666 * predict(beispiel_data[i].inputs);
    if (y > 150 && y < 650) {
      ellipse(x, y, 20, 20);
    }
  }




  //G1 und G2 variieren

  strokeWeight(2);
  stroke(0);
  fill(255);
  rect(675, 150, 500, 500);
  noStroke();
  strokeWeight(1);
  for (let i = -2; i < 2; i += 0.025) {
    for (let j = -2; j < 2; j += 0.025) {
      let err = 0;
      for (let k = 0; k < beispiel_data.length; k++) {
        let pred = i * beispiel_data[k].inputs[0] + beispiel_data[k].inputs[1] * j;

        err += (pred - beispiel_data[k].outputs[0]) * (pred - beispiel_data[k].outputs[0]);
      }
      err = Math.pow(err, 0.50);
      fill(err * 2.5, 255 - err * 2.5, 0);
      rect(675 + (i + 2) * 125, 650 - 125 * (j + 2), 3.75, 3.75);
    }
  }
  textSize(30);
  fill(0);
  noStroke();
  text("g  = " + nf(g1_slider.value(), 0, 2).replace('.', ','), 870, 710);
  text("g  = " + nf(g2_slider.value(), 0, 2).replace('.', ','), 685, 430);
  textSize(20);
  text("1", 885, 720);
  text("2", 700, 440);

  for (let i = 0; i < 11; i++) {
    text(nf((200 - 40 * i) / 100, 0, 1).replace('.', ','), 635, 155 + 50 * i);
    text(nf(-(200 - 40 * i) / 100, 0, 1).replace('.', ','), 650 + 50 * i, 680);
  }

  stroke(0);
  strokeWeight(1);
  line(675 + 124 * (g1_slider.value() + 2), 150, 675 + 124 * (g1_slider.value() + 2), 650);
  line(675, 651 - 124 * (g2_slider.value() + 2), 1175, 651 - 124 * (g2_slider.value() + 2));



  line(930, 290, 1050, 290);
  line(1050, 290, 1050, 260);
  strokeWeight(1);
  textStyle(NORMAL);
  noStroke();
  text("(g * = 0,03 | g * = 0,92)\n  optimale Gewichte", 970, 230);
  textSize(16);
  text("1", 988, 240);
  text("2", 1090, 240);
  weiter.show();
}

function Folie55() {
  for (let i = 0; i < 3; i++) {
    groesse[i].show();
    taille[i].show();
    wahreMasse[i].show();
  }
  massenkalibrierung.show();
  textStyle(BOLD);
  textSize(20);
  text("Probe der am wenigsten falschen Lösung", 450, 50);
  text("Aufgabe:", 20, 100);
  textStyle(NORMAL);
  text("a)", 20, 150);
  text("Bestimmt eure Masse aus eurer Körpergröße G [in cm] und eurem Taillenumfang T [in cm] anhand der optimierten Modell-\ngleichung                                        . Nutzt hierzu Maßband und Zollstock. Tragt eure Ergebnisse in die Tabelle ein. Wenn ihr\neure Masse nicht kenn, so schätzt sie.", 100, 150);
  textStyle(ITALIC);
  text("M = 0,03 ⋅ G + 0,92 ⋅ T", 200, 175);
  textStyle(NORMAL);
  text("b)", 20, 500);
  text("Seid ihr zufrieden mit der Vorhersage oder war die Abweichung zu eurer wahren Masse groß? Nennt mindestens eine Idee,\nwie die „Massenkalibrierung“ noch verbessert werden könnte.", 100, 500);
  stroke(0);
  line(100, 300, 1120, 300);
  for (let i = 0; i < 3; i++) {
    line(300 + 200 * i, 260, 300 + 200 * i, 430);
    text(i + 1, 180, 330 + 40 * i);
  }
  line(920, 260, 920, 430);

  noStroke();
  text("Gruppenmitglied", 120, 280);
  text("Körpergröße [cm]", 320, 280);
  text("Taillenumfang [cm]", 520, 280);
  text('"Kalibrierte" Masse [kg]', 710, 280);
  text("wahre Masse [kg]", 950, 280);

  for (let i = 0; i < 3; i++) {
    let gr = groesse[i].value().replace(',', '.');
    let tl = taille[i].value().replace(',', '.');
    let erg = 0.03 * gr + 0.92 * tl;
    //erg = erg.replace('.', ',');
    text(nf(erg, 0, 1).replace('.', ','), 800, 330 + 40 * i);
  }

  if (massenkalibrierung.value().length < 10) {
    weiter.hide();
  } else {
    weiter.show();
  }
}

function Folie56() {
  for (let i = 0; i < 3; i++) {
    groesse[i].hide();
    taille[i].hide();
    wahreMasse[i].hide();
  }
  massenkalibrierung.hide();


  textStyle(BOLD);
  textSize(20);
  text("Fehlerquellen und mögliche Verbesserungen", 450, 50);
  textStyle(NORMAL);

  text("Die Kalibrierung kann u.a. verbessert werden durch:", 20, 100);
  text("→ Mehr Trainingsdaten (z.B. nicht nur Daten von 100, sondern 1000 Menschen)", 100, 150);
  text("→ Repräsentativere Trainingsdaten (u.a. Menschen mit mehr als 100 kg berücksichtigen)", 100, 175);
  text("→ Einbinden von mehr oder anderen Merkmalen (z.B. Körperfettanteil berücksichtigen)", 100, 200);
  text("Wir können auch eine komplexere Modellgleichung verwenden, die ja die Grundlage für das Gleichungssystem ist. Genau das wird\nin der Kalibriersoftware für den Gassensor gemacht. Auf die mathematischen Details wollen wir aber nicht näher eingehen. Am\nPrinzip ändert sich nämlich nichts.", 20, 250);


}

function Folie57() {
  Folie56();


  fill(200, 200, 255);
  stroke(0);
  rect(200, 400, 250, 100);

  fill(200, 255, 200);
  rect(50, 550, 150, 100);
  rect(250, 550, 150, 100);
  rect(450, 550, 150, 100);
  rect(650, 550, 200, 100);

  line(325, 500, 325, 550);
  line(320, 545, 325, 550);
  line(325, 550, 330, 545);

  line(200, 600, 250, 600);
  line(245, 595, 250, 600);
  line(250, 600, 245, 605);

  line(400, 600, 450, 600);
  line(445, 595, 450, 600);
  line(450, 600, 445, 605);

  line(600, 600, 650, 600);
  line(645, 595, 650, 600);
  line(650, 600, 645, 605);



  line(125, 650, 125, 670);
  line(125, 670, 745, 670);
  line(745, 670, 745, 650);
  line(450, 670, 450, 690);

  noStroke();
  fill(0);
  textSize(24);
  text("Merkmale bekannter\n    Trainingsdaten", 220, 440);
  text("  Modell-\ngleichung", 75, 590);
  text("Gleichungs-\n   system", 265, 590);
  text("Gewichts-\n  faktoren", 475, 590);
  text("     optimierte\nModellgleichung", 665, 590);
  text("Kalibrierung", 390, 720);

}

function Folie58() {
  trainingStarten.hide();
  prediction.hide();
  inputMerkmal1.hide();
  inputMerkmal2.hide();

  Folie57();


  fill(200, 200, 255);
  stroke(0);
  rect(200, 400, 250, 100);
  rect(630, 400, 250, 100);

  fill(255, 200, 200);
  rect(940, 550, 235, 100);

  fill(200, 255, 200);
  rect(50, 550, 150, 100);
  rect(250, 550, 150, 100);
  rect(450, 550, 150, 100);
  rect(650, 550, 200, 100);

  line(325, 500, 325, 550);
  line(320, 545, 325, 550);
  line(325, 550, 330, 545);

  line(200, 600, 250, 600);
  line(245, 595, 250, 600);
  line(250, 600, 245, 605);

  line(400, 600, 450, 600);
  line(445, 595, 450, 600);
  line(450, 600, 445, 605);

  line(600, 600, 650, 600);
  line(645, 595, 650, 600);
  line(650, 600, 645, 605);



  line(125, 650, 125, 670);
  line(125, 670, 745, 670);
  line(745, 670, 745, 650);
  line(450, 670, 450, 690);

  line(850, 600, 940, 600);
  line(935, 595, 940, 600);
  line(940, 600, 935, 605);


  line(755, 500, 755, 550);
  line(750, 545, 755, 550);
  line(755, 550, 760, 545);


  line(765, 670, 765, 650);
  line(765, 670, 1058, 670);
  line(1058, 650, 1058, 670);
  line(912, 670, 912, 690);


  noStroke();
  fill(0);
  textSize(24);
  text("Merkmale bekannter\n    Trainingsdaten", 220, 440);
  text("  Modell-\ngleichung", 75, 590);
  text("Gleichungs-\n   system", 265, 590);
  text("Gewichts-\n  faktoren", 475, 590);
  text("     optimierte\nModellgleichung", 665, 590);
  text("Kalibrierung", 390, 720);
  text("        Merkmale\nunbekannter Daten", 650, 440);
  text("         Zielgröße\n(z.B. Konzentration)", 952, 590);
  text("Kalibrierung für Messung nutzen", 750, 720);
}


let trainingCounter = 0;
let lowestError = Infinity;

let counter10 = "___";
let counter5 = "___";
let counter10bool = false;
let counter5bool = false;

let vorhersage = "";

function Folie59() {
  trainingStarten.show();
  let error = 0;
  for (let i = 0; i < training_data.length; i++) {
    let pred = nn.predict(training_data[i].inputs) * 40;
    let delta = 40 * training_data[i].outputs[0] - pred;
    delta = delta * delta;
    error += delta;
  }
  error = Math.pow(error / training_data.length, 0.5);
  if (error <= 4 && counter10bool == false) {
    counter10 = trainingCounter;
    counter10bool = true;
  }
  if (error <= 2 && counter5bool == false) {
    counter5 = trainingCounter;
    counter5bool = true;
  }
  fill(255);
  stroke(0);
  rect(100, 200, 500, 500);
  line(100, 700, 600, 200);

  line(95, 205, 100, 200);
  line(100, 200, 105, 205);

  line(595, 695, 600, 700);
  line(600, 700, 595, 705);

  noStroke();
  fill(0);
  textSize(18);
  for (let i = 0; i < 9; i++) {
    text(5 * i, 70, 705 - 62.5 * i);
    text(5 * i, 90 + 62.5 * i, 720);
  }

  stroke(200);
  for (let i = 0; i < 9; i++) {
    line(100 + 62.5 * i, 200, 100 + 62.5 * i, 700);
    line(100, 200 + 62.5 * i, 600, 200 + 62.5 * i)
  }
  stroke(0);
  //10%Fehler
  fill(0, 0, 255, 100);
  beginShape();
  vertex(100, 700);
  vertex(100, 700 - 500 * 4 / 40);
  vertex(600 - 500 * 4 / 40, 200);
  vertex(600, 200);
  vertex(600, 200 + 500 * 4 / 40);
  vertex(100 + 500 * 4 / 40, 700);
  endShape();

  //5%Fehler
  fill(255);
  beginShape();
  vertex(100, 700);
  vertex(100, 700 - 500 * 2 / 40);
  vertex(600 - 500 * 2 / 40, 200);
  vertex(600, 200);
  vertex(600, 200 + 500 * 2 / 40);
  vertex(100 + 500 * 2 / 40, 700);
  endShape();

  fill(255, 0, 0, 50);
  beginShape();
  vertex(100, 700);
  vertex(100, 700 - 500 * error / 40);
  vertex(600 - 500 * error / 40, 200);
  vertex(600, 200);
  vertex(600, 200 + 500 * error / 40);
  vertex(100 + 500 * error / 40, 700);
  endShape();

  stroke(0);
  line(100, 700, 600, 200);



  for (let i = 0; i < training_data.length; i++) {
    let x = 100 + 12.5 * training_data[i].outputs[0] * 40;
    let y = 700 - 12.5 * nn.predict(training_data[i].inputs) * 40;
    fill(0, 0, 255, 100);
    noStroke();
    ellipse(x, y, 15, 15);
  }
  noStroke();
  textStyle(BOLD);
  textSize(20);
  fill(0);
  text("Die Suche nach der optimalen Lösung beim Gassensor", 300, 50);
  textStyle(NORMAL);

  text("Dieses Diagramm kennst du von eben. Diesmal ist jedoch die wahre gegen die kalibrierte Konzentration eurer Trainingsdaten auf-\ngetragen. Die Vorhersagen sind noch ziemlich falsch. Mit einem Klick auf „Training starten“, wird ein Algorithmus ausgeführt, der\nautomatisch nach der am wenigsten falschen Lösung sucht. Dabei nähert sich das Ergebnis immer weiter dieser Lösung an.", 20, 90);
  text("Achtung: Die Rechnung bricht aber nach genau 10.000 Schritten ab.", 20, 180);

  text(" wahre Konzentration [ppm]", 220, 740);

  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  text('"Kalibrierte" Konzentration [ppm]', -200, -650);


  pop();


  stroke(0);
  line(15, 187, 640, 187);





  if (trainingCounter < 10000 && trainieren) {
    for (let i = 0; i < 100; i++) {
      let a = random(training_data);
      nn.train(a.inputs, a.outputs);
    }
    trainingCounter += 10;
  }



  if (error < lowestError) {
    lowestError = error;
  }

  if (trainingCounter >= 10000) {
    while (error > lowestError) {
      error = 0;
      for (let i = 0; i < training_data.length; i++) {
        let pred = nn.predict(training_data[i].inputs) * 40;
        let delta = 40 * training_data[i].outputs[0] - pred;
        delta = delta * delta;
        error += delta;
      }
      error = Math.pow(error / training_data.length, 0.5);
      for (let i = 0; i < 10; i++) {
        let a = random(training_data);
        nn.train(a.inputs, a.outputs);
      }
    }
    weiter.show();
    noStroke();
    text("Die Kalibrierung ist nun abgeschlossen!", 650, 550);
  } else {
    weiter.hide();
  }



  noStroke();
  text("Schritte: " + trainingCounter, 650, 300);
  error = error / training_data.length;
  text("Beste Fehlertoleranz: " + nf(100 * lowestError / 40, 0, 2).replace('.', ',') + " %", 650, 350);
  text("10 % - Fehlertoleranz erstmals unterschritten\nnach: " + counter10 + " Schritten", 650, 400);
  text("5 % - Fehlertoleranz unterschritten\nnach: " + counter5 + " Schritten", 650, 475);
  stroke(0);
  prediction.hide();
  inputMerkmal1.hide();
  inputMerkmal2.hide();
}

function Folie60() {
  trainingStarten.hide();
  textStyle(BOLD);
  textSize(20);
  text("Geschafft!", 580, 50);
  text("Aufgabe 1)", 20, 150);
  text("Aufgabe 2)", 20, 300);
  textStyle(NORMAL);

  text("Glückwunsch. Ihr habt den Sensor kalibriert. Zum Abschluss noch zwei Aufgaben.", 230, 100);
  text("Wie gut ist eurer Modell im Vergleich mit anderen Gruppen? Vergleicht die Anzahl der Schritte zur Unterschreitung der Fehlerto-\nleranzen. Welche Gründe könnten mögliche Unterschiede haben?", 50, 200);
  translate(0, 150);
  text("Prüft die Kalibrierung an einer, euch unbekannten, Konzentration", 300, 175);
  text("→ Öffnet eure Messkammer, um das Ethanol-Luft-Gemisch, das zur Kalibrierung verwendet wurde, zu entfernen.", 50, 225);
  text("→ Schließt die Messkammer wieder und führt den Inhalt einer Spritze (ihr bekommt sie vom Betreuer) in diese ein.", 50, 275);
  text("→ Nehmt mit der Kalibriersoftware den Widerstands-Zeit-Verlauf auf und bestimmt die Merkmale. Die Software zeigt euch die\nEthanolkonzentration automatisch an. Fragt nun den Betreuer, was heraus kommen müsste.", 50, 325);
  text('→ Tragt die Merkmale in die beiden Inputfelder auf dieser Seite ein, und klickt auf "Treffe Vorhersage". Das Programm nutzt bei der Vorhersage euer Modell.', )
  translate(0, -150);
  prediction.show();
  inputMerkmal1.show();
  inputMerkmal2.show();


  noStroke();
  let einheitM1 = " [kΩ] :";
  let einheitM2 = " [kΩ] :";
  if (string1 == "Steigung") {
    einheitM1 = " [kΩ/s] :";
  }
  if (string2 == "Steigung") {
    einheitM2 = " [kΩ/s] :";
  }
  text(string1 + einheitM1, 450, 550);
  text(string2 + einheitM2, 450, 620);

  text("Konzentration: " + vorhersage + " ppm Ethanol", 580, 695);


  prediction.mousePressed(function() {
    let in1 = (1000*inputMerkmal1.value().replace(',', '.') - featureMinimum1) / (featureMaximum1 - featureMinimum1);
    let in2 = (1000*inputMerkmal2.value().replace(',', '.') - featureMinimum2) / (featureMaximum2 - featureMinimum2);
    let ins = [in1, in2];
    vorhersage = nf(40 * nn.predict(ins), 0, 1).replace('.', ',');
  });

  weiter.hide();
}