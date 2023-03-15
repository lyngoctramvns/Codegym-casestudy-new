const Koa = require('koa');
// const json = require('koa-json');
const KoaRouter = require('koa-router');
const koaBody = require('koa-body');
const router = require("./router");
const cors = require('@koa/cors');

const port = 3100
const app = new Koa();

app.use(cors());

// middleware 

app.use(async (ctx, next) => {
    await koaBody({
      includeUnparsed: true,
      formLimit: 1500000,
      jsonLimit: 1500000
    })(ctx, next);
  });


app.use(router());

app.listen(3200);