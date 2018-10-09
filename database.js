class Database {
  constructor() {
    this.id = 1;
    this.users = [];
  };

  insertUser(user) {
    user.id = this.id++;
    this.users.push(user);
  };

  getUsers() {
    return this.users;
  };
};

module.exports = Database;