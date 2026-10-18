import { useState } from 'react'

function formatSize(bytes) { return `${(bytes / 1024).toFixed(1)} KB` }
function ext(name) { return name.split('.').pop()?.toUpperCase() || 'FILE' }

export default function Upload({ addFiles, setPage, onRequireAuth }) {
  const [docType, setDocType] = useState('Học bạ / Bảng điểm')
  const [selected, setSelected] = useState([])
  const onFiles = e => { if (!onRequireAuth('upload')) { e.target.value = ''; return } setSelected(Array.from(e.target.files || [])) }
  const receive = () => { if (!selected.length || !onRequireAuth('upload')) return; addFiles(selected, docType); setPage('files') }
  return <>
    <div className="crumb">Trang chủ / Tải hồ sơ</div><h2>Tiếp nhận hồ sơ</h2>
    <div className="card"><b>Định dạng hỗ trợ</b><div className="muted">JPG, JPEG, PNG, PDF • Dữ liệu được giữ trong bộ nhớ trình duyệt.</div></div>
    <div className="upload-grid">
      <div className="card">
        <label>Loại giấy tờ</label>
        <select value={docType} onChange={e => setDocType(e.target.value)}><option>Học bạ / Bảng điểm</option><option>CCCD / CMND</option><option>Giấy chứng nhận tốt nghiệp</option><option>Giấy tờ ưu tiên</option></select>
        <label className="upload-label">Chọn file</label>
        <label className="dropzone"><span className="upload-icon">⇧</span><b>Kéo thả hoặc chọn file</b><span className="muted">JPG, JPEG, PNG hoặc PDF</span><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onClick={event=>{if(!onRequireAuth('upload'))event.preventDefault()}} onChange={onFiles}/></label>
        {selected.length > 0 && <div className="file-list">{selected.map(f => <div className="file-row" key={`${f.name}-${f.size}`}><div><b>{f.name}</b><div className="muted">{ext(f.name)} • {formatSize(f.size)}</div></div><span className="badge yellow">Chờ xử lý</span></div>)}</div>}
        <button className="primary full" disabled={!selected.length} onClick={receive}>Tiếp nhận hồ sơ</button>
      </div>
      <div className="card info-panel">
        <h3>Hướng dẫn chụp ảnh và tải file</h3>
        <section className="upload-guide-group">
          <h4>1. Trước khi chụp</h4>
          <ul>
            <li>Dùng giấy tờ bản chính, còn rõ nét, không nhàu nát, không rách, không bị che khuất thông tin.</li>
            <li>Đặt giấy tờ trên mặt phẳng, màu nền tối và đơn sắc (bàn gỗ sẫm, tấm vải đen) để viền giấy tờ nổi bật.</li>
          </ul>
        </section>
        <section className="upload-guide-group">
          <h4>2. Khi chụp ảnh</h4>
          <ul>
            <li>Chụp ở nơi đủ sáng, ưu tiên ánh sáng tự nhiên; tránh bóng đổ và chói loá (đèn flash, ánh đèn phản chiếu lên giấy).</li>
            <li>Giữ điện thoại song song với mặt giấy, chụp thẳng từ trên xuống, không chụp nghiêng.</li>
            <li>Chụp trọn vẹn giấy tờ, thấy đủ 4 góc và 4 cạnh; không cắt mất chữ, dấu mộc, chữ ký.</li>
            <li>Ảnh phải sắc nét, đọc được từng chữ và số khi phóng to; nếu bị mờ hãy chụp lại.</li>
            <li>Chụp ảnh màu, không dùng bộ lọc làm đẹp, không chỉnh sửa, không tô vẽ hay che thông tin.</li>
            <li>Mỗi giấy tờ chụp thành ảnh riêng; giấy tờ có hai mặt (như CCCD) phải chụp cả hai mặt.</li>
          </ul>
        </section>
        <section className="upload-guide-group">
          <h4>3. Khi tải file lên</h4>
          <ul>
            <li>Định dạng hỗ trợ: JPG, JPEG, PNG hoặc PDF.</li>
            <li>Nên dùng file có dung lượng hợp lý (khuyến nghị dưới 10 MB mỗi file) nhưng vẫn phải rõ chữ.</li>
            <li>Với PDF: quét ở độ phân giải khoảng 200–300 DPI, các trang xếp đúng thứ tự, không đặt mật khẩu cho file.</li>
            <li>Với học bạ: tải đầy đủ tất cả các trang có thông tin điểm, nhận xét và xác nhận của nhà trường.</li>
            <li>Chọn đúng "Loại giấy tờ" tương ứng với file trước khi bấm "Tiếp nhận hồ sơ".</li>
          </ul>
        </section>
        <section className="upload-guide-group">
          <h4>4. Các lỗi thường gặp (dễ bị từ chối hoặc báo sai lệch)</h4>
          <ul className="upload-guide-errors">
            <li>✕ Ảnh mờ, rung tay, thiếu góc hoặc bị cắt mất phần thông tin</li>
            <li>✕ Ảnh bị loá sáng hoặc có bóng che lên chữ</li>
            <li>✕ Chụp màn hình hoặc ảnh chụp lại từ ảnh khác</li>
            <li>✕ Ảnh bị xoay ngược, lật, hoặc chữ bị méo do chụp nghiêng</li>
          </ul>
        </section>
      </div>
    </div>
  </>
}
