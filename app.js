const Browser = require('./Engine'),
    sample = require('./github');

browser=new Browser('SivaPrakasam7',sample);
browser.scrap().then(res => { console.log(res) });