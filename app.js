const Browser = require('./Engine'),
    sample = require('./github');

(async () => {
    Browser.username = "SivaPrakasam7";
    Browser.edata = sample;
    console.log(await Browser.scrap());
})();