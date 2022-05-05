import banifLogo from './banif.jpg';
import cubicLogo from './cubic.png';
import epikLogo from './epik.png';

export default [ {
    "name": "Banif - Credit Workflow Process",
    "video": null,
    "desc": `
        Web platform that implements the credit workflow process of Banif (one of Portuguese main banks):
        * Account managers on any branch could start the process by creating a new proposal for a client;
        * A proposal would then be sent for evaluation by a bank analyst;
        * After analysis the proposal would pass by a decision process where it could suffer some changes. This process could be composed by one or more decision levels. The number of levels was dependent on the client situation and proposal conditions. On each level there were two or three users that could suggest changes and if both agreed they would pass to the next level.
        * The results of the decision process would determine if the proposal was authorized or not.
        * Independently of the decision result, the proposal would be sent back to the account manager that created it so he could present it to the client who would then decide to accept or refuse.
        For each new proposal created, the system would load client information from the Central Database of the Portuguese Bank (BdP). The user pools for each phase of the process would be loaded from the internal bank databases, and if a proposal was approved by the bank it would be stored there.
        Technologies used: WebSphere (IBM BPM 8.0.1 and IBM ODM 8.0.1), JavaScript (Client and Server side), jQuery, Dojo, Twitter Bootstrap, HTML, CSS, XML, JSON, Java, and Microsoft SQL Server.
    `,
    "institution": { "url": "http://www.banif.pt/", "logo": banifLogo, "name": "Banif" }
}, {
    "name": "Google Chrome Extension - Web Inspector",
    "url": "https://chrome.google.com/webstore/detail/web-inspector/enibedkmbpadhfofcgjcphipflcbpelf?utm_source=chrome-ntp-icon",
    "video": null,
    "desc": `
        Chrome extension that allows users to inspect a web page contents and properties by clicking on certain page elements. Some examples:
        * If a text element is clicked it will display the font used, the text size, the text color, and background color.
        * If a link is clicked, besides the properties above, its source will also be displayed;
        * If a image or video is clicked its dimensions and source URL will be displayed.
        Technologies used: JavaScript, jQuery, Chrome API, CSS3, HTML5.
    `,
    "institution": null
}, {
    "name": "Epik",
    "url": "http://epik.di.fct.unl.pt/epik",
    "video": "//www.youtube.com/embed/PfHJn1gS4OE",
    "desc": `
        Epik (Edutainment by Playing and Interacting with Knowledge) is a web application for educational games development. It allows teachers to create activities for their students in the form of games. Those activities can be provided using a URL and for each one are generated activity logs that could be used for students assessment.
        Technologies used: JavaScript, jQuery, KineticJS, JSON, HTML5, CSS3, PHP, CakePHP, NodeJS, XML, XML Schema, MySQL.
    `,
    "institution": { "url": "", "logo": epikLogo, "name": "Epik" }
}, {
    "name": "Cubic",
    "url": "http://epik.di.fct.unl.pt/moodle/",
    "video": null,
    "desc": `
        Cubic is a new theme for Moodle 2.3. Its objective is to provide users with a more user-friendly interface, which provides several forms of social awareness and some new concepts.
        Besides this theme, I also developed other plugins for Moodle which can be found here: [https://moodle.org/plugins/browse.php?list=set&id=31](https://moodle.org/plugins/browse.php?list=set&id=31).
        Technologies used: JavaScript, JSON, YUI, HTML5, CSS3, PHP, XML, MySQL.
    `,
    "institution": { "url": "", "logo": cubicLogo, "name": "Cubic" }
}, {
    "name": "Coggitare - Forum",
    "url": "http://coggitare.com/forum",
    "video": null,
    "desc": `
        Initially this project purpose was to provide users with scientific information about Vitamin-D. The development was finished but unfortunately the project had to be canceled, so now a simpler version of the website is being used on a new project still under construction.
        Technologies used: JavaScript, jQuery, HTML5, CSS3, PHP, CakePHP, and MySQL.
    `,
    "institution": { "url": "http://www.coggitare.com/forum/", "logo": null, "name": "Coggitare" }
} ]