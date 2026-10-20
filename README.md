# QNU Admission — ReactJS Frontend

Frontend demo quản lý và kiểm tra hồ sơ tuyển sinh, được tổ chức tách riêng theo ranh giới FE/BE.

## Cấu trúc repository

```text
frontend/   # React/Vite: giao diện, camera capture và OCR local
backend/    # Tài liệu ranh giới API backend (chưa có server chạy thật)
contracts/  # JSON Schema dùng chung giữa frontend và backend
```

### Frontend

Mã nguồn chính nằm trong `frontend/src/`:

- `pages/admissions/Upload.jsx`: upload ảnh và mở camera.
- `components/admissions/CameraCapture.jsx`: preview camera, chụp ảnh và giải phóng stream.
- `hooks/useOcr.js`: quản lý trạng thái OCR.
- `services/ocrService.js`: adapter Tesseract.js, nhận dạng `vie+eng`.

OCR hiện chạy trực tiếp trong trình duyệt. Kết quả chỉ hiển thị bản xem trước trong phiên hiện tại, không tự lưu và không gắn vào hồ sơ.

### Backend và contracts

`backend/` chỉ mô tả trách nhiệm và hướng mở rộng API. `contracts/` định nghĩa hình dạng dữ liệu OCR/upload để sau này thay OCR local bằng API server-side mà không trộn mã FE và BE.

## Chạy trên Windows

```text
cd frontend
npm install
npm run dev
```

Hoặc chạy `frontend/run.bat`.

Mở địa chỉ Vite hiển thị, thường là `http://localhost:5173/`.

## Build production

```text
cd frontend
npm run build
```

## Camera và giới hạn OCR

- Camera yêu cầu `localhost` hoặc HTTPS và quyền truy cập camera.
- Chỉ hỗ trợ OCR ảnh JPG/JPEG/PNG trong phiên bản này; PDF vẫn chỉ là file upload.
- Lần OCR đầu tiên có thể cần tải dữ liệu ngôn ngữ và mất thêm thời gian.
- Ảnh mờ, thiếu sáng, nghiêng hoặc bị che có thể cho kết quả không chính xác.
- Ứng dụng hiện là frontend-only: không có database, backend API hay lưu dữ liệu bền vững.

## Đăng nhập demo

Login/Register chỉ mô phỏng frontend. Trạng thái đăng nhập tồn tại trong bộ nhớ đến khi tải lại trang và không phải cơ chế bảo mật.
