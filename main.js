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
    var contact_item = document.getElementById("contact-item");
    var breadcrumbs = document.getElementById("breadcrumbs");
    breadcrumbs.innerText = "/contacts"
    about.classList.add("hide");
    contact.classList.remove("hide");
    contact_item.classList.add("active");
}

function toHome() {
    var about = document.getElementById("about");
    var contact = document.getElementById("contact");
    var contact_item = document.getElementById("contact-item");
    var breadcrumbs = document.getElementById("breadcrumbs");
    breadcrumbs.innerText = ""
    about.classList.remove("hide");
    contact.classList.add("hide");
    contact_item.classList.remove("active");
}


function toMobContact() {
    console.log("hello");
    var mob_contact_item = document.getElementById("mob-contact-item");
    var mob_contact = document.getElementById("mob-contact");
    var mob_about = document.getElementById("mob-about");
    var mob_projects = document.getElementById("mob-projects");
    mob_about.classList.add("hide");
    mob_projects.classList.add("hide");
    mob_contact.classList.remove("hide");
    mob_contact_item.classList.add("active")
}