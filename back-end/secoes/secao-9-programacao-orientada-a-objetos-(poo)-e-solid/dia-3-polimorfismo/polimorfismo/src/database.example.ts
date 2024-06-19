class Database {
  connection() {
    console.log('Fazendo a conexão com um banco de dados genérico');
    
  }
}

class MySQLDatabase  extends Database{
  connection() {
    console.log('Fazendo a conexão com um banco de dados MySQL');
  }
}

class MongoDBDatabase extends Database{
  connection() {
    console.log('Fazendo a conexão com um banco de dados MongoDB');
  }
}

const db1 = new Database();
const db2 = new MySQLDatabase();
const db3 = new MongoDBDatabase();


const connecionDatabase = (db: Database) => {
  db.connection();
}

connecionDatabase(db1)
connecionDatabase(db2)
connecionDatabase(db3)

