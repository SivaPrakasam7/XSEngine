# XSEngine ( Xpath Scrap Engine using selenium )

Xpath scrap engine using selenium. User identify scraping xpath and create below xpath format.
You should now about xpath structures. 
reference: <a href="https://www.w3schools.com/xml/xpath_intro.asp">Tutorial here</a>

REQUIREMENTS
---
    Current-drirectory# npm install package.json

RUN
---
    Current-directory# node app.js

USE
---
use Xpath like below format 
    
    // SCRAP XPATH FORMAT
    {
        Key: {
            Login:['{for login web site}'],
            Url:'{for url get request}',
            Script:'{Javascript execute}',
            xpath: "{Xpath of tag}",
            func: "elem.getAttribute('src')"
            (or)
            func:{
                key:"elem.getAttribute('alt')",
                key:"elem.getText()",
                key:"{more}"
            }
        }
    }

    // Import module and use

    const Browser = require('./Engine'),
    sample = require('./github');

    browser=new Browser('https://github.com/SivaPrakasam7',sample);
    browser.scrap().then(res => { console.log(res) });

SAMPLE OUTPUT
---

    // This is sample output for scrap github user profile
    {
        Profile: 'https://avatars.githubusercontent.com/u/66865924?v=4',
        Name: [ 'Sivaprakasam', 'SivaPrakasam7' ],
        About: [
            '5 followers · 5 following · 0',
            'sivaprakasam.educationhost.cloud'
        ],
        Achivements: { Img: null, AltText: null },
        Organization: {
            Link: 'https://github.com/CSEKINGS',
            Payload: '{"event_type":"user_profile.click","payload":{"profile_user_id":66865924,"target":"MEMBER_ORGANIZATION_AVATAR","user_id":null,"originating_url":"https://github.com/SivaPrakasam7"}}'
        },
        Projects: [
            {
            Link: 'https://github.com/SivaPrakasam7/WPDRouter',
            Content: [Array]
            },
            {
            Link: 'https://github.com/SivaPrakasam7/SivaPrakasam7.github.io',
            Content: [Array]
            },
            {
            Link: 'https://github.com/SivaPrakasam7/ISPLOIT',
            Content: [Array]
            },
            {
            Link: 'https://github.com/SivaPrakasam7/SociaLod',
            Content: [Array]
            },
            {
            Link: 'https://github.com/SivaPrakasam7/NodeAuth',
            Content: [Array]
            }
        ],
        Activity: [],
        Social: []
    }