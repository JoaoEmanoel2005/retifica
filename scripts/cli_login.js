const togglePassword = document.querySelector("#togglepassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  // Verifica o tipo do input
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // Troca o ícone (opcional)
  this.textContent = type === "password" ? "👁️" : "🙈";
});
