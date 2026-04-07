<p align="center">
  <img src="assets/logo.png" width="200" alt="Facebook Affiliate Comment Filter Logo">
</p>

# Facebook Affiliate Comment Filter 🛡️

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/hthienloc/filter-facebook-comment)

**Facebook Affiliate Comment Filter** là một userscript nhẹ nhàng giúp tự động phát hiện và ẩn các bình luận spam affiliate, quảng cáo vặt trên Facebook.

## ✨ Tính năng hiện tại

- **Lọc Link Affiliate**: Tự động nhận diện các tên miền phổ biến (Shopee, Lazada, bit.ly, v.v.).
- **Chặn Từ Khóa SPAM**: Ẩn các bình luận chứa các từ khóa như "chốt đơn", "voucher", "mã giảm giá", "link mua".
- **Hỗ trợ Cuộn Vô Tận**: Sử dụng `MutationObserver` để xử lý các bình luận mới ngay khi chúng được tải.
- **Bảo mật & Riêng tư**: Chạy hoàn toàn trên trình duyệt của bạn, không gửi dữ liệu ra bên ngoài.
- **Nhật ký hoạt động**: Hiển thị thông báo trong Console trình duyệt khi có bình luận bị ẩn.

## 🚀 Cài đặt

1. Cài đặt một trình quản lý userscript (Tiện ích mở rộng trình duyệt):
    - **Tampermonkey** (Khuyên dùng): [Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd).
    - Hoặc **Greasemonkey**, **Violentmonkey**.
2. Nhấp vào đường link script: [filter-fb-affiliate.user.js](https://github.com/hthienloc/filter-facebook-comment/raw/main/filter-fb-affiliate.user.js).
3. Nhấn **Install** (Cài đặt).
4. Truy cập [facebook.com](https://www.facebook.com) và trải nghiệm bảng tin sạch sẽ!

## 🛠️ Phát triển

Dự án này sử dụng JavaScript thuần túy để đảm bảo hiệu năng và tính tương thích cao nhất.

### Cấu trúc project

```text
.
├── assets/                       # Logo và hình ảnh preview
├── tests/                        # Bộ test logic lọc spam
├── filter-fb-affiliate.user.js   # File script chính
└── README.md                     # Tài liệu hướng dẫn
```

## 📜 Giấy phép

Phân phối theo giấy phép MIT. Xem `LICENSE` để biết thêm chi tiết.

---
Phát triển bởi **hthienloc**.
