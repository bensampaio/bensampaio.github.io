var fs = require('fs');

var DB_PATH = __dirname + '/../../db/';
var TOTAL_PARSED = 0, TOTAL_TO_PARSE = 0, PARSE_ERRORS = [];

/**
 * Additional meta information to include
 */
 var METADATA = (function() {

 	var languages = {
		portuguese : { code : 'pt', level : 'Native' },
		english : { code : 'en', level : 'Proficient' },
		german : { code : 'ge', level : '' }
	};

	var institutions = {
		banif : {
			url : 'http://www.banif.pt/',
			logo : 'bnf.gif'
		},
		safira : {
			url : 'http://www.safira.pt',
			logo : 'safira.jpg'
		},
		coggitare : {
			url : 'http://www.coggitare.com/forum/',
			logo : false
		},
		unl : {
			url : 'http://www.fct.unl.pt/',
			logo : 'unl.png'
		},
		tud : {
			url : 'http://tu-dresden.de/en',
			logo : 'tud.png'
		}
	};

 	return {
 		getLanguage : function(name) {
 			return languages[name.toLowerCase()];
 		},

 		getInstitution : function(name) {
 			return institutions[name.toLowerCase()];
 		}
 	}

 })();


/**
 * Parse Data Sections
 */

var parseBasic = function(firstName, lastName, picture, callback) {
	var file = DB_PATH + 'basic.json';

	fs.readFile(file, { encoding : 'utf8' }, function(err, data) {
		if(err)
			return parseCallback(err, callback);

		data = JSON.parse(data);

		data.firstName = firstName;
		data.lastName = lastName;
		data.fullName = firstName + " " + lastName;
		data.picture = picture;		

		fs.writeFile(file, JSON.stringify(data), function(err) {
			return parseCallback(err, callback);
		});

	});
}

var parseInfo = function(summary, email, url, phones, languages, skills, callback) {
	var file = DB_PATH + 'info.json';

	fs.readFile(file, { encoding : 'utf8' }, function(err, data) {
		if(err)
			return parseCallback(err, callback);

		data = JSON.parse(data);

		// Parse summary
		data.summary = parseText(summary).slice(0, 2);

		// Parse E-mail
		data.emails = [{
			type : "primary",
			value : email
		}];

		// Parse Phones
		data.phones = [];
		for(var i = 0; i < phones.length; i++) {
			data.phones.push({
				type : phones[i].phoneType,
				value : phones[i].phoneNumber
			});
		}

		// Parse Languages
		data.languages = [];
		for(var i = 0; i < languages.length; i++) {
			var lang = languages[i];
			var meta = METADATA.getLanguage(lang.language.name);

			if(meta) {
				data.languages.push({
					name : lang.language.name,
					code : meta.code,
					level : meta.level
				});
			}
		}

		// Parse Skills
		data.skills = [];
		for(var i = 0; i < skills.length; i++) {
			data.skills.push({
				name : skills[i].skill.name,
				code : skills[i].skill.name.toLowerCase().replace(/\s+/g, '')
			});
		}

		// Parse Pages
		if(data.pages && data.pages.length > 0) {
			data.pages[0].url = url;
		}

		fs.writeFile(file, JSON.stringify(data), function(err) {
			return parseCallback(err, callback);
		});

	});
};

var parseExperience = function(list, callback) {
	var file = DB_PATH + 'experience.json';
	
	fs.readFile(file, { encoding : 'utf8' }, function(err, data) {
		if(err)
			return parseCallback(err, callback);

		data = [];

		for(var i = 0; i < list.length; i++) {
			var position = list[i];
			var institution = false;
			var meta = METADATA.getInstitution(position.company.name);

			if(meta) {
				institution = meta;
				institution.name = position.company.name;
			}

			data.push({
				title : position.title,
				institution: institution,
				period : {
					from : position.startDate,
					to : position.endDate || ''
				},
				summary : parseText(position.summary)
			});
		}

		fs.writeFile(file, JSON.stringify(data), function(err) {
			return parseCallback(err, callback);
		});
	});
}

var parseEducation = function(list, callback) {
	var file = DB_PATH + 'education.json';
	
	fs.readFile(file, { encoding : 'utf8' }, function(err, data) {
		if(err)
			return parseCallback(err, callback);

		data = [];

		for(var i = 0; i < list.length; i++) {
			var education = list[i];
			var institution = false;
			var meta = METADATA.getInstitution(education.schoolName.match(/[A-Z]/g).join(''));

			if(meta) {
				institution = meta;
				institution.name = education.schoolName;
			}

			data.push({
				degree : education.degree,
				field : education.fieldOfStudy,
				institution: institution,
				period : {
					from : education.startDate,
					to : education.endDate || ''
				},
				summary : parseText(education.notes)
			});
		}

		fs.writeFile(file, JSON.stringify(data), function(err) {
			return parseCallback(err, callback);
		});
	});
}

var parseProjects = function(list, callback) {
	var file = DB_PATH + 'projects.json';
	
	fs.readFile(file, { encoding : 'utf8' }, function(err, data) {
		if(err)
			return parseCallback(err, callback);

		data = [];

		for(var i = 0; i < list.length; i++) {
			var project = list[i];
			var institution = false;
			var meta = null;

			// Separate project name by a hyphen between spaces (left side is institution name and right is project name)
			var projectNameParts = project.name.split(/\s*-\s*/);

			if(projectNameParts.length > 1) {
				project.name = projectNameParts[1];
				project.institutionName = projectNameParts[0];

				meta = METADATA.getInstitution(project.institutionName.match(/\w+/g).join('_'));

				if(meta) {
					institution = meta;
					institution.name = project.institutionName;
				}
			}

			data.push({
				name : project.name,
				url : project.url,
				desc : parseText(project.description),
				institution : institution
			});
		}

		fs.writeFile(file, JSON.stringify(data), function(err) {
			return parseCallback(err, callback);
		});
	});
}

/**
 * Parse Utils
 */
var parseText = function(string) {
	var contents = [];

	if(string) {
		var paragraphs = string.split('\n');
		var itemsList = null;

		for(var i = 0; i < paragraphs.length; i++) {
			var paragraph = paragraphs[i];
			if(paragraph) {
				if(paragraph.charAt(0) == '-') {
					if(!itemsList) {
						itemsList = [];
					}
					itemsList.push(paragraph.slice(2));
				}
				else {
					if(itemsList) {
						contents.push(itemsList);
						itemsList = null;
					}
					contents.push(paragraph);
				}
			}
		}
	}

	return contents;
}

var parseCallback = function(err, callback) {
	if(err) PARSE_ERRORS.push(err);
	TOTAL_PARSED++;

	if(TOTAL_PARSED == TOTAL_TO_PARSE) {
		callback(PARSE_ERRORS);
	}
}

exports.parseAndStore = function(results, callback) {
	PARSE_ERRORS = [];
	TOTAL_PARSED = 0;
	TOTAL_TO_PARSE = 5;

	parseBasic(results.firstName, results.lastName, results.pictureUrl, callback);
	parseInfo(results.summary, results.emailAddress, results.publicProfileUrl, results.phoneNumbers.values, results.languages.values, results.skills.values, callback);
	parseExperience(results.positions.values, callback);
    parseEducation(results.educations.values, callback);
    parseProjects(results.projects.values, callback);
};
