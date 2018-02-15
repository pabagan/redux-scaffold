const fs = require('fs');
const dir = './tmp';

const makeDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    return console.log(`${dir} folder created!`);
  }
};

const writeFile = (dir, fileName, fileContent) => {
  fs.writeFile(`${dir}/${fileName}`, fileContent, (err) => {
    if (err) throw err;
    console.log(`${fileName} was created at ${dir}`);
  });
};

//const createModule
// Actions
const moduleFolder = './actions';
const moduleFile = 'index.js';
const moduleFileContent = 'actions';

makeDir(moduleFolder);
writeFile(moduleFolder, moduleFile, moduleFileContent);
