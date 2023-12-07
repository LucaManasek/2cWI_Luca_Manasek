for (let i = 0; i < 4; i++) {
    if (i % 2 == 0) {
        console.log("XXXX");
    }
    else {
        console.log("OOOO");
    }
}

let counter = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        counter = counter + i
    }
    console.log(counter);
}

for (let i = 0; i < 5; i++) {
    if (i <= 3) {
        console.log("x");
    }
    else {
        console.log("xxxxxx");
    }
}