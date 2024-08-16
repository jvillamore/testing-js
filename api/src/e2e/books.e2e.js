const request = require('supertest');
const createApp = require('../../src/app');
const { MongoClient } = require('mongodb');
const { config } = require('../config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;
let app = null;
let server = null;
let database = null;
let client = null;

describe('Test for hello endpoint', () => {
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3000);
    client = await new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });
  afterAll(async () => {
    await database.dropDatabase();
    await client.close(true);
    await server.close();
  });

  // Describe el caso de prueba
  describe('Test for GET /api/v1/books', () => {
    test('test 001', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Algo',
          year: 1800,
          author: 'coinc',
        },
        {
          name: 'Algo 2',
          year: 1820,
          author: 'comic con',
        },
      ]);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // Assert
          console.log(body);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
