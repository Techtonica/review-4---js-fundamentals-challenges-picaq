// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

let minSinceMidnight = function() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    return hour*60 + min;
}

console.log(minSinceMidnight());