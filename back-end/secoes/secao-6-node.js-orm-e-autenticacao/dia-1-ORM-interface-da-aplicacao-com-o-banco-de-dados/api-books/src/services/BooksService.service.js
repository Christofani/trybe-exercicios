const { book } = require('../models');

const getAll = async () => {
 const books = await book.findAll();

 return books;
};

const getById = async (id) => {
  const bookForId = await book.findByPk(id);

  return bookForId;
};

const create = async ({ title, author, pageQuantity }) => {
  const newBook = await book.create({ title, author, pageQuantity });

  return newBook;
};

const update = async (id, { title, author, pageQuantity }) => {
  const [bookUpdated] = await book.update({ title, author, pageQuantity }, { where: { id } });

  return bookUpdated;
};

const remove = async (id) => {
  const bookRemoved = await book.destroy({ where: { id } });

  return bookRemoved;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};