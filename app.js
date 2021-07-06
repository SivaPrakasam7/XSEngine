const Browser = require('./Engine'),
    sample = require('./github');

browser=new Browser('https://github.com/SivaPrakasam7',sample);
browser.scrap().then(res => { console.log(res) });