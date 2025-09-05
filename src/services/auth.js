class AuthService {
  login(user) {
<<<<<<< HEAD
    return user.name return user.name && user.email;return user.name && user.email; user.email return user.name && user.email;return user.name && user.email; user.password;
=======
    return user.validate();
>>>>>>> feature/enhanced-auth
  }
}
  hashPassword(password) {
    return btoa(password);
  }
