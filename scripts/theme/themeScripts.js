// 主题色脚本

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { promisify } = require('util');
const themeVars = require('./../../config/theme');

const glob = promisify(require('glob'));
const root = './';
const customPath = './public/styles/custom.theme.less';

Main();

async function Main() {
  init();
  start();
}

function init() {
  // 清空
  fs.writeFileSync(customPath, '', 'utf8');

  // 主题色变量初始值，跟 src/utils/index.ts 中 less.modifyVars 定义的变量相对应。
  for (let key in themeVars) {
    fs.appendFileSync(customPath, `${key}: ${themeVars[key]};\n`, 'utf8');
  }
}

async function start() {
  const rootPath = path.resolve(root);
  const fileList = await glob('src/**/*.theme.less', {
    cwd: rootPath,
    ignore: ['node_modules/**', 'src/.umi/**', 'src/.umi-production/**'],
  });

  // global.theme.less 在最前面，优先级最低
  const otherList = [];
  const globalFile = fileList.filter((file) => {
    if (file.indexOf('global.theme.less') > -1) {
      return true;
    }
    otherList.push(file);
    return false;
  });

  globalFile.concat(otherList).forEach((filePath) => {
    writeFile(rootPath, filePath);
  });

  console.info(chalk.greenBright('恭喜您, 主题文件扫描完成！！！')); // eslint-disable-line
}

// 写文件
function writeFile(rootPath, filePath) {
  const bufferContent = fs.readFileSync(path.resolve(rootPath, filePath));
  const content = bufferContent.toString('utf8');
  fs.appendFileSync(customPath, `\n// ${filePath}\n${content}`, 'utf8');
}

module.exports = Main;
