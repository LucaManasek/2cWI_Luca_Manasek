const data3 = "4,9,-3,-9,-5,10,2,1,14";
// NImm alle positiven Zahlen und berechne den Mittelwert
// Ausserdem gib die Summe der negativen Zahlen aus
let arr3 = data3.split(",")
console.log(arr3);
let summe1 = 0
let summe2 = 0
let number = 0
for (let i = 0; i < arr3.length; i++){
    number = parseInt(arr3[i]);
    if (arr3[i] >= 0) {
        summe1 = summe1 + number
    }
    else {
        summe2 = summe2 + number
    }
}
console.log(summe1);
console.log(summe2);