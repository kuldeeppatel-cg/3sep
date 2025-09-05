class User {
  constructor(name, email) {
    this.name = name;
<<<<<<< HEAD
    this.email = email; this.password = password;
=======
    this.email = email.toLowerCase();
>>>>>>> feature/enhanced-auth
  }
}
  validate() {
    return this.name && this.email.includes('@');
  }
