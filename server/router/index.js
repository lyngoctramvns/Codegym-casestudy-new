const combineRouters = require('koa-combine-routers');
const testPortalRouter = require("./testPortalRouter");

const router = combineRouters(
    testPortalRouter
    )

module.exports = router;