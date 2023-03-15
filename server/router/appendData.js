const fs = require('fs');
const path = require('path');

//write vào file JSON khi post data
//Note: router nào thì read, write đó
async function appendData(pathname,users){

    try {

    const data = JSON.parse(fs.readFileSync(pathname, 'utf8'));
    data.push(users);
    
    fs.writeFileSync(pathname, JSON.stringify(data), null, 2);
    } catch (e) {
        console.log("pushData fail", e);
    }
};

module.exports = {appendData};