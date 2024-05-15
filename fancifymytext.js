//const btn = document.querySelector("button");

function bigger() {
    document.getElementById("Text").style.fontSize = "25px";
}

function toFancy() {
    document.getElementById("Text").style.fontWeight = "bold";
    document.getElementById("Text").style.color = "blue";
    document.getElementById("Text").style.textDecoration = "underline";
}

function toNorm() {
    document.getElementById("Text").style.fontWeight = "normal";
    document.getElementById("Text").style.color = "black";
    document.getElementById("Text").style.textDecoration = "none";
}

function moo() {
    var t = document.getElementById("Text");
    //t.value = t.value.toUpperCase();
    
    var parts = t.value.split(".");
    t.value = parts.join(" - Moo");
}

//btn.addEventListener("click", bigger());