function skiTrip(input){

    const days = Number(input[0]);
    const typeOfRoom = input[1];
    const rating = input[2];

    let price = 0;
    const nights = days - 1;


    switch (typeOfRoom) {
        case "room for one person":
            price = 18.00;
            break;
        case "apartment":
            price = 25.00;
            if (days < 10) {
                price *= 0.70;
            } else if (days >= 10 && days <= 15) {
                price *= 0.65;
            } else {
                price *= 0.50;
            }
            break;
        case "president apartment":
            price = 35.00;
            if (days < 10) {
                price *= 0.90;
            } else if (days >= 10 && days <= 15) {
                price *= 0.85;
            } else {
                price *= 0.80;
            }
            break;

    }
    let sum = price * nights;
        if(rating === "positive"){
            sum *= 1.25;
        } else {
            sum *= 0.90;
        }
    
    console.log(sum.toFixed(2));
}
skiTrip(["12",
"room for one person",
"positive"])



