function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);
    let sum = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana": 
                sum = amount * 2.50;
                    console.log(sum.toFixed(2))
                    break;
                case "apple": 
                sum = amount * 1.20;
                    console.log(sum.toFixed(2))
                    break;
                case "orange": 
                sum = amount * 0.85;
                    console.log(sum.toFixed(2))
                    break;
                case "grapefruit": 
                sum = amount * 1.45;
                    console.log(sum.toFixed(2))
                    break;
                case "kiwi": 
                sum = amount * 2.70;
                    console.log(sum.toFixed(2))
                    break;
                case "pineapple": 
                sum = amount * 5.50;
                    console.log(sum.toFixed(2))
                    break;
                case "grapes": 
                sum = amount * 3.85;
                    console.log(sum.toFixed(2))
                    break;
                default: console.log("error")
                    break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana": sum = amount * 2.70;
                    console.log(sum.toFixed(2))
                    break;
                case "apple": sum = amount * 1.25;
                    console.log(sum.toFixed(2))
                    break;
                case "orange": sum = amount * 0.90;
                    console.log(sum.toFixed(2))
                    break;
                case "grapefruit": sum = amount * 1.60;
                    console.log(sum.toFixed(2))
                    break;
                case "kiwi": sum = amount * 3.00;
                    console.log(sum.toFixed(2))
                    break;
                case "pineapple": sum = amount * 5.60;
                    console.log(sum.toFixed(2))
                    break;
                case "grapes": sum = amount * 4.20;
                    console.log(sum.toFixed(2))
                    break;
                default: console.log("error")
                    break;
            }
            break;
        default: console.log("error")
            break;
    }

}
fruitShop(["apple","Tuesday","2"])








