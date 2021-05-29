// 获取当前日期 yyyy/mm/dd
export function getCurrentDate() {
  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth() + 1 < 10 ? `0${nowDate.getMonth() + 1}` : nowDate.getMonth() + 1;
  const day = nowDate.getDate() < 10 ? `0${nowDate.getDate()}` : nowDate.getDate();
  const dateStr = `${year}/${month}/${day}`;
  return dateStr;
}

// 获取当前星期几
export function getCurrentDay() {
  return `星期${'日一二三四五六'.charAt(new Date().getDay())}`;
}

function _changeTheme(themeColor: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!(window as any).less) return;
  window.setTimeout(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).less.modifyVars({
      '@header-bar-bg': themeColor,
      '@primary-color': themeColor,
      // '@primary-color': themeColor,
    });
  }, 300);
}

let lessNodesAppended: boolean = false;

/**
 * 动态更改主题色
 * @param {string} themeColor 主题颜色
 */
export function onChangeTheme(themeColor: string) {
  if (!lessNodesAppended) {
    // 插入 less.js，和 颜色主题.less
    const lessConfigNode = document.createElement('script');
    const lessScriptNode = document.createElement('script');
    const lessStyleNode = document.createElement('link');
    lessStyleNode.setAttribute('rel', 'stylesheet/less');
    lessStyleNode.setAttribute('href', '/styles/components.less'); // public 目标下

    lessConfigNode.innerHTML = `
        window.less = {
          async: true,
          env: 'development',
          javascriptEnabled: true
        };
      `;
    lessScriptNode.src = '/less.min.js';
    lessScriptNode.async = true;
    lessScriptNode.onload = () => {
      _changeTheme(themeColor);
      lessScriptNode.onload = null;
    };
    document.body.appendChild(lessStyleNode);
    document.body.appendChild(lessConfigNode);
    document.body.appendChild(lessScriptNode);
    lessNodesAppended = true;
  } else {
    _changeTheme(themeColor);
  }
}
