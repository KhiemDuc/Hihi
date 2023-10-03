// Định nghĩa một hàm để yêu cầu nhập chuỗi từ người dùng
function promptUser(question) {
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
  
  // Hàm chính
  async function main() {
    // Yêu cầu nhập chuỗi thứ nhất
    const str1 = await promptUser('Nhập chuỗi thứ 1: ');
  
    // Yêu cầu nhập chuỗi thứ hai
    const str2 = await promptUser('Nhập chuỗi thứ 2: ');
  
    // Ghép hai chuỗi thành một chuỗi duy nhất
    const mergedString = str1 + str2;
  
    // Xuất kết quả
    console.log("Chuỗi ghép được là:", mergedString);
  }
  
  // Gọi hàm chính
  main();