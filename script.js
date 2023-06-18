const imageElement = document.getElementById("myImage");
const titleElement = document.getElementById("title");
const counterElement = document.getElementById("counter");

let count = localStorage.getItem("count");

if (count){
    count = parseInt(count);
} else {
    count = 0;
}

counterElement.textContent = count;

function incrementCount() {
    count ++;
    counterElement.textContent = count;
    localStorage.setItem("count", count);
}

setInterval(incrementCount, 1);