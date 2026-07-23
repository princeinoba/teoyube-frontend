const promiseSeedPayload = require("../../src/data/promiseSeeds.json");

module.exports = function handler(_request, response) {
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
  response.status(200).json(promiseSeedPayload);
};
