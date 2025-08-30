const elements = [
  // Period 1
  { num: 1, symbol: "H", name: "Hydrogen", row: 1, col: 1 },
  { num: 2, symbol: "He", name: "Helium", row: 1, col: 18 },

  // Period 2
  { num: 3, symbol: "Li", name: "Lithium", row: 2, col: 1 },
  { num: 4, symbol: "Be", name: "Beryllium", row: 2, col: 2 },
  { num: 5, symbol: "B", name: "Boron", row: 2, col: 13 },
  { num: 6, symbol: "C", name: "Carbon", row: 2, col: 14 },
  { num: 7, symbol: "N", name: "Nitrogen", row: 2, col: 15 },
  { num: 8, symbol: "O", name: "Oxygen", row: 2, col: 16 },
  { num: 9, symbol: "F", name: "Fluorine", row: 2, col: 17 },
  { num: 10, symbol: "Ne", name: "Neon", row: 2, col: 18 },

  // Period 3
  { num: 11, symbol: "Na", name: "Sodium", row: 3, col: 1 },
  { num: 12, symbol: "Mg", name: "Magnesium", row: 3, col: 2 },
  { num: 13, symbol: "Al", name: "Aluminium", row: 3, col: 13 },
  { num: 14, symbol: "Si", name: "Silicon", row: 3, col: 14 },
  { num: 15, symbol: "P", name: "Phosphorus", row: 3, col: 15 },
  { num: 16, symbol: "S", name: "Sulfur", row: 3, col: 16 },
  { num: 17, symbol: "Cl", name: "Chlorine", row: 3, col: 17 },
  { num: 18, symbol: "Ar", name: "Argon", row: 3, col: 18 },

  // Period 4
  { num: 19, symbol: "K", name: "Potassium", row: 4, col: 1 },
  { num: 20, symbol: "Ca", name: "Calcium", row: 4, col: 2 },
  { num: 21, symbol: "Sc", name: "Scandium", row: 4, col: 3 },
  { num: 22, symbol: "Ti", name: "Titanium", row: 4, col: 4 },
  { num: 23, symbol: "V", name: "Vanadium", row: 4, col: 5 },
  { num: 24, symbol: "Cr", name: "Chromium", row: 4, col: 6 },
  { num: 25, symbol: "Mn", name: "Manganese", row: 4, col: 7 },
  { num: 26, symbol: "Fe", name: "Iron", row: 4, col: 8 },
  { num: 27, symbol: "Co", name: "Cobalt", row: 4, col: 9 },
  { num: 28, symbol: "Ni", name: "Nickel", row: 4, col: 10 },
  { num: 29, symbol: "Cu", name: "Copper", row: 4, col: 11 },
  { num: 30, symbol: "Zn", name: "Zinc", row: 4, col: 12 },
  { num: 31, symbol: "Ga", name: "Gallium", row: 4, col: 13 },
  { num: 32, symbol: "Ge", name: "Germanium", row: 4, col: 14 },
  { num: 33, symbol: "As", name: "Arsenic", row: 4, col: 15 },
  { num: 34, symbol: "Se", name: "Selenium", row: 4, col: 16 },
  { num: 35, symbol: "Br", name: "Bromine", row: 4, col: 17 },
  { num: 36, symbol: "Kr", name: "Krypton", row: 4, col: 18 },

  // Period 5
  { num: 37, symbol: "Rb", name: "Rubidium", row: 5, col: 1 },
  { num: 38, symbol: "Sr", name: "Strontium", row: 5, col: 2 },
  { num: 39, symbol: "Y", name: "Yttrium", row: 5, col: 3 },
  { num: 40, symbol: "Zr", name: "Zirconium", row: 5, col: 4 },
  { num: 41, symbol: "Nb", name: "Niobium", row: 5, col: 5 },
  { num: 42, symbol: "Mo", name: "Molybdenum", row: 5, col: 6 },
  { num: 43, symbol: "Tc", name: "Technetium", row: 5, col: 7 },
  { num: 44, symbol: "Ru", name: "Ruthenium", row: 5, col: 8 },
  { num: 45, symbol: "Rh", name: "Rhodium", row: 5, col: 9 },
  { num: 46, symbol: "Pd", name: "Palladium", row: 5, col: 10 },
  { num: 47, symbol: "Ag", name: "Silver", row: 5, col: 11 },
  { num: 48, symbol: "Cd", name: "Cadmium", row: 5, col: 12 },
  { num: 49, symbol: "In", name: "Indium", row: 5, col: 13 },
  { num: 50, symbol: "Sn", name: "Tin", row: 5, col: 14 },
  { num: 51, symbol: "Sb", name: "Antimony", row: 5, col: 15 },
  { num: 52, symbol: "Te", name: "Tellurium", row: 5, col: 16 },
  { num: 53, symbol: "I", name: "Iodine", row: 5, col: 17 },
  { num: 54, symbol: "Xe", name: "Xenon", row: 5, col: 18 },

  // Period 6
  { num: 55, symbol: "Cs", name: "Caesium", row: 6, col: 1 },
  { num: 56, symbol: "Ba", name: "Barium", row: 6, col: 2 },
  { num: 57, symbol: "La", name: "Lanthanum", row: 8, col: 3 },
  { num: 58, symbol: "Ce", name: "Cerium", row: 8, col: 4 },
  { num: 59, symbol: "Pr", name: "Praseodymium", row: 8, col: 5 },
  { num: 60, symbol: "Nd", name: "Neodymium", row: 8, col: 6 },
  { num: 61, symbol: "Pm", name: "Promethium", row: 8, col: 7 },
  { num: 62, symbol: "Sm", name: "Samarium", row: 8, col: 8 },
  { num: 63, symbol: "Eu", name: "Europium", row: 8, col: 9 },
  { num: 64, symbol: "Gd", name: "Gadolinium", row: 8, col: 10 },
  { num: 65, symbol: "Tb", name: "Terbium", row: 8, col: 11 },
  { num: 66, symbol: "Dy", name: "Dysprosium", row: 8, col: 12 },
  { num: 67, symbol: "Ho", name: "Holmium", row: 8, col: 13 },
  { num: 68, symbol: "Er", name: "Erbium", row: 8, col: 14 },
  { num: 69, symbol: "Tm", name: "Thulium", row: 8, col: 15 },
  { num: 70, symbol: "Yb", name: "Ytterbium", row: 8, col: 16 },
  { num: 71, symbol: "Lu", name: "Lutetium", row: 8, col: 17 },
  { num: 72, symbol: "Hf", name: "Hafnium", row: 6, col: 4 },
  { num: 73, symbol: "Ta", name: "Tantalum", row: 6, col: 5 },
  { num: 74, symbol: "W", name: "Tungsten", row: 6, col: 6 },
  { num: 75, symbol: "Re", name: "Rhenium", row: 6, col: 7 },
  { num: 76, symbol: "Os", name: "Osmium", row: 6, col: 8 },
  { num: 77, symbol: "Ir", name: "Iridium", row: 6, col: 9 },
  { num: 78, symbol: "Pt", name: "Platinum", row: 6, col: 10 },
  { num: 79, symbol: "Au", name: "Gold", row: 6, col: 11 },
  { num: 80, symbol: "Hg", name: "Mercury", row: 6, col: 12 },
  { num: 81, symbol: "Tl", name: "Thallium", row: 6, col: 13 },
  { num: 82, symbol: "Pb", name: "Lead", row: 6, col: 14 },
  { num: 83, symbol: "Bi", name: "Bismuth", row: 6, col: 15 },
  { num: 84, symbol: "Po", name: "Polonium", row: 6, col: 16 },
  { num: 85, symbol: "At", name: "Astatine", row: 6, col: 17 },
  { num: 86, symbol: "Rn", name: "Radon", row: 6, col: 18 },

  // Period 7
  { num: 87, symbol: "Fr", name: "Francium", row: 7, col: 1 },
  { num: 88, symbol: "Ra", name: "Radium", row: 7, col: 2 },
  { num: 89, symbol: "Ac", name: "Actinium", row: 9, col: 3 },
  { num: 90, symbol: "Th", name: "Thorium", row: 9, col: 4 },
  { num: 91, symbol: "Pa", name: "Protactinium", row: 9, col: 5 },
  { num: 92, symbol: "U", name: "Uranium", row: 9, col: 6 },
  { num: 93, symbol: "Np", name: "Neptunium", row: 9, col: 7 },
  { num: 94, symbol: "Pu", name: "Plutonium", row: 9, col: 8 },
  { num: 95, symbol: "Am", name: "Americium", row: 9, col: 9 },
  { num: 96, symbol: "Cm", name: "Curium", row: 9, col: 10 },
  { num: 97, symbol: "Bk", name: "Berkelium", row: 9, col: 11 },
  { num: 98, symbol: "Cf", name: "Californium", row: 9, col: 12 },
  { num: 99, symbol: "Es", name: "Einsteinium", row: 9, col: 13 },
  { num: 100, symbol: "Fm", name: "Fermium", row: 9, col: 14 },
  { num: 101, symbol: "Md", name: "Mendelevium", row: 9, col: 15 },
  { num: 102, symbol: "No", name: "Nobelium", row: 9, col: 16 },
  { num: 103, symbol: "Lr", name: "Lawrencium", row: 9, col: 17 },
  { num: 104, symbol: "Rf", name: "Rutherfordium", row: 7, col: 4 },
  { num: 105, symbol: "Db", name: "Dubnium", row: 7, col: 5 },
  { num: 106, symbol: "Sg", name: "Seaborgium", row: 7, col: 6 },
  { num: 107, symbol: "Bh", name: "Bohrium", row: 7, col: 7 },
  { num: 108, symbol: "Hs", name: "Hassium", row: 7, col: 8 },
  { num: 109, symbol: "Mt", name: "Meitnerium", row: 7, col: 9 },
  { num: 110, symbol: "Ds", name: "Darmstadtium", row: 7, col: 10 },
  { num: 111, symbol: "Rg", name: "Roentgenium", row: 7, col: 11 },
  { num: 112, symbol: "Cn", name: "Copernicium", row: 7, col: 12 },
  { num: 113, symbol: "Nh", name: "Nihonium", row: 7, col: 13 },
  { num: 114, symbol: "Fl", name: "Flerovium", row: 7, col: 14 },
  { num: 115, symbol: "Mc", name: "Moscovium", row: 7, col: 15 },
  { num: 116, symbol: "Lv", name: "Livermorium", row: 7, col: 16 },
  { num: 117, symbol: "Ts", name: "Tennessine", row: 7, col: 17 },
  { num: 118, symbol: "Og", name: "Oganesson", row: 7, col: 18 },
];

const table = document.getElementById("periodic-table");

// Render elements in grid
elements.forEach((el) => {
  const div = document.createElement("div");
  div.classList.add("element");
  div.style.gridColumn = el.col;
  div.style.gridRow = el.row;
  div.innerHTML = `
    <div class="number">${el.num}</div>
    <div class="symbol">${el.symbol}</div>
  `;
  div.addEventListener("click", () => showDialog(el));
  table.appendChild(div);
});

// Dialog logic
const dialog = document.getElementById("element-dialog");
const closeBtn = document.getElementById("close-dialog");
const nameEl = document.getElementById("element-name");
const symbolEl = document.getElementById("element-symbol");
const numberEl = document.getElementById("element-number");

function showDialog(el) {
  nameEl.textContent = el.name;
  symbolEl.textContent = el.symbol;
  numberEl.textContent = el.num;
  dialog.classList.remove("hidden");
}

closeBtn.addEventListener("click", () => dialog.classList.add("hidden"));
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.classList.add("hidden");
});
