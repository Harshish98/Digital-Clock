setInterval(myClock, 1000);
function myClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let nDate = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let string = hours >= 12 ? "PM" : "AM";

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    nDate = nDate < 10 ? "0" + nDate : nDate;
    month = month < 10 ? "0" + month : month;

    let time = hours + ":" + minutes + ":" + seconds + " " + string;
    let data = nDate + "/" + month + "/" + year;


    document.getElementById("clock").innerHTML = `${data} - ${time}`;
}
myClock();

