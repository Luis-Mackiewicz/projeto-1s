let userAge;
let t;

while (true) {
  userAge = prompt("Digite a sua idade!");

  if (userAge === null) {
    alert("Acesso cancelado.");
    location.href = "https://google.com";
    break;
  }

  t = Number(userAge);

  if (userAge.trim() === "" || isNaN(t)) {
    alert("Por favor, digite um número válido!");
  } else {
    break;
  }
}

if (t < 18) {
  alert("Permissão negada, você precisa ser maior de idade!");

  setTimeout(() => {
    location.href = "https://google.com";
  }, 3000);
} else {
  const body = document.querySelector("body");
  body.classList.remove("blurred-background");

  const realeseYear = 2026;
  const currentYear = new Date().getFullYear();

  if (currentYear === realeseYear) {
    alert("grande lancamento");
  }

  const themeToggle = document.querySelector("#theme-toggle");

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  themeToggle.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";

    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });

  const gameHistory = {
    text1: `Omar e um lenhador que vive em um pequeno sitio no interior de campo mourao e levava sua vida tranquilamente.`,
    text2: `Certo dia um grupo de criaturas sombrias que estavam adormecidas em um calabouco subterraneo no parque-do-lago despertaram com o barulho das "160" que estavam cortando giro nos arredores.`,
    text3: `Furiosos com o barulho das motos eles tiveram um plano - encher a rua de buracos para nenhuma moto perturbar o seu descanso!`,
    text4: `O vereador de campo mourao ligou para emergencia o mais rapido possivel, mas como a verba seria muito alta ele chamou o habitante mais corajoso da cidade, Omar o lenhador.`,
    text5: `Embarque nessa aventura e proteja campo mourao dos buracos!`,
  };

  const { text1, text2, text3, text4, text5 } = gameHistory;

  document.querySelector("#text1").textContent = text1;
  document.querySelector("#text2").textContent = text2;
  document.querySelector("#text3").textContent = text3;
  document.querySelector("#text4").textContent = text4;
  document.querySelector("#text5").textContent = text5;

  const form = document.querySelector(".contato-form");
  const feedback = document.querySelector(".form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    feedback.hidden = false;
  });
}
