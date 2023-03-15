const fs = require('fs');
const path = require("path");

//Thêm một dữ liệu tùy chọn vào file json
async function insertData(pathname,beginningObject){
    try {

    const data = JSON.parse(fs.readFileSync(pathname, 'utf8'));

    data.unshift(beginningObject);

    fs.writeFileSync(pathname, JSON.stringify(data, null, 2), (err) => {
        if(err) {
            console.log(err);
            return;
        };
    });
    } catch (e){
        console.log("editData Fail", e);
    }

};

module.exports = {insertData};

