function onTimeForTheExam(input) {

    const hoursExam = Number(input[0]);
    const minutesExam = Number(input[1]);
    const hoursArriving = Number(input[2]);
    const minutesArriving = Number(input[3]);

    let timeExam = hoursExam * 60 + minutesExam;
    let timeArriving = hoursArriving * 60 + minutesArriving;

    let diff = Math.abs(timeExam - timeArriving);
    let hours = Math.floor(diff / 60);
    let minutes = diff % 60;


    if (timeArriving > timeExam) {
        console.log("Late");
        if (hours === 0) {
            console.log(`${minutes} minutes after the start`)
        } else if (hours > 0) {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`)
            } else {
                console.log(`${hours}:${minutes} hours after the start`)
            }

        }

    } else if (timeArriving === timeExam || minutes <= 30 && hours < 1) {
        if (timeArriving === timeExam) {
            console.log("On time");

        } else if (minutes <= 30) {
            console.log("On time");
            console.log(`${minutes} minutes before the start`);
        }

    } else if (timeArriving < timeExam) {
        console.log("Early");
        if (hours === 0) {
            console.log(`${minutes} minutes before the start`)
        } else if (hours > 0) {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`)
            } else {
                console.log(`${hours}:${minutes} hours before the start`)
            }
        }
    }
}
    onTimeForTheExam(["9",
    "30",
    "9",
    "50"])
    
