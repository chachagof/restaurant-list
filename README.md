# 我的餐廳清單

## 介紹

此專案提供會員註冊並自行添加喜愛的餐廳清單，使用者可任意新增刪除以及排列已加入的餐廳，也可以透過關鍵字搜尋此清單

### 功能

- 使用者可以註冊會員享有專屬隱私清單
- 使用者可以依照喜好在自己的清單上完成新增、修改、刪除餐廳等各項工作
- 可依餐廳名稱、口味、地址搜尋到特定餐廳
- 可依指定順序做餐廳排列
- 提供Facebook登入，讓使用者快速登入做使用

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 開啟terminal並且clone此專案至本機電腦

   ```bash
   git clone https://github.com/chachagof/restaurant-list
   ```

3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```

4. 安裝完畢後，繼續輸入：

   ```bash
   npm run start
   ```

5. 新增.env並根據.env.example資訊來設定環境變數

6. 啟動專案前，請先建立種子資料，如在終端機中成功看到seeder is finish，即表示種子資料建立成功
   ```bash
   npm run seed
   ```

7. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   GOgogo http://localhost:3000
   mongoose connection is work
   ```

8. 若欲暫停使用

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
- method-override 3.0.0
- bcryptjs 2.4.3
- connect-flash 0.1.1
- passport 0.4.1
