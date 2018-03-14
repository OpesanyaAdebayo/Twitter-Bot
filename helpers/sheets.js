let googleapis = require("googleapis");
let google = require("./google");
let sheets = googleapis.sheets('v4');

let writeToSheet = (userData) => {
    return new Promise((resolve, reject) => {
        google.checkToken().then((auth) => {
            sheets.spreadsheets.values.append({
                auth: auth,
                spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
                range: 'names!A2:D500',
                valueInputOption: 'USER_ENTERED',
                insertDataOption: 'INSERT_ROWS',
                resource: {
                    values: userData,
                    majorDimension: 'ROWS'
                }
            }, (err, response) => {
                if (err) {
                    reject(Error(err));
                } else {
                    resolve("DONE!");
                }
            });

        });

    });
};

module.exports = writeToSheet;