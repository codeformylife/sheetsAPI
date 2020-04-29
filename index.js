const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('1aoPxJeI6K8wcFd8DploqoICNU3LIdtnTUiJ51xMZkMY');
async function main() {
  await doc.useServiceAccountAuth(require('./creds-from-google.json'));
  await doc.loadInfo(); // loads document properties and worksheets
  await doc.updateProperties({ title: 'FacebookScan' });
  // const sheet = await doc.addSheet({ headerValues: ['name', 'email', 'success', 'code'] });
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  await sheet.addRows(
    [{ name: 'Sergey Brin', email: 'sergey@google.com', success: true, code: 200 }]
  );
}
main();
