class Database {
  constructor() {
    this.id = 0;
    this.data = [];
  };

  insertUser(user) {
    user.id = this.id++;
    this.data.push(user);
  };
};

module.exports = Database;