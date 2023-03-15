//Delete dữ liệu từ JSON
const fs = require('fs');
const path = require('path');

async function deleteData(pathname){

    try {

    const data = JSON.parse(fs.readFileSync(pathname, 'utf8'));

    data.pop();

    fs.writeFileSync(pathname, JSON.stringify(data), null, 2);
    }catch (e) {
        console.log("deleteData fail", e);
    }
};

module.exports = {deleteData};