// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar color change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Fade-in animation for elements
const fadeElements = document.querySelectorAll(".fade-in");

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

fadeElements.forEach((element) => {
  fadeInObserver.observe(element);
});

// Wilayah Kerja Data
const wilayahData = [
  {
    name: "Cabang Dinas Kehutanan Wilayah Pacitan",
    areas: ["Kabupaten Pacitan", "Kabupaten Ponorogo"],
    image: "pacitan.jpg",
  },
  {
    name: "Cabang Dinas Kehutanan Wilayah Madiun",
    areas: [
      "Kabupaten Madiun",
      "Kota Madiun",
      "Kabupaten Magetan",
      "Kabupaten Ngawi",
    ],
    image: "madiun.jpg",
  },
  // Add more wilayah data here
];

// Populate Wilayah Cards
function populateWilayahCards() {
  const wilayahContainer = document.querySelector("#wilayah .row");

  wilayahData.forEach((wilayah) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
          <div class="wilayah-card card fade-in">
              <img src="images/${wilayah.image}" class="card-img-top" alt="${
      wilayah.name
    }">
              <div class="card-body">
                  <h5 class="card-title">${wilayah.name}</h5>
                  <p class="card-text">Meliputi: ${wilayah.areas.join(", ")}</p>
              </div>
          </div>
      `;
    wilayahContainer.appendChild(card);
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  populateWilayahCards();
});

// Form validation for contact form
function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Mohon lengkapi semua field yang diperlukan");
    return false;
  }

  // Add your form submission logic here
  console.log("Form submitted:", { name, email, message });

  // Reset form
  event.target.reset();
  alert("Pesan Anda telah terkirim. Terima kasih!");
}

// Add loading animation
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

// Initialize tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
