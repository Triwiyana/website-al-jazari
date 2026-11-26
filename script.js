
// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Membuka dan menutup menu
menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Menutup menu setelah salah satu link diklik
const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function(item) {
    item.addEventListener("click", function() {
        navLinks.classList.remove("active");

        console.log("Menu dipilih: " + item.textContent);
    });
});

// =========================
// WEBSITE LOADED
// =========================

window.addEventListener("load", function() {
    console.log("Website Al-Jazari berhasil dimuat!");
});
