function tradeCommissions(input) {

    let city = input[0];
    let sale = Number(input[1]);

    switch (city) {
        case "Sofia":
            if (sale >= 0 && sale <= 500) {
                console.log((sale * 0.05).toFixed(2));

            } else if (sale > 500 && sale <= 1000) {
                console.log((sale * 0.07).toFixed(2));

            } else if (sale > 1000 && sale <= 10000) {
                console.log((sale * 0.08).toFixed(2));

            } else if (sale > 10000) {
                console.log((sale * 0.12).toFixed(2));

            } else {
                console.log("error");
            }
            break;
        case "Varna":
            if (sale >= 0 && sale <= 500) {
                console.log((sale * 0.045).toFixed(2));

            } else if (sale > 500 && sale <= 1000) {
                console.log((sale * 0.075).toFixed(2));

            } else if (sale > 1000 && sale <= 10000) {
                console.log((sale * 0.1).toFixed(2));

            } else if (sale > 10000) {
                console.log((sale * 0.13).toFixed(2));

            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (sale >= 0 && sale <= 500) {
                console.log((sale * 0.055).toFixed(2));

            } else if (sale > 500 && sale <= 1000) {
                console.log((sale * 0.08).toFixed(2));

            } else if (sale > 1000 && sale <= 10000) {
                console.log((sale * 0.12).toFixed(2));

            } else if (sale > 10000) {
                console.log((sale * 0.145).toFixed(2));

            } else {
                console.log("error");
            }
            break;
        default: console.log("error")
            break;
    }

}
tradeCommissions(["Sofia",
    "1500"])




