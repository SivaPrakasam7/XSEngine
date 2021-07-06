const { Builder, By, Key, until } = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    options = new chrome.Options();
options.addArguments('--disable-popup-blocking');
options.addArguments('--disable-notifications');
// options.addArguments('--headless'); // Hidden browser
// options.addArguments('--proxy-server=socks5://localhost:9050'); // Set Proxy server
options.addArguments('--disable-default-apps');

module.exports = class Browser {
    constructor(url, edata,options) {
        this.url = url;
        this.edata = edata;
        this.data = {};
        this.driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();
    }
    async scrap() {
        try {
            await this.driver.get(this.url);
            for (const [k, v] of Object.entries(this.edata)) {
                if (k == "Login") {
                    for (var ck of v) await this.driver.executeScript(ck);
                    await this.driver.get(this.url);
                } else {
                    if (v.Url) await this.driver.get(this.url + v.Url);
                    if (v.Script) await this.driver.executeScript(v.Script);
                    this.data[k] = [];
                    for (var elem of await this.driver.wait(until.elementsLocated(By.xpath(v.xpath)), 10000).catch(() => { return [null] })) {
                        if (typeof v.func === "string" && elem) { this.data[k].push(await eval(v.func).catch(err => { return null })); }
                        else if (elem) {
                            var tmp = {};
                            for (const [k1, v1] of Object.entries(v.func)) { tmp[k1] = await eval(v1).catch(() => { return null }) };
                            this.data[k].push(tmp);
                        }
                        // console.log(this.data[k]);
                    }
                    this.data[k] = [...new Set(this.data[k])];
                    while (true) {
                        if (this.data[k].length == 1) {
                            this.data[k] = this.data[k][0];
                        } else break;
                    }
                }
            }
        } catch (err) {
            console.log(err);
        } finally {
            await this.driver.quit();
        }
        return this.data;
    }
}