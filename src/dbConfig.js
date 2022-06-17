// DB_ENVIRONMENT comes from heroku too
const dbEngine = process.env.DB_ENVIRONMENT || "development";
const config = require("connect")[dbEngine];

module.exports = require("")(config);
