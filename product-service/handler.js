'use strict';

const { getProductById } = require('./handlers/getProductById');
const { getProducts } = require('./handlers/getProducts');

module.exports = {
  getProductById,
  getProducts
}