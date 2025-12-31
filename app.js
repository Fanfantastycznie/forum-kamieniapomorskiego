const categories = [
  {
    name: "Ogólne",
    desc: "Luźne rozmowy o wszystkim",
    topics: ["Przedstaw się", "Co słychać w mieście?"]
  },
  {
    name: "Kamień Pomorski",
    desc: "Sprawy miasta i regionu",
    topics: ["Remonty dróg", "Wydarzenia lokalne"]
  },
  {
    name: "Ogłoszenia",
    desc: "Kup / Sprzedaj / Oddam",
    topics: ["Oddam meble", "Szukam hydraulika"]
  },
  {
    name: "Moderacja",
    desc: "Zgłoszenia i regulamin",
    topics: ["Zgłoś naruszenie", "Zasady forum"]
  }
];

const grid = document.getElementById("categories");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

if (grid) {
  grid.innerHTML = categories.map(c => `
    <div class="category" onclick="openCategory('${c.name}')">
      <h4>${c.name}</h4>
      <p>${c.desc}</p>
    </div>
  `).join("");
}

function openCategory(name) {
  const cat = categories.find(c => c.name === name);
  if (!cat) return;

  modalTitle.textContent = cat.name;
  modalBody.innerHTML = `
    <ul>
      ${cat.topics.map(t => `<li>${t}</li>`).join("")}
    </ul>
  `;
  modal.style.display = "flex";
}

modalClose.onclick = () => modal.style.display = "none";
modal.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
