const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesJson = path.resolve(__dirname, './movies.json');
const readJson = async () => {
  try {
    const data = await fs.readFile(moviesJson);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Não foi possível ler o arquivo : ${error}`);
  }
};

readJson();

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readJson();
  const readMovies = movies.find((movie) => movie.id === Number(id));
  res.status(200).json(readMovies);
});

app.get('/movies', async (req, res) => {
  const movie = await readJson();
  res.status(200).json(movie);
});

const addNewMovie = async (movie) => {
  try {
    const currentMovies = await readJson();
    const allMovies = JSON.stringify([...currentMovies, movie]);
    await fs.writeFile(moviesJson, allMovies);
  } catch (error) {
    console.error(`Não foi possivel adicionar um novo filme : ${error}`);
  }
};

app.post('/movies', async (req, res) => {
  const currentMovies = await readJson();
  const { movie, price } = req.body;
  const newMovies = {
    id: currentMovies[currentMovies.length - 1].id + 1,
    movie,
    price,
  };

  const newMovie = await addNewMovie(newMovies);
  return res.status(201).json({ movie: newMovie });
});

const updatedMovies = async ({ id, movie, price }) => {
  try {
    const allMovies = await readJson();
    const index = allMovies.findIndex((movieNow) => movieNow.id === Number(id));
    allMovies[index] = {
      id: Number(id),
      movie,
      price,
    };
    const updatedMovie = JSON.stringify(allMovies, null, 2);
    await fs.writeFile(moviesJson, updatedMovie);
  } catch (error) {
    console.error(`Filme não alterado : ${error}`);
  }
};

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;

  const upMovie = await updatedMovies({ id, movie, price });
  return res.status(200).json({ movieUP: { upMovie } });
});

const deleteMovies = async (id) => {
  try {
    const allMovies = await readJson();
    const index = allMovies.filter((movieNow) => movieNow.id !== Number(id));
    const moviesNow = JSON.stringify(index, null, 2);
    await fs.writeFile(moviesJson, moviesNow);
  } catch (error) {
    console.error(`Filme não alterado : ${error}`);
  }
};

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  await deleteMovies(id);
  return res.status(204).end();
});

module.exports = app;