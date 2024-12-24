ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal("h1, p, .balon", { origin: "left" });
ScrollReveal().reveal("a, .kue", { origin: "right" });
ScrollReveal().reveal("h3", { origin: "bottom" });
ScrollReveal().reveal("h2", { origin: "top" });

//tiup lilin
const flame = document.querySelector(".flame");

function blowOutCandle() {
  flame.classList.add("off");
  alert("Lilin telah padam! Selamat ulang tahun 🎉");
}

// Event listener untuk meniup lilin
document.querySelector("#candle").addEventListener("click", blowOutCandle);
