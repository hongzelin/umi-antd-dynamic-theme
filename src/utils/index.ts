function _changeTheme(themeColor: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!(window as any).less) return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).less.modifyVars({
    '@primary-color': themeColor,
    '@header-bar-visible': 'visible',
  });
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

    // https://lesscss.org/usage/#api
    // env: 'production' development
    lessConfigNode.innerHTML = `
        window.less = {
          env: 'production',
          async: true,
          javascriptEnabled: true
        };
        `;
    lessScriptNode.src = '/less.4x.min.js';
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
