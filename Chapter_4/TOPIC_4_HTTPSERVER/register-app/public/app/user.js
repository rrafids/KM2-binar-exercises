class User {
  constructor() {
    this.id = 0;
    this.name = "";
    this.email = "";
    this.password = "";
  }

  #generateID() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  async add(props) {
    const { name, email, password } = props;

    this.id = this.#generateID();
    this.name = name;
    this.email = email;
    this.password = password;

    const userToCreate = {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    };

    try {
      const response = await fetch("http://localhost:8082/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userToCreate),
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  async get(query) {
    const { name } = query;

    try {
      const response = await fetch(
        `http://localhost:8082/api/users?name=${name}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const resJson = await response.json(); // sama aja JSON.parse
      console.log(resJson);
      return resJson;
    } catch (err) {
      console.log(err);
    }
  }
}
