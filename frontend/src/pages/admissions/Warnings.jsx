export default function Warnings() {
  return (
    <>
      <div className="crumb">Trang chủ / Cảnh báo</div>
      <h2>Cảnh báo & sai lệch</h2>

      <div className="card empty-state">
        <div className="empty-icon">✓</div>
        <h3>Không có cảnh báo</h3>
        <p>Hiện tại hệ thống chưa có hồ sơ được OCR/đối chiếu thật.</p>
      </div>

      <div className="severity-grid">
        <div className="severity high">
          <b>🔴 Cao</b>
          <span>Cần cán bộ kiểm tra trước khi duyệt.</span>
        </div>
        <div className="severity medium">
          <b>🟡 Trung bình</b>
          <span>Có sai lệch cần xác nhận.</span>
        </div>
        <div className="severity low">
          <b>🔵 Thấp</b>
          <span>Chất lượng ảnh hoặc dữ liệu cần lưu ý.</span>
        </div>
      </div>
    </>
  )
}
