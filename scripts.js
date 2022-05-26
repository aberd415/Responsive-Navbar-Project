var mobileBreakpoint = 550;

window.onload = function () {
    var screenWidth = window.innerWidth;
    var globalNavbar = document.getElementById("global-nav");
    var toggle = document.getElementById("menu-toggle");

    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
        toggle.classList.add("open");
    }

    toggle.onclick = function () {
        globalNavbar.classList.toggle("open");
        toggle.classList.toggle("open");
    }

}

window.onresize = function () {
    var screenWidth = window.innerWidth;
    var globalNavbar = document.getElementById("global-nav");
    var toggle = document.getElementById("menu-toggle");

    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
        toggle.classList.add("open");
    }
    else {
        globalNavbar.classList.remove("open");
        toggle.classList.remove("open");
    }
}