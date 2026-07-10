const urlPagina = "https://josueguevaragamarra0-png.github.io/Proyecto-de-Biologia-1/";

new QRCode(document.getElementById("qrcode"), {
    text: urlPagina,
    width: 180,
    height: 180,
    colorDark: "#2e7d32",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

// ==============================
// MENÚ ACTIVO AL HACER SCROLL
// ==============================

const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (scrollY >= top) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("activo");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("activo");
        }
    });

});

// ==============================
// BOTÓN VOLVER ARRIBA
// ==============================

const boton = document.createElement("button");

boton.innerHTML = "⬆";

boton.style.position = "fixed";
boton.style.bottom = "25px";
boton.style.right = "25px";
boton.style.width = "55px";
boton.style.height = "55px";
boton.style.borderRadius = "50%";
boton.style.fontSize = "22px";
boton.style.display = "none";
boton.style.zIndex = "1000";
boton.style.cursor = "pointer";

document.body.appendChild(boton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }

});

boton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==============================
// EFECTO DE APARICIÓN
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

document.querySelectorAll("section").forEach(sec => {

    sec.style.opacity = "0";
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "0.8s";

    observer.observe(sec);

});

// ==============================
// MENSAJE DE BIENVENIDA
// ==============================

window.addEventListener("load", () => {

    setTimeout(() => {

        alert("¡Bienvenido al Proyecto de Biología!\n\nPaños húmedos con Aloe vera y alcohol al 70%.");

    }, 500);

});

// ==============================
// FECHA AUTOMÁTICA EN EL FOOTER
// ==============================

const footer = document.querySelector("footer");

const fecha = document.createElement("p");

fecha.innerHTML = "Última actualización: " + new Date().toLocaleDateString();

footer.appendChild(fecha);

// ==============================
// IMPRESIÓN
// ==============================

const imprimir = document.createElement("button");

imprimir.innerHTML = "🖨 Imprimir";

imprimir.style.marginTop = "15px";

imprimir.onclick = () => {
    window.print();
};

footer.appendChild(imprimir);
