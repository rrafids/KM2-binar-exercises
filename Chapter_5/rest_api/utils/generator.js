class Generator {
  static async generateID() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  static async generatePassword(password) {
    return `hashed-${password}`;
  }
}

module.exports = Generator;
