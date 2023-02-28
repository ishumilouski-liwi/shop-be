"use strict";

const products = require("../products.json");
const { request } = require("../utils/request");

module.exports.getProductById = async (event) => {
  const { productId } = event.pathParameters;

  return request({
    statusCode: 200,
    body: products.find((product) => product.id === productId),
  });
};
