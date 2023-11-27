module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: env('','https://a631-99-1-35-117.ngrok.io'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5b534e3c9392be6bbb1153e2594947e6'),
    },
  },
});
