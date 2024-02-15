import { log } from "console";
import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);
    });
  });
};

let Kontostand = 0;
let isFinished = false;


while (!isFinished) {
console.log("1. Einzahlen");
console.log("2. Abheben");
console.log("3. Kontostand");
console.log("4. Beenden");
let selection = await readLineAsync();
if (selection == 1) {
    console.log("Geben Sie den Betrag, den Sie einzahlen möchten, ein");
    let Einzahlung = Number(await readLineAsync());
    if (Einzahlung > 0) {
    Kontostand = Kontostand + Einzahlung;
    console.log("Ihre Einzahlung wurde erfolgreich abgeschlossen");
    }
    else {
      console.log("Ihre Eingabe war ungültig");
    }
}
else if (selection == 2) {
    console.log("Geben Sie den Betrag, den Sie abheben möchten, ein");
    let Abheben = Number(await readLineAsync());
    if (Abheben > 0 && Kontostand - Abheben >= 0) {
    Kontostand = Kontostand - Abheben;
    console.log("Ihre Abhebung wurde erfolgreich abgeschlossen");
    }
    else if (Kontostand - Abheben < 0) {
      console.log("Ihre Abhebung wurde abgelehnt, da Ihr Guthaben für die Aktion nicht ausreicht");
    }
    else {
      console.log("Ihre Eingabe war ungültig");
    }
}
else if (selection == 3) {
    console.log("Ihre Kontostand beträgt: " + Kontostand);
}

else if (selection == 4) {

isFinished = true
}

else {
    console.log("Ihre Eingabe war ungültig");
}
}

readline.close()
