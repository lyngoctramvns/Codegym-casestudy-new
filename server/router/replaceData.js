const fs = require('fs');
const path = require("path");

//thay thế data ở vị trí thứ 3
async function replaceData(pathname,index,idObject) {
    try {

        const replaceContent = JSON.parse(fs.readFileSync(pathname, 'utf8'));

        replaceContent.splice(index, 1, idObject);

        fs.writeFileSync(pathname, JSON.stringify(replaceContent, null, 2), (err) => {
            if (err) {
                console.log(err);
                return;
            };
        });
    } catch (e) {
        console.log("appendData fail", e);
    };
};

module.exports = {replaceData};