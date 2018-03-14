let googleapis = require("googleapis");
let google = require("./google");
let sheets = googleapis.sheets('v4');

let writeToSheet = (userData) => {
    google.checkToken().then((auth) => {
        sheets.spreadsheets.values.update({
            auth: auth,
            spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
            range: 'names!A2:D50',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: userData,
                majorDimension: 'ROWS'
            }
        }, (err, response) => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log("DONE!");
            }
        });

    });
};

let clearSheet = () => {
    google.checkToken().then((auth) => {
        return new Promise((resolve, reject) => {
            sheets.clearSheet({
                auth: auth,
                spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
                range: 'names!A2:D50',
            }, (err, response) => {
                if (err) {
                    reject(Error(err));
                } else {
                    resolve(auth);
                }
            });
        });
    });
};

module.exports = {
    writeToSheet: writeToSheet
};