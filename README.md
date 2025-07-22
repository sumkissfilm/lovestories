# Summer Kisses - 愛情故事頁面

## 專案概述

Summer Kisses 是一間專注於製作愛情故事的影像工作室，這個專案是「愛情故事」頁面的完整實現。頁面採用現代化的響應式設計，展現工作室的愛情故事作品集和品牌理念。

## 專案特色

### 🎨 設計理念
- **青澀、狂放、溫暖** - 呈現愛情裡青春而樸實的樣子
- 時而中性柔美，時而粗糙奔放
- 致力於捕捉真實情感，而非過度修飾的畫面

### ✨ 頁面功能
- **響應式設計** - 完美適配桌面、平板和手機裝置
- **滾動動畫** - 優雅的滾動觸發動畫效果
- **互動輪播** - 文字內容輪播展示
- **社群媒體整合** - 連結 Instagram、YouTube 等平台
- **無障礙設計** - 符合網頁無障礙標準

## 檔案結構

```
lovestories/
├── css/                          # 樣式檔案
│   ├── about.css                 # 關於我們頁面專用樣式
│   ├── footer.css                # 頁尾樣式
│   ├── header-navigation.css     # 頁首導航樣式
│   ├── navigation-font.css       # 導航字體樣式
│   ├── story-section.css         # 故事區塊樣式
│   └── style.css                 # 主要樣式檔案
├── images/                       # 圖片資源
│   ├── favicon/                  # 網站圖示
│   │   └── SumKiss.png
│   ├── header/                   # 頁首圖片
│   │   └── summerkiss-logo.png
│   └── hero/                     # 主要橫幅圖片
│       ├── 0416_01.png
│       ├── 0416_19.png
│       ├── 0416_20.png
│       ├── 0416_21.png
│       ├── 0501_08.png
│       └── 0623_01.png
├── js/                          # JavaScript 檔案
│   ├── aboutmain.js             # 關於我們主要功能
│   ├── aboutscript.js           # 關於我們腳本
│   ├── aboutscroll.js           # 滾動效果
│   ├── carousel.js              # 輪播功能
│   ├── footer.js                # 頁尾功能
│   ├── main.js                  # 主要功能
│   └── scroll.js                # 滾動監聽
├── index.html                   # 主要 HTML 檔案
├── README.md                    # 專案說明文件
└── .gitattributes              # Git 屬性設定
```

## 技術架構

### 前端技術
- **HTML5** - 語義化標籤結構
- **CSS3** - 現代化樣式設計
- **JavaScript (ES6+)** - 互動功能實現
- **Bootstrap 5.3.3** - 響應式框架
- **Font Awesome 6.5.1** - 圖示庫
- **Google Fonts** - 字體資源 (ABeeZee, Noto Sans TC)

### 主要功能模組

#### 1. 頁首導航 (Header Navigation)
- 固定頂部導航列
- 響應式漢堡選單
- 滾動時背景色變化
- 社群媒體圖示 (YouTube, Instagram, Home)
- 導航連結至其他頁面 (關於我們、愛情故事、價格方案、常見Q&A)

#### 2. Hero 區塊
- 全螢幕背景圖片
- 品牌標語展示
- 滾動動畫效果

#### 3. 故事介紹區塊
- 雙欄式佈局
- 圖片與文字並列
- Instagram 影片連結
- 品牌理念展示

#### 4. 團隊介紹區塊
- 團隊成員卡片
- 互動式文字輪播
- 個人 Instagram 連結
- 滑動提示功能

#### 5. 聯絡資訊區塊
- 三欄式資訊展示
- 社群媒體連結
- 預約諮詢按鈕

#### 6. 頁尾 (Footer)
- 聯絡資訊
- 社群媒體連結
- 版權聲明

## 安裝與使用

### 本地開發
1. 克隆專案到本地
```bash
git clone [repository-url]
cd lovestories
```

2. 使用本地伺服器開啟
```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js
npx serve .

# 或使用 PHP
php -S localhost:8000
```

3. 在瀏覽器中開啟 `http://localhost:8000`

### 部署
- 可直接部署到 GitHub Pages
- 支援任何靜態網站託管服務
- 無需後端服務器

## 自訂設定

### 修改品牌資訊
- 更新 `index.html` 中的品牌名稱和標語
- 修改 `images/` 目錄中的圖片資源
- 調整 `css/style.css` 中的品牌色彩

### 更新內容
- 編輯 `index.html` 中的文字內容
- 替換 `images/` 目錄中的圖片
- 修改社群媒體連結

### 樣式調整
- 主要樣式：`css/style.css`
- 關於我們專用樣式：`css/about.css`
- 導航樣式：`css/header-navigation.css`
- 故事區塊樣式：`css/story-section.css`
- 頁尾樣式：`css/footer.css`

## 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)
- 支援行動裝置瀏覽器

## 效能優化

- 圖片使用 `loading="lazy"` 延遲載入
- CSS 和 JavaScript 檔案分離
- 使用 CDN 載入外部資源
- 圖片適當壓縮

## 無障礙功能

- 語義化 HTML 結構
- 適當的 ARIA 標籤
- 鍵盤導航支援
- 色彩對比度符合標準

## 聯絡資訊

- **Instagram**: [@sumkiss.film](https://www.instagram.com/sumkiss.film/)
- **YouTube**: [@sumkiss](http://www.youtube.com/@sumkiss)
- **Email**: sumkiss.film@gmail.com
- **地點**: 台中

## 版權聲明

Copyright &copy; 2024 Summer Kisses 影像工作室 版權所有

網頁設計 by Gary Chan  
技術支持 by Jinhe Chen

---

*「紀錄的不僅僅是你們，是情感，也是時間。」* 