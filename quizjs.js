let a, b, c;
a = document.getElementById("questionsForm");
b = document.getElementById("submitBtn");
c = document.getElementById("resultMsg");
let t = null;
a.addEventListener("change", function(event) {
    t = event.target.value;
});
a.addEventListener("submit", function(event) {
    event.preventDefault();
    if (t === "Delhi") {
        c.textContent = "Correct answer";
    } else if (t === null) {
        c.textContent = " Please select the answer";
    } else {
        c.textContent = " Wrong answer";
    }

});