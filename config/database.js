module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'intromanart.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'hpxbzlti_strapi_db'),
      user: env('DATABASE_USERNAME', 'hpxbzlti_strapi'),
      password: env('DATABASE_PASSWORD', 'gua]Bereb5dE'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
