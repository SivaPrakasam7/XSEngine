# XSEngine ( Xpath Scrap Engine using selenium )

Xpath scrap engine using selenium. User identify scraping xpath and create below xpath format.
You should now about xpath structures. 
reference: <a href="https://www.w3schools.com/xml/xpath_intro.asp">Tutorial here</a>

REQUIREMENTS
---
    Current-drirectory# npm install

RUN
---
    Current-directory# node app.js

USE
---
Refer input format from site.js


SAMPLE OUTPUT
---

    // This is sample output for scrap github user profile
    {
        Profile: 'https://avatars.githubusercontent.com/u/66865924?v=4',
        Name: [ 'Sivaprakasam', 'SivaPrakasam7' ],
        About: [
            '5 followers · 5 following · 2',
            'sivaprakasam.educationhost.cloud'
        ],
        Achivements: { Img: null, AltText: null },
        Organization: {
            Link: 'https://github.com/CSEKINGS',
            Payload: '{"event_type":"user_profile.click","payload":{"profile_user_id":66865924,"target":"MEMBER_ORGANIZATION_AVATAR","user_id":null,"originating_url":"https://github.com/SivaPrakasam7"}}'
        },
        Projects: [
            {
            Link: 'https://github.com/SivaPrakasam7/ISPLOIT',
            Content: [Array]
            },
            {
            Link: 'https://github.com/CSEKINGS/book_donation_backend',
            Content: [Array]
            },
            {
            Link: 'https://github.com/SivaPrakasam7/XSEngine',
            Content: [Array]
            },
            {
            Link: 'https://github.com/SivaPrakasam7/WPDRouter',
            Content: [Array]
            },
            {
            Link: 'https://github.com/SivaPrakasam7/NodeAuth',
            Content: [Array]
            },
            {
            Link: 'https://github.com/SivaPrakasam7/SociaLod',
            Content: [Array]
            }
        ],
        Activity: [
            [
            'Created 30 commits in 3 repositories',
            'CSEKINGS/book_donation_backend',
            '17 commits',
            'SivaPrakasam7/XSEngine',
            '12 commits',
            'SivaPrakasam7/NodeAuth',
            '1 commit'
            ],
            [
            'Created 1 repository',
            'SivaPrakasam7/XSEngine',
            'JavaScript',
            'Jul 6'
            ]
        ]
    }