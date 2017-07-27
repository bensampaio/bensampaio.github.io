var express = require('express');
var bodyParser  = require('body-parser');
var utils = require('./libs/utils');

var app = express();
var router = express.Router();

var mainView = '/index.html';
var LinkedIN = {
    lib : null,
    loader : null,
    currentAccessToken : null,
    paths : {
        connect : '/linkedin/connect',
        callback : '/linkedin/connect/callback',
        load : '/linkedin/load',
        done : '/linkedin/done'
    },
    parser : require('./libs/linkedin/parser')
};


// Routing and public files
app.use(router);
app.use('/public', express.static(__dirname + '/public'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/db', express.static(__dirname + '/db'));

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  return res.sendFile(__dirname + mainView);
});

app.post(LinkedIN.paths.connect, function (req, res) {
    var fields = req.body;
    var host = server.address().address;
    var port = server.address().port;

    LinkedIN.currentAccessToken = fields.oauthUserToken;

    LinkedIN.lib = require('node-linkedin')(fields.apiKey, fields.apiSecret, 'http://' + host + ':' + port + LinkedIN.paths.callback);

    LinkedIN.loader = LinkedIN.lib.init(LinkedIN.currentAccessToken);

    LinkedIN.lib.auth.authorize(res, ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_contactinfo']);
});

app.get(LinkedIN.paths.callback, function (req, res) {
    LinkedIN.lib.auth.getAccessToken(res, req.query.code, function(err, results) {
        if (err) {
            console.error(err);
            res.redirect('/#' + LinkedIN.paths.done);
        }

        results = JSON.parse(results);

        LinkedIN.currentAccessToken = results.access_token;

        return res.redirect('/#' + LinkedIN.paths.load);
    });
});

app.post(LinkedIN.paths.load, function (req, res) {
    var fields = req.body;

    LinkedIN.loader = LinkedIN.lib.init(LinkedIN.currentAccessToken);

    if(fields.profile) {
        var profileFields = [
            'first-name',
            'last-name',
            'picture-url',
            'summary',
            'email-address',
            'phone-numbers',
            'public-profile-url',
            'languages',
            'skills',
            'interests',
            'positions',
            'educations',
            'projects'
        ];

        LinkedIN.loader.people.me(profileFields, function(err, results) {
            if (err) {
                console.error(err);
                return false;
            }

            LinkedIN.parser.parseAndStore(results, function(errs) {
                if(errs.length > 0) console.log(errs);

                return res.redirect('/#' + LinkedIN.paths.done + '?success=' + (!errs || errs.length == 0));
            });
        });
    }
});

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
});
