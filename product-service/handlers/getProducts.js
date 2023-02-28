"use strict";

const products = require("../products.json");
const { request } = require("../utils/request");

module.exports.getProducts = async () =>
  request({
    statusCode: 200,
    body: products,
  });
