const navMain = [
  ['overview', '⌂', 'Tổng quan'],
  ['files', '▣', 'Hồ sơ tuyển sinh'],
  ['upload', '⇧', 'Tải hồ sơ'],
  ['warnings', '⚠', 'Cảnh báo'],
]
const navSystem = [
  ['profile', '●', 'Thông tin cá nhân'],
]

export default function Sidebar({ page, setPage, onLogin, onRegister, onLogout, authenticated }) {
  const renderItem = ([id, icon, label]) => (
    <button key={id} className={`nav-item ${page === id ? 'active' : ''}`} onClick={() => setPage(id)}>
      <span className="nav-icon">{icon}</span><span>{label}</span>
    </button>
  )
  return (
    <aside className="sidebar">
      <div className="brand">
        <img src="/logo.png" alt="Logo Trường Đại học Quy Nhơn" />
        <div className="brand-name">TRƯỜNG ĐẠI HỌC QUY NHƠN</div>
      </div>
      {authenticated ? <div className="auth-session"><span>Phiên đăng nhập demo</span><button type="button" onClick={onLogout}>Đăng xuất</button></div> : <div className="sidebar-auth-actions">
        <button className="btn-auth btn-login" onClick={onLogin}>Đăng nhập</button>
        <button className="btn-auth btn-register" onClick={onRegister}>Đăng ký</button>
      </div>}
      <div className="nav-heading">TRANG CHÍNH</div>
      {navMain.map(renderItem)}
      <div className="nav-heading system-heading">HỆ THỐNG</div>
      {navSystem.map(renderItem)}
      <div className="sidebar-footer">Trường Đại học Quy Nhơn</div>
    </aside>
  )
}
