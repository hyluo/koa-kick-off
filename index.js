require('dotenv').config();

const axios = require('axios');
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  if (ctx.path !== '/chatbase') return next();

  axios
    .post(process.env.host, {
      api_key: process.env.api_key,
      type: 'user',
      platform: 'Facebook',
      message: "ok it's end",
      intent: 'koa end',
      version: '1.0',
      user_id: 'user-00'
    })
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });

  ctx.body = 'Hello World';
});

app.use(async (ctx, next) => {
  if (ctx.path !== '/') return next();

  ctx.body = 'Hello World';
});

//console.log('apikey:', process.env.api_key);
app.listen(3000);
