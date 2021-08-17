const { By, Key, until } = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    { performance } = require('perf_hooks');

module.exports = {
    query: null, url: null, edata: null, data: { Query: [], Link: [], Screenshot: [], performance: [] }, options: new chrome.Options(), dirver: 0,
    async screenshot(url) {
        await this.driver.get(url);
        this.data.Screenshot.push({ [url]: `data:image/png;base64,${await this.driver.takeScreenshot()}` });
    },
    async scrap(query, edata) {
        if (edata && query) {
            this.query = query;
            this.edata = edata;
            // Main loop
            this.data.timestamp = performance.now();
            for (const [k, v] of Object.entries(this.edata)) {
                if (k == "Options") {
                    // Set Browser options
                    for (var arg of v) this.options.addArguments(`--${arg}`);
                    this.driver = chrome.Driver.createSession(new chrome.Options(this.options), new chrome.ServiceBuilder().build());
                    this.driver.manage().window().maximize();
                } else if (k == "Main") {
                    // Request URL
                    this.url = eval(v);
                    this.data.Query.push(this.query);
                    this.data.Link.push(this.url);
                    if (this.driver) this.screenshot(this.url);
                    else return { message: "Out of service" };
                } else if (k == "Login") {
                    // Login site
                    for (var ck of v) await this.driver.executeScript(ck);
                    this.screenshot(this.url);
                } else {
                    this.data[k] = this.data[k] || [];
                    v.Url && this.screenshot(this.url + v.Url);
                    v.Script && await this.driver.executeScript(v.Script);
                    // Heavy loop 1
                    for (var elem of await this.driver.wait(until.elementsLocated(By.xpath(v.xpath)), 5000).catch(() => { return [null] })) {
                        if (typeof v.func === "string" && elem) {
                            var tmpd = await eval(v.func).catch(err => { return null });
                            tmpd ? v.pattern ? this.data[k].push([...tmpd.matchAll(v.pattern)].toString().split(',')) : this.data[k].push(tmpd) : null;
                        }
                        else if (elem) {
                            var tmp = {};
                            // Heavy loop 2
                            for (const [k1, v1] of Object.entries(v.func)) {
                                var rslt = await eval(v1).catch(() => { return null });
                                rslt ? rslt.length ? tmp[k1] = rslt : null : null;
                            }
                            Object.keys(tmp).length ? this.data[k].push(tmp) : null;
                        }
                    }
                    var rslt = [...new Set(this.data[k].flat())];
                    rslt.length === 1 ? this.data[k] = rslt[0] : this.data[k] = rslt;
                }
            }
            this.data.performance.push(performance.now() - this.data.timestamp);
            this.driver.quit();
            delete this.data.timestamp;
        } else return "You need to set username and edata";
        return this.data;
    }
}