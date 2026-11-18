# Lexicon v28 · Progressive Web App

## Windows（推荐）
1. **完整解压 ZIP**，不要直接在压缩包内运行。
2. 双击 `Lexicon-Start.exe`（Windows x64）；它只在本机 `127.0.0.1:8765` 提供静态页面，并打开默认浏览器，不上传词库和学习记录。
3. 打开 `http://127.0.0.1:8765/`。页面顶部出现“离线词库已就绪”时，表示 Service Worker 已缓存界面与完整压缩词库。
4. 在 Edge/Chrome 使用页面“安装应用”按钮，或地址栏/浏览器菜单中的安装入口。将 Lexicon 安装为独立应用。
5. 首次缓存完成后，离线可打开已安装应用（由浏览器的离线缓存提供）。更新词库时重新运行启动器并打开该地址，出现更新提示后确认重启。

**说明：** 如果端口 8765 被占用，可退出占用该端口的程序或在命令行用 `Lexicon-Start.exe -port 8765`。尽量固定同一端口，改变端口将创建不同的浏览器来源，学习记录也不会自动迁移。

## Linux / macOS / Android / iOS
使用 HTTPS 将 `index.html`、`sw.js`、`manifest.webmanifest`、`data/` 与 `icons/` 整个目录放在同一个站点路径（可以放在子目录）；本地电脑上也可用 `python3 -m http.server 8765 --bind 127.0.0.1`，然后打开 `http://127.0.0.1:8765/`。

**注意：** 局域网普通 HTTP 地址例如 `http://192.168.x.x` 不属于可信 PWA 安装来源；移动端需要 HTTPS 或设备本机的 localhost。iOS 的安装通常通过 Safari“分享 → 添加到主屏幕”。

## 学习记录、隐私及离线限制
- 内置的完整约 20,821 词条、英美差异、词根、语义页面和本地学习进度，无需网络即可使用。外部词典（如 dictionaryapi.dev）、外部字体、网络发音可能需要联网；不对外部资源做离线缓存。
- 收藏、已学、练习等记录保存在浏览器的本地存储中。**从 v27 双击 HTML 的 `file://` 来源迁移到 localhost/HTTPS 会改变来源**，不会自动共享记录。先在旧页面“学习报告”导出学习记录，再在 PWA 中导入。建议定期导出备份。
- PWA 的离线数据可能因浏览器清理站点数据或存储空间压力被移除；不是永久备份。PWA 与同来源的浏览器页面共享数据，换浏览器/设备不自动同步。
- 初次在线加载完成后才会预缓存本地词库。请确认顶部显示“离线词库已就绪”再断开网络。
- 直接打开独立 HTML (`Lexicon-v28-Standalone.html`) 适合无服务器使用，但 `file://` 不支持 Service Worker/PWA 安装。

## 开发者校验
`manifest.webmanifest` 需以 `application/manifest+json` 或 `application/json` MIME 提供；`sw.js` 需以 JavaScript MIME 提供；`data/words-v28.json.gz` 须原样传输（不要在服务器上自动解码 gzip 后又以 application/gzip 返回）。

Version: v28 · 2026-11-18
