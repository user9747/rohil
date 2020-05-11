function setTheme() {
    var today = new Date();
    var t = today.getHours();
    let root = document.documentElement;
    console.log(root.style)
    console.log(t);

    if (t > 5 && t < 19) {
        console.log("Day Mode!")
        root.style.setProperty('--color', 'black');
        root.style.setProperty('--bg-color', 'white');
    } else {
        console.log("Night Mode!")
        root.style.setProperty('--color', 'white');
        root.style.setProperty('--bg-color', 'black');
    }
}

setTheme();

setInterval(setTheme, 60000);


function toContact() {
    var about = document.getElementById("about");
    var contact = document.getElementById("contact");
    about.classList.add("hide");
    contact.classList.remove("hide");
}

function toHome() {
    var about = document.getElementById("about");
    var contact = document.getElementById("contact");
    about.classList.remove("hide");
    contact.classList.add("hide");
}