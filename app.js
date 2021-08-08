const Browser = require('./Engine'),
    sample = require('./site');

(async () => {
    Browser.username = "https://nmap.org";
    Browser.edata = sample;
    console.log(await Browser.scrap());
})();