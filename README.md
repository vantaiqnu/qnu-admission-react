# QNU Admission — ReactJS Frontend

Frontend demo chuyển từ Streamlit sang ReactJS + Vite.

## QUAN TRỌNG: Không mở `index.html` bằng cách double-click

Không chạy project bằng cách mở trực tiếp:

`file:///.../index.html`

Cách này có thể làm màn hình trắng vì đây là ứng dụng React dùng ES Modules và Vite.

## Cách chạy trên Windows

### Cách 1 — dễ nhất

1. Cài **Node.js LTS**: https://nodejs.org/
2. Giải nén project.
3. Double-click `run.bat`.
4. Chờ `npm install` hoàn tất ở lần đầu.
5. Mở địa chỉ Vite hiển thị, thường là:

`http://localhost:5173/`

### Cách 2 — dùng Terminal

```bash
cd qnu-admission-react
npm install
npm run dev
```

Sau đó mở:

`http://localhost:5173/`

## Build production

```bash
npm run build
```

Kết quả nằm trong thư mục `dist/`.

## Deploy GitHub / Vercel / Netlify

Đưa toàn bộ project lên GitHub. Không cần upload `node_modules`.

Build command:

```text
npm run build
```

Output directory:

```text
dist
```

## Trạng thái dữ liệu

Project hiện là frontend-only:

- Không có database.
- Không có backend/API.
- Không có dữ liệu sinh viên mẫu.
- Dashboard ban đầu không có hồ sơ.
- Không có OCR giả.
- File người dùng chọn chỉ được lưu trong state của phiên trình duyệt.

## Đăng nhập và đăng ký demo

Login/Register hiện chỉ mô phỏng giao diện và điều hướng ở frontend. Không có tài khoản được tạo hoặc xác minh, không có mật khẩu được lưu, và trạng thái đăng nhập chỉ tồn tại trong bộ nhớ đến khi tải lại trang. Đây không phải cơ chế bảo mật và không nên dùng để bảo vệ dữ liệu thực tế; xác thực thật cần backend/API.

Khách truy cập vẫn xem được các trang. Demo yêu cầu đăng nhập trước khi tiếp nhận file, thao tác phê duyệt/yêu cầu bổ sung hoặc thay đổi cấu hình. Sau đăng nhập, hãy thực hiện lại thao tác; upload cần chọn lại file.

## Font chữ

Website tải Inter 400, 500, 600, 700, 800 và 900 từ Google Fonts. Cần kết nối mạng để tải font; nếu tải thất bại, trình duyệt dùng font dự phòng.
