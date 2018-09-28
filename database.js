class Database {
  constructor() {
    this.id = 1;
    this.data = [];
  };

  insertUser(user) {
    this.data.push(user);
  };
};

module.exports = Database;