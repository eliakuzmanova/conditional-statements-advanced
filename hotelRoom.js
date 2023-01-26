function hotelRoom(input) {

    const month = input[0];
    const nights = input[1];

    let studio = 0;
    let apartment = 0;

    if (month === "May" || month === "October") {
        studio = 50;
        apartment = 65;
        if (nights > 7 && nights < 14) {
            studio *= 0.95;
        } else if (nights > 14){
            studio *= 0.70;
            apartment *= 0.90;
        }
    } else if (month === "June" || month === "September") {
        studio = 75.20;
        apartment = 68.70;
        if (nights > 14) {
            studio *= 0.80;
            apartment *= 0.90;
        }
    } else {
        studio = 76;
        apartment = 77;
        if (nights > 14) {
            apartment *= 0.90;
        }
    }
    console.log(`Apartment: ${(nights * apartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(nights * studio).toFixed(2)} lv.`);

}
hotelRoom(["August",
"20"])


