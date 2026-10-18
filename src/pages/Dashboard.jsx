import StatCard from '../components/StatCard'

export default function Dashboard({ files, setPage }) {
  const processing = files.filter(f => f.status === 'Đang xử lý').length
  return <>
    <div className="crumb">Trang chủ / Tổng quan</div>
    <section className="hero"><h1>Hệ thống kiểm tra hồ sơ tuyển sinh</h1><p>Tiếp nhận hồ sơ → tiền xử lý ảnh → OCR → chuẩn hóa → đối chiếu logic → cán bộ phê duyệt.</p></section>
    <div className="stats-grid">
      <StatCard label="Tổng hồ sơ" value={files.length} sub={files.length ? 'Hồ sơ trong phiên hiện tại' : 'Chưa có hồ sơ'} />
      <StatCard label="Đang xử lý" value={processing} sub={processing ? 'Đang chờ xử lý' : 'Chưa có hồ sơ'} />
      <StatCard label="Chờ duyệt" value={0} sub="Chưa có kết quả duyệt" />
      <StatCard label="Cảnh báo" value={0} sub="Chưa có cảnh báo" />
    </div>
    <section><h2>Hồ sơ gần đây</h2><div className="card empty-state"><div className="empty-icon">▱</div><h3>{files.length ? `${files.length} file đã được tải lên` : 'Chưa có hồ sơ nào'}</h3><p>{files.length ? 'Dữ liệu chỉ tồn tại trong phiên trình duyệt hiện tại.' : 'Hãy tải hồ sơ đầu tiên để bắt đầu.'}</p><button className="primary" onClick={() => setPage('upload')}>{files.length ? 'Tải thêm hồ sơ' : '＋ Tải hồ sơ đầu tiên'}</button></div></section>
  </>
}
