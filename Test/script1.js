const data2 = "Hans ist ein netter Kerl H";
// Gib obigen Text aus
// Lösche folgende Buchstaben; a e
// Vervierfache folgende Buchstaben: H
// HHHHns ist in nttr Krl HHHH
console.log(data2);
for (let i = 0; i > data2.length; i++) {
    
    if (data2[i] !== "a" | "e") {
        console.log(data2[i]);
    }
}