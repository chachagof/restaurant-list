# 我的餐廳清單

## 介紹

此專案可以瀏覽網站所提供的餐廳並查看詳細資訊、地圖。

### 功能

- 查看所有餐廳
- 新增喜愛餐廳
- 瀏覽餐廳的詳細資訊
- 修改喜愛餐廳
- 刪除名單上餐廳
- 可依餐廳名稱、口味、地址搜尋到特定餐廳
- 可依指定順序做餐廳排列

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```

4. 安裝完畢後，繼續輸入：

   ```bash
   npm run start
   ```

5. 啟動專案前，請先建立種子資料，如在終端機中成功看到done，即表示種子資料建立成功
   ```bash
   npm run seed
   ```

6. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Gogogooo
   connection is work
   ```

7. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js 18.12.0
- Express 4.16.4
- Express-Handlebars 6.0.6
- mongoose 6.7.2
- Bootstrap 5.1.3
- Font-awesome 5.8.1
- method-override ^3.0.0
