const { faker } = require("@faker-js/faker");

const generateOneBook = () => {
  return {
    _id: faker.database.mongodbObjectId(),
    name: faker.commerce.product.name,
    price: faker.commerce.price(),
  };
};

const generateManyBooks = (size) => {
  const limit = size ?? 10;
  const fakeBooks = [];
  for (let index = 0; index < limit; index++) {
    fakeBooks[index] = generateOneBook();
  }
  return [...fakeBooks];
};

module.exports = { generateOneBook, generateManyBooks };
