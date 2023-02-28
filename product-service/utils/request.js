module.exports.request = async (params) => ({
  statusCode: params.statusCode,
  headers: {
    "Access-Control-Allow-Origin": "*",
    ...params.headers,
  },
  body: JSON.stringify(params.body),
});
