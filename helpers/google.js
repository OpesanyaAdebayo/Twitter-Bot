let google = require('googleapis');
let googleAuth = require('google-auth-library');
let fs = require('fs');



const TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + '/.credentials/';
const TOKEN_PATH = TOKEN_DIR + 'sheets.googleapis.com-nodejs-quickstart.json';

// Load client secrets from a local file.
const getOAuthClient = () => {
    let clientId = process.env.GOOGLE_CLIENT_ID;
    let clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    let redirectUrl = process.env.GOOGLE_REDIRECT_URL;

    const auth = new googleAuth();
    const oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
    return oauth2Client;
};

const getAuthUrl = () => {
    let oauth2Client = getOAuthClient();
    const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
    let url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });
    return url;
};

const getToken = (code) => {
    return new Promise((resolve, reject) => {
        if (error) {
            reject(Error(error));
        }
        oauth2Client.setCredentials(token);
        resolve(token);
    });
};

const saveToken = (token) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(TOKEN_DIR, function (error, response) {
            if (error) {
                if (error.code != 'EEXIST') {
                    reject(Error(err));
                }
                if (error.code == 'EEXIST') {
                    resolve(fs.writeFile(TOKEN_PATH, JSON.stringify(token)));
                    console.log("Success!");
                }
            }
            resolve(fs.writeFile(TOKEN_PATH, JSON.stringify(token)), function(err, response) {
                if (err.code != 'EEXIST') {
                    reject(Error(err));
                }
                if (err.code == 'EEXIST') {
                    resolve("Success");
                    console.log("Success!");
                }
            });

        });
    });
};


module.exports = {
    getOAuthClient: getOAuthClient,
    getAuthUrl: getAuthUrl,
    saveToken: saveToken
};