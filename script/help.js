let one, two, three, four, save;

one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four");
save = document.getElementById("save");

function Save() {
    save.addEventListener("click", function () {

        let combinedPattern = one.value + two.value + three.value + four.value;
        let expectedPattern = "1736"; // Replace with your desired combined pattern

        if (combinedPattern === expectedPattern) {
            window.location.href = "e5d7cffe25654f7e3a1e334118c71549.html"; // Replace with the URL of the page to redirect to
        } else {
            alert("Incorrect patterns, please try again.");
        }
    });
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
}