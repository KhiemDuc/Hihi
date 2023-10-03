const { rawDataFilter } = require('./rawDataFilter.js');
const { saveExcelFile } = require('./exportExcel.js');

async function promptUser(question) {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    return new Promise((resolve, reject) => {
      readline.question(question, (input) => {
        resolve(input);
        readline.close();
      });
    });
  }
  

// const startDate = new Date('2022-12-01'); 
// const endDate = new Date('2022-12-31');

async function workCrawlData(startDate, endDate) {

    const StartDate = new Date(startDate); 
    const EndDate = new Date(endDate);

    const fullCrawlData = [];
    for (let date = StartDate; date <= EndDate; date.setDate(date.getDate() + 1)) {
        const jsonDataByDate = await rawDataFilter(date.getDate(), date.getMonth() + 1, date.getFullYear());
        fullCrawlData.push(jsonDataByDate)
    } 
    saveExcelFile(fullCrawlData);
}

workCrawlData();