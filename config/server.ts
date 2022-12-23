export default ({ env }) => ({
  host: env("HOST", "https://adease-server-lf74kthi5-quanguway.vercel.app"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
