function journey(input) {

    let budget = Number(input[0]);
    const season = input[1];

    let type = "";
    let destionation = "";

    if (budget <= 100) {
        destionation = "Bulgaria";
        if (season === "summer") {
            budget *= 0.30;
            type = "Camp";
        } else {
            budget *= 0.70;
            type = "Hotel";
        }
    } else if (budget <= 1000) {
        destionation = "Balkans";
        if (season === "summer") {
            budget *= 0.40;
            type = "Camp";
        } else {
            budget *= 0.80;
            type = "Hotel";
        }

    } else {
        destionation = "Europe"
        budget *= 0.90;
        type = "Hotel";
    }
    console.log(`Somewhere in ${destionation}`);
    console.log(`${type} - ${budget.toFixed(2)}`);
}
journey(["1500", "summer"]);
