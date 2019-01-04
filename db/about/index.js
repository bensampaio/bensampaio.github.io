import angularLogo from './angularjs.png';
import bowerLogo from './bower.png';
import cssLogo from './css.png';
import expressLogo from './express.png';
import gruntLogo from './grunt.png';
import htmlLogo from './html.png';
import jsLogo from './js.png';
import jsonLogo from './json.png';
import linkedinLogo from './linkedin.png';
import nodeLogo from './nodejs.png';
import responsiveLogo from './responsive.png';
import sassLogo from './sass.png';

export default {
	"goal" : [
		"I created this site to present the most interesting and relevant aspects about me and my work in a more clean and simplified way. Besides that, creating this website was also a way to get some pratice with several technologies and concepts I wasn't very familiar with, suchs as, SASS, AngularJS, and Responsive Design."
	],
	"technologies" : {
		"summary" : [
			"For this website development were used the usual Web technologies (HTML5, CSS3, JS), including some of the most used client-side frameworks at the moment (SASS and AngularJS). For server-side logic were used Node.js with express framework. To populate the website sections I decided to use the LinkedIn API, this way its possible to load profile data directly from LinkedIn without having to duplicate it manually each time something needs to be changed.",
			"The website was tested on the most recent desktop and mobile browsers, such as, Google Chrome, Mozilla Firefox, Safari, Opera, and IE11.",
			"If you would like to check the code or if you would like to create your own website using this layout you can find the repository and documentation <a href='https://github.com/bensampaio/bensampaio.github.io' target='_blank'>here</a>."
		],
		"client" : [
			{
				"id" : "html",
				"url" : "http://www.w3.org/TR/html5/",
				"desc" : "HTML",
				"logo": htmlLogo,
			},
			{
				"id" : "css",
				"url" : "http://www.w3.org/TR/CSS/",
				"desc" : "CSS",
				"logo": cssLogo,
			},
			{
				"id" : "js",
				"url" : "",
				"desc" : "JavaScript",
				"logo": jsLogo,
			},
			{
				"id" : "responsive",
				"url" : "",
				"desc" : "Responsive",
				"logo": responsiveLogo,
			},
			{
				"id" : "sass",
				"url" : "http://sass-lang.com/",
				"desc" : "3.4",
				"logo": sassLogo,
			},
			{
				"id" : "angularjs",
				"url" : "https://angularjs.org/",
				"desc" : "1.3",
				"logo": angularLogo,
			}
		],
		"server" : [
			{
				"id" : "nodejs",
				"url" : "http://nodejs.org/",
				"desc" : "0.10",
				"logo": nodeLogo,
			},
			{
				"id" : "express",
				"url" : "http://expressjs.com/",
				"desc" : "4",
				"logo": expressLogo,
			},
			{
				"id" : "linkedin",
				"url" : "https://developer.linkedin.com/apis",
				"desc" : "API",
				"logo": linkedinLogo,
			},
			{
				"id" : "json",
				"url" : "http://www.json.org/",
				"desc" : "JSON",
				"logo": jsonLogo,
			}
		],
		"tools" : [
			{
				"id" : "bower",
				"url" : "http://bower.io/",
				"desc" : "1.3",
				"logo": bowerLogo,
			},
			{
				"id" : "grunt",
				"url" : "http://gruntjs.com/",
				"desc" : "0.4.5",
				"logo": gruntLogo,
			}
		]
	},
	"credits" : {
		"developers" : [
			{
				"name" : "Bruno Sampaio",
				"url" : "https://bensampaio.github.io",
			}
		],
		"designers" : [
			{
				"name" : "Bruno Sampaio",
				"url" : "https://bensampaio.github.io"
			},
			{
				"name" : "Inês Sampaio",
				"url" : "http://cargocollective.com/semente"
			}
		],
		"others" : [
			{
				"name" : "Font Awesome",
				"desc" : "icon set used almost on every section",
				"url" : "http://fortawesome.github.io/Font-Awesome/"
			},
			{
				"name" : "plamenj",
				"desc" : "created the palette of colors used on the main website sections",
				"url" : "http://www.colourlovers.com/lover/plamenj/loveNote",
				"item" : {
					"name" : "GameBookers",
					"url" : "http://www.colourlovers.com/palette/148712/Gamebookers"
				}
			},
			{
				"name" : "Popcic",
				"desc" : "designed the favicon",
				"url" : "https://www.iconfinder.com/popcic",
				"item" : {
					"name" : "icon",
					"url" : "https://www.iconfinder.com/icons/274900/avatar_badge_business_circle_human_id_male_man_people_person_profile_user_icon#size=16"
				}
			},
			{
				"name" : "GoSquared",
				"desc" : "designed the flag icons used for the languages list",
				"url" : "https://www.gosquared.com/",
				"item" : {
					"name" : "icon set",
					"url" : "https://www.gosquared.com/resources/flag-icons/"
				}
			}
		]
	}
}