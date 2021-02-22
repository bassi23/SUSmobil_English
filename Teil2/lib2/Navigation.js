let Kategorie = [];

Kategorie[0] = {
  name: "1. Willkommen",
  anfang: -99,
  ende: -99,
  Unterkategorie: {
    name: ["Sensoren im Smartphone", "Sensoren im Alltag", "Was ist hier falsch?", "Übersicht"],
    anfang: [3, 14, 21, 23]
  }
}

Kategorie[1] = {
  name: "2. Theoretische\nGrundlagen",
  anfang: -99,
  ende: -99,
  Unterkategorie: {
    name: ["Kalibrierung am Beispiel\nThermometer", "Wandlung und Zuordnung", "Vom Thermometer zum\nGassensor", "Funktionsweise von Halbleiter\nGassensoren - Wiederholung", "Funktionsweise von Halbleiter\nGassensoren - Vertiefung", "Zusammenfassung des\ngesamten Messprozesses"],
    anfang: [25, 27, 30, 38, 49, 82]
  }
}

Kategorie[2] = {
  name: "3. Experimentelle\nBasis",
  anfang: -99,
  ende: 0,
  Unterkategorie: {
    name: ["Versuchsaufbau und\nDurchführung", "Konzentrationen - wie misst\nman das?", "Bedienung der\nKalibriersoftware"],
    anfang: [98, 119, 137]
  }
}

Kategorie[3] = {
  name: "4. Ethanol\nKalibrierung",
  anfang: 0,
  ende: 190,
  Unterkategorie: {
    name: ["Datenaufnahme", "Zuordnung:\nMerkmal - Konzentration", "Beispiel", "Modellerstellung", "Training", "Bestimmung einer\nunbekannten Konzentration"],
    anfang: [0, 5, 10, 18, 60, 61, 62]
  }
}

// Kategorie[4] = {
//   name: "5. Zusammenfassung",
//   anfang: 190,
//   ende: 200,
//   Unterkategorie: {
//     name: ["Temperaturzyklus"],
//     anfang: [190]
//   }
// }



function Navigation() {
  push();
  stroke(0);
  fill(255);
  strokeWeight(1);
  rect(1201, 1, 198, 748);

  let counter = 0;
  let offset = 0;

  textSize(17);
  textAlign(CENTER);
  noStroke();
  fill(0);
  for (let i = 0; i < Kategorie.length; i++) {
    textSize(17);
    fill(0);
    textStyle(BOLD);
    text(Kategorie[i].name, 1300, 60 + 50 * i + offset);
    if (Kategorie[i].name.length > 22) {
      offset += 20;
    }


    for (let j = 0; j < Kategorie[i].Unterkategorie.name.length; j++) {
      fill(200);
      textSize(14);
      textStyle(NORMAL);
      if (folie > Kategorie[i].anfang - 1 && folie < Kategorie[i].ende + 1) {
        offset += 30;
        if (folie > Kategorie[i].Unterkategorie.anfang[j] - 2) {
          fill(0);
        }
        if (folie > Kategorie[i].Unterkategorie.anfang[j] - 2 && folie < Kategorie[i].Unterkategorie.anfang[j + 1] - 1) {
          fill(255, 0, 0);
        }
        if (folie > Kategorie[i].Unterkategorie.anfang[j] - 2 && !(Kategorie[i].Unterkategorie.anfang[j + 1] - 1)) {
          fill(255, 0, 0);
        }
        text(Kategorie[i].Unterkategorie.name[j], 1300, 60 + 50 * i + offset);
        if (Kategorie[i].Unterkategorie.name[j].length > 22) {
          offset += 20;
        }
      }
    }
  }
  pop();
}