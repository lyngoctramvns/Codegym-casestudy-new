const Router = require('koa-router');
const testPortalRouter = new Router({ prefix: '/shop' })
const json = require('koa-json');
const fs =  require('fs');
const path = require("path");
const {insertData} = require('./editData');
const {replaceData} = require('./replaceData');
const {appendData} = require('./appendData');
const {deleteData} = require('./deleteData');

testPortalRouter.post("/postData", (ctx) => getText(ctx));
testPortalRouter.get("/getData", (ctx) => showText(ctx));

//read file JSON khi get Data
async function showText(ctx) {
    try {
    const pathname = path.join(__dirname, "../handleData.json");

    const data = JSON.parse(fs.readFileSync(pathname, 'utf8'));
    ctx.body = data;
    } catch (e) {
        console.log("readFile false", e);
    };

};

//nhận data về router

async function getText(ctx) {
    let result = {
        sucess: false,
        text: "get false",
    }
    let params = ctx.request.body

    try {
        let domain = params.domain;
        let token = params.token;
        const user = {
            first_name: params.firstname,
            last_name: params.lastname,
            email: params.email,
        };
        const pathname =  path.join(__dirname, "../handleData.json");
        await deleteData(pathname);
        await appendData(pathname,user);
        if (domain == "tramln" && token == "1207") {
            result = {
                sucess: true,
                text: "get done",
            }
        }
        const beginningObject = {
            email: "test@gmail.com",
            first_name: "firstname",
            last_name: "lastname"
        }
        //thêm 1 phần tử vào đầu file
        await insertData(pathname, beginningObject);

        const replaceObject = {
            email: "replacetest@gmail.com",
            first_name: "replace",
            last_name: "two"
        }
        //thay thế 1 phần tử
        await replaceData(pathname,2,replaceObject);


    } catch (e) {
        console.log("getText false", e);
    };
    ctx.body = result

}

module.exports = testPortalRouter;