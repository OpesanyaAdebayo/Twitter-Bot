let google = require('googleapis');
let googleAuth = require('google-auth-library');
var fs = require('fs');
let url;

const TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + '/.credentials/';
const TOKEN_PATH = TOKEN_DIR + 'sheets.googleapis.com-nodejs-quickstart.json';


const getOAuthClient = () => {
    let clientId = process.env.GOOGLE_CLIENT_ID;
    let clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    let redirectUrl = process.env.GOOGLE_REDIRECT_URL;

    const auth = new googleAuth();
    const oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
    return oauth2Client;
};

const checkToken = () => {
    let oauth2Client = getOAuthClient();
    return new Promise((resolve, reject) => {
        fs.readFile(TOKEN_PATH, function (err, token) {
            if (err) {
                const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
                let url = oauth2Client.generateAuthUrl({
                    access_type: 'offline',
                    scope: SCOPES
                });
                resolve(url);
            } else {
                oauth2Client.credentials = JSON.parse(token);
                resolve(oauth2Client);
            }
        });

    });

};

// const getToken = (code) => {
//     return new Promise((resolve, reject) => {
//         if (error) {
//             reject(Error(error));
//         }
//         oauth2Client.setCredentials(token);
//         resolve(token);
//     });
// };

const saveToken = (token) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(TOKEN_DIR, function (error, response) {
            if (error) {
                if (error.code != 'EEXIST') {
                    reject(Error(err));
                }
                if (error.code == 'EEXIST') {
                    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err, response) => {
                        if (err) {
                            reject(Error(err));
                        }
                        resolve(response);

                    });
                }
            }
            else {
                fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err, response) => {
                    if (err) {
                        reject(Error(err));
                    }
                    resolve(response);

                });
            }
        });
    });
};


module.exports = {
    getOAuthClient: getOAuthClient,
    saveToken: saveToken,
    checkToken: checkToken
};