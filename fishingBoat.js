function fishingBoat(input) {

    const budget = Number(input[0]);
    const season = input[1];
    const fishers = Number(input[2]);

    let sum = 0;

    switch (season) {
        case "Spring":
            sum = 3000;
            break;
        case "Summer":
        case "Autumn":
            sum = 4200;
            break;
        case "Winter":
            sum = 2600;
            break;
    }

    if (fishers <= 6) {
        sum *= 0.90;
    } else if (fishers > 7 && fishers <= 11) {
        sum *= 0.85;
    } else {
        sum *= 0.75;
    }
    
    if (fishers % 2 === 0 && season !== "Autumn"){
    sum *= 0.95
    }

    let diff = Math.abs(sum - budget);

    if (budget >= sum){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat(["3000",
"Summer",
"11"]);

