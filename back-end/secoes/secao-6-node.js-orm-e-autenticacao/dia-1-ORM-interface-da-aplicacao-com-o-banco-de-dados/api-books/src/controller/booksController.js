const BookService = require('../services/BooksService.service');

const getAll = async (req, res) => {
  const books = await BookService.getAll();

  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const bookForId = await BookService.getById(id);

  if (!bookForId) res.status(404).json({ message: 'Book not found' });
  res.status(200).json(bookForId);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  const newBookCreate = await BookService.create({ title, author, pageQuantity });

  res.status(201).json(newBookCreate);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const updatedBook = await BookService.update(id, { title, author, pageQuantity });

  if (!updatedBook) res.status(404).json({ message: 'Book not Found' });
  res.status(200).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const bookremoved = await BookService.remove(id);

  if (!bookremoved) res.status(500).json({ message: 'Book not exists' });
  res.status(200).end();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};