for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${i}`);
}

// ----------------------------------------------------------------------------------------------------------------------

for (let j = 1; j <= 20; j++) {
    if (j == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of j is ${j}`);
}