const data1 = "14,3,12,8,9,11,4,3,2,4";
// Zähle jede 2te Zahl zusammen
// 14 + 12 + 9 +…
let arr1 = data1.split(",")
let summe = 0
let number = 0
for (let i = 0; i < 10;i++){
    if (i%2 == 0) {
        number = parseInt(arr1[i])
        summe = summe + number;
        console.log(summe);
    }
}
