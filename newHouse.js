function newHouse(input) {
    const flowerType = input[0];
    const flowerCount = Number(input[1]);
    const budget = Number(input[2]);

    let sum = 0;

    switch (flowerType) {
        case "Roses":
            sum = flowerCount * 5;
            if (flowerCount > 80) {
                sum *= 0.90;
            }
            break;
        case "Dahlias":
            sum = flowerCount * 3.80;
            if (flowerCount > 90) {
                sum *= 0.85;
            }
            break;
        case "Tulips":
            sum = flowerCount * 2.80;
            if (flowerCount > 80) {
                sum *= 0.85;
            }
            break;
        case "Narcissus":
            sum = flowerCount * 3;
            if (flowerCount < 120) {
                sum *= 1.15;
            }
            break;
        case "Gladiolus":
            sum = flowerCount * 2.50;
            if (flowerCount < 80) {
                sum *= 1.20;
            }
            break;
    }
    let diff = Math.abs(sum - budget);
    
    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
newHouse (["Tulips","88","260"]);