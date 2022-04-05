class App {
  constructor() {
    this.nameInput = document.getElementById("name");
    this.emailInput = document.getElementById("email");
    this.passwordInput = document.getElementById("password");
    this.submitButton = document.getElementById("submit");
  }

  init() {
    this.submitButton.addEventListener("click", (e) => {
      e.preventDefault();

      const nameValue = this.nameInput.value;
      const emailValue = this.emailInput.value;
      const passwordValue = this.passwordInput.value;

      const user = new User();

      const payload = {
        name: nameValue,
        password: passwordValue,
        email: emailValue,
      };

      user.add(payload);
    });
  }
}

const app = new App();

app.init();
