const fs = require('fs').promises;

const { join } = require('path');

const readCacautrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacautrybeFile();
  return cacauTrybe.chocolates;
};

const getAllChocolateById = async (id) => {
  const cacauTrybe = await readCacautrybeFile();
  return cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);
};

const getAllChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacautrybeFile()
  return cacauTrybe.chocolates.filter((chocolate) => chocolate.brandId === brandId);
}

module.exports = {
  getAllChocolates,
  getAllChocolateById,
  getAllChocolatesByBrand,
};