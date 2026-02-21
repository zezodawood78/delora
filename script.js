// ===============================
// Sticky Navbar
// ===============================
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// ===============================
// Live numbers random
// ===============================
setInterval(() => {
  const liveUsers = document.getElementById("liveUsers");
  const soldHour = document.getElementById("soldHour");

  if (liveUsers)
    liveUsers.innerText = 340 + Math.floor(Math.random() * 20);

  if (soldHour)
    soldHour.innerText = 10 + Math.floor(Math.random() * 10);
}, 4000);

// ===============================
// Cart System
// ===============================
let cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartEl = document.getElementById("cart");

if (cartBtn && cartEl) {
  cartBtn.onclick = () => cartEl.classList.toggle("active");
}

document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.onclick = () => {
    let name = btn.dataset.name;
    let price = parseFloat(btn.dataset.price);
    cart.push({ name, price });
    updateCart();
  };
});

function updateCart() {
  const items = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");
  const progressBar = document.getElementById("progressBar");
  const shippingMsg = document.getElementById("shippingMsg");

  if (!items || !totalEl || !progressBar || !shippingMsg) return;

  let total = 0;
  items.innerHTML = "";

  cart.forEach((i) => {
    total += i.price;
    items.innerHTML += `<div class="cart-item">${i.name} - $${i.price}</div>`;
  });

  totalEl.innerText = total;

  let percent = Math.min((total / 200) * 100, 100);
  progressBar.style.width = percent + "%";

  if (total >= 200) {
    shippingMsg.innerText = "🎉 You unlocked FREE shipping!";
  } else {
    shippingMsg.innerText =
      "Add $" + (200 - total) + " more for FREE shipping";
  }
}

// ===============================
// Scroll reveal
// ===============================
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// ===============================
// Trending reveal animation
// ===============================
const trending = document.getElementById("trending");

window.addEventListener("scroll", () => {
  if (!trending) return;

  let position = trending.getBoundingClientRect().top;
  if (position < window.innerHeight - 100) {
    trending.classList.add("show");
  }
});

// ===============================
// Parallax subtle movement
// ===============================

// ===============================
// Flash Sale Countdown (6 hours)
// ===============================
let saleEnd = new Date().getTime() + 21600000;

setInterval(() => {
  let now = new Date().getTime();
  let diff = saleEnd - now;

  let h = Math.floor(diff / (1000 * 60 * 60));
  let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((diff % (1000 * 60)) / 1000);

  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (hoursEl) hoursEl.innerText = String(h).padStart(2, "0");
  if (minutesEl) minutesEl.innerText = String(m).padStart(2, "0");
  if (secondsEl) secondsEl.innerText = String(s).padStart(2, "0");
}, 1000);

// ===============================
// Mobile menu
// ===============================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.onclick = (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");

    menuToggle.textContent = navMenu.classList.contains("active")
      ? "✖"
      : "☰";
  };

  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenu.classList.remove("active");
      menuToggle.textContent = "☰";
    }
  });
  document.getElementById("shopNowBtn").addEventListener("click", function() {
  document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("viewCollections").onclick = function(){
  window.location.href = "collections.html";
};

}