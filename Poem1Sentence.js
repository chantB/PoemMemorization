var pos = 0, test, test2, tPos;
var lines = [
    ["Travel and tell no one,", "Travel ", "and ", "tell ", "no ", "one,", "", "", "", ""],
    ["live a true love story and tell no one,", "live ", "a ", "true ", "love ", "story ", "and ", "tell ", "no ", "one"],
    ["live happily and tell no one,", "live ", "happily ", "and ", "tell ", "no ", "one,", "", "", ""],
    ["people ruin", "people ", "ruin", "", "", "", "", "", "", ""],
    ["beautiful things.", "beautiful ", "things.", "", "", "", "", "", "", ""]

];
function _(x) {
    return document.getElementById(x);
}
function renderQuestion() {
    tPos = pos + 1;
    test = _("test");
    test2 = _("test2");
    test2.innerHTML = "<p>" + tPos + "/5" + "</p>";
    test.innerHTML = "<p class='bgSentence'>" + lines[pos][0] + "</p>";

}
function newLine() {
    changeCount();
    document.getElementById('test3').style.visibility = 'hidden';
    if (pos < 4) {
        pos++;
        renderQuestion();
    }
}
function previousLine() {
    changeCount();
    document.getElementById('test3').style.visibility = 'hidden';
    if (pos > 0) {
        pos--;
        renderQuestion();
    }
}

function changeCount() {
    count = -1;
    return count;
}
window.addEventListener("load", renderQuestion, false);


var count = -1;
function MemorizeLine() {

    document.getElementById('test3').style.visibility = 'visible';

    if (count == -1) {
        test.innerHTML = "<p class='bgSentence'>" + "</p>";
    }
    if (count == 0) {
        test.innerHTML = "<p class='bgSentence'>" + lines[pos][1] + "</p>";
    }
    else if (count == 1) {
        test.innerHTML = "<p class='bgSentence'>" + lines[pos][1] + lines[pos][2] + "</p>";
    }
    else if (count == 2) {
        test.innerHTML = "<p class='bgSentence'>" + lines[pos][1] + lines[pos][2] + lines[pos][3] + "</p>";
    }
    else if (count == 3) {
        test.innerHTML = "<p class='bgSentence'>" + lines[pos][1] + lines[pos][2] + lines[pos][3] + lines[pos][4] + "</p>";
    }
    else if (count == 4) {
        test.innerHTML = "<p class='bgSentence'>" + lines[pos][1] + lines[pos][2] + lines[pos][3] + lines[pos][4] + lines[pos][5] + "</p>";
    }
    else if (count == 5) {
        test.innerHTML = "<p class='bgSentence'>" + lines[pos][1] + lines[pos][2] + lines[pos][3] + lines[pos][4] + lines[pos][5] + lines[pos][6] + "</p>";
    }
    else if (count == 6) {
        test.innerHTML = "<p class='bgSentence'>" + lines[pos][1] + lines[pos][2] + lines[pos][3] + lines[pos][4] + lines[pos][5] + lines[pos][6] + lines[pos][7] + "</p>";
    }
    else if (count == 7) {
        test.innerHTML = "<p class='bgSentence'>" + lines[pos][1] + lines[pos][2] + lines[pos][3] + lines[pos][4] + lines[pos][5] + lines[pos][6] + lines[pos][7] + lines[pos][8] + "</p>";
    }
    else if (count == 8) {
        test.innerHTML = "<p class='bgSentence'>" + lines[pos][1] + lines[pos][2] + lines[pos][3] + lines[pos][4] + lines[pos][5] + lines[pos][6] + lines[pos][7] + lines[pos][8] + lines[pos][9] + "</p>";
    }
    count++;
}

function testR(a, b) {
    return a + b
}
module.exports = changeCount;
