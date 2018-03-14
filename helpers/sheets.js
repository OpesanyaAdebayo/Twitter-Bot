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

module.exports = writeToSheet;