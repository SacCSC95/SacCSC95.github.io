function bigger() {
    document.getElementById("Text").style.fontSize = "25px";
}

function toBold() {
    document.getElementById("FancyShmancy").style.fontWeight = "bold";

    var x = document.getElementById("FancyShmancy").defaultChecked;
    document.getElementById("toBold").innerHTML = x;
}