class App {
  constructor() {
    this.nameInput = document.getElementById("name");
    this.emailInput = document.getElementById("email");
    this.passwordInput = document.getElementById("password");
    this.submitButton = document.getElementById("submit");
    this.buttonGet = document.getElementById("buttonGet");
    this.searchInput = document.getElementById("search");
  }

  init() {
    if (this.submitButton) {
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

    if (this.buttonGet) {
      this.buttonGet.addEventListener("click", async (e) => {
        e.preventDefault();

        const user = new User();

        const query = {
          name: this.searchInput.value,
        };

        const getUsers = await user.get(query);

        getUsers.map((user) => {
          user = JSON.parse(user);
          console.log(user);
          const userData = document.createElement("p");
          userData.innerText = `Nama: ${user.name} - Email: ${user.email}`;

          document.body.append(userData);
        });
      });
    }
  }
}

const app = new App();

app.init();
