const jobTitles = ["Frontend Developer", "Web Designer"];
let index = 0;
let currentTitle = "";
let letterIndex = 0;

function type() {
    if (letterIndex < jobTitles[index].length) {
        currentTitle += jobTitles[index].charAt(letterIndex);
        document.getElementById("job-title").textContent = currentTitle;
        letterIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(deleteText, 2000);
    }
}

function deleteText() {
    if (letterIndex > 0) {
        currentTitle = currentTitle.slice(0, -1);
        document.getElementById("job-title").textContent = currentTitle;
        letterIndex--;
        setTimeout(deleteText, 50);
    } else {
        index = (index + 1) % jobTitles.length;
        setTimeout(type, 500);
    }
}

window.onload = type;