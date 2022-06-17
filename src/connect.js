module.exports = {
  development: {},
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tablename: "test_migrations",
      directory: "./migrations",
    },
  },
};
