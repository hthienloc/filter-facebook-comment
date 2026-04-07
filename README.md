<p align="center">
  <img src="assets/logo.png" width="200" alt="Facebook Affiliate Comment Filter Logo">
</p>

# Facebook Affiliate Comment Filter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)]()

A lightweight userscript that automatically detects and hides affiliate spam and promotional comments on Facebook.

---

[Tiếng Việt bên dưới](#hướng-dẫn-cài-đặt)

## 🚀 Overview

Tired of seeing "chốt đơn", Shopee links, and other affiliate spam in the comment sections of popular Facebook posts? This userscript uses a combination of domain matching and keyword analysis to clean up your feed in real-time.

## ✨ Features

- **Automatic Detection**: Proactively identifies affiliate link domain patterns (Shopee, Lazada, bit.ly, etc.).
- **Keyword Filtering**: Blocks comments containing promotional buzzwords like "voucher", "mã giảm giá", "link mua".
- **Dynamic Loading Support**: Uses `MutationObserver` to process comments as you scroll (infinite scroll support).
- **Privacy Focused**: Runs entirely in your browser without sending data to external servers.

## 🛠️ Installation

1. **Install a userscript manager**:
    - [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
    - [Greasemonkey](https://www.greasespot.net/)
2. **Add the script**:
    - Open the userscript manager dashboard.
    - Select **Create a new script**.
    - Copy the full content of `filter-fb-affiliate.user.js` from this repository.
    - Paste it into the editor and press `Ctrl+S` to **Save**.
3. **Enjoy**: Refresh Facebook, and the script will start working immediately.

---

## 🇻🇳 Hướng dẫn cài đặt

Bạn mệt mỏi vì phải thấy hàng loạt bình luận "chốt đơn", link Shopee affiliate, hay spam rác trên Facebook? Công cụ này sẽ giúp bạn dọn dẹp bảng tin một cách tự động.

### 🔨 Cách cài đặt chi tiết

1. **Cài đặt tiện ích quản lý script**:
    - Nếu bạn dùng Chrome/Edge/Brave: Cài đặt **[Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)** từ Store.
    - Nếu bạn dùng Firefox: Cài đặt **[Tampermonkey cho Firefox](https://addons.mozilla.org/vi/firefox/addon/tampermonkey/)**.
2. **Thêm Script lọc**:
    - Nhấn vào biểu tượng Tampermonkey trên thanh công cụ trình duyệt -> Chọn **Dashboard** (Bảng điều khiển).
    - Nhấn vào tab **+** (Create a new script).
    - Xóa hết code mặc định, sau đó copy toàn bộ nội dung file `filter-fb-affiliate.user.js` trong kho lưu trữ này và dán vào.
    - Vào **File** -> **Save** (hoặc nhấn `Ctrl+S`).
3. **Sử dụng**: Truy cập Facebook và tận hưởng bảng tin sạch bóng spam.

### 🔍 Cơ chế hoạt động

Script sẽ theo dõi các thay đổi trên trang (khi bạn cuộn chuột). Nếu phát hiện bình luận có chứa link Shopee, Lazada hoặc các từ khóa như "voucher", "link mua", nó sẽ tự động ẩn bình luận đó đi.

## 🤝 Contributing

Contributions are welcome! If you find new spam patterns:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/new-pattern`).
3. Commit your changes.
4. Push to the branch and open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
