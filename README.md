# Google sheet API to store data in your google sheet documents
API created to store data in google sheet documents.

## Request example

```
{
    "serviceAccount": {
        "type": "service_account",
        "project_id": "GETTHISFROMSERVICEJSON",
        "private_key_id": "GETTHISFROMSERVICEJSON",
        "private_key": "GETTHISFROMSERVICEJSON",
        "client_email": "GETTHISFROMSERVICEJSON",
        "client_id": "GETTHISFROMSERVICEJSON",
        "auth_uri": "GETTHISFROMSERVICEJSON",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "GETTHISFROMSERVICEJSON"
    },
    "timezone": "Asia/Dubai",
    "data": {
        "phone": "phon2e",
        "service": "ser1",
        "option": "s2",
        "days": "42"
    },
    "sheet": "SHEETNAME",
    "spreadsheetId": "SHEETID"
}
```