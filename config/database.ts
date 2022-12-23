export default ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "34.171.80.28"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "adease"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "123"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
