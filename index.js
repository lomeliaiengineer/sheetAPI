const { google } = require('googleapis');
const moment = require('moment-timezone');
const express = require('express');
const app = express();
//const ngrok = require('ngrok');
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/saveDate', (req, res) => {
    console.log(req.body);
    let { serviceAccount, timezone, data, sheet, spreadsheetId } = req.body
    saveDataSheet(serviceAccount, timezone, data, sheet, spreadsheetId, resp => {
        res.send(resp);
    })

})

function saveDataSheet(serviceAccount, timezone = 'Asia/Dubai', data, sheet, spreadsheetId, callbackFunction) {

    const serviceAccountAuth = new google.auth.JWT({
        email: serviceAccount.client_email,
        key: serviceAccount.private_key,
        scopes: 'https://www.googleapis.com/auth/spreadsheets'
    });

    const sheets = google.sheets('v4');

    console.log('save data in google sheet')
    let range = `${sheet}!A1`;

    let resArray = [moment().tz(timezone), ...data.data];

    sheets.spreadsheets.values.append({
        auth: serviceAccountAuth,
        spreadsheetId: spreadsheetId,
        range: range,
        valueInputOption: 'RAW',
        requestBody: {
            majorDimension: "ROWS",
            values: [
                resArray
            ],
        }
    })
        .then(res => {
            console.log('RESPONSEEEEEEEEEEEEE', resArray, res);
            callbackFunction(res);

        })
        .catch(err => {
            console.log('Error saving date', err);
            callbackFunction(err);
        });
}

app.listen(port, async () => {
    //const url = await ngrok.connect(port);
    console.log(`Server running`);

})