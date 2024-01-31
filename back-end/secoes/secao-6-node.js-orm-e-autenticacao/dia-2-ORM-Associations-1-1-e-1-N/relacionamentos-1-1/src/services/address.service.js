const { Address } = require('../models');

const getAllByEmployeeId = async (employeeId) => {
  const address = await Address.findAll({ where: { employeeId } });

  return address;
};

module.exports = {
  getAllByEmployeeId,
};