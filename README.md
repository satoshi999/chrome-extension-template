# chrome-extension-template

## 概要
TypeScript,React.js,Webpackによるchrome-extensionの開発環境一式

## 必要要件
* yarn

## ディレクトリ
### public/
#### 静的ファイルの配置場所。React.jsのroot html,chrome-extensionのmanifest.json,cssファイル

### src/browser_action/
##### React.jsのコンポーネントファイル

### src/content_scripts/
##### chrome-extensionのcontent_scripts

### src/background.ts
##### chrome-extensionのbackground

### src/lib/
##### content_scripts側とReact.js側の共有ライブラリ
