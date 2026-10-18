export default function Header({ setMobileOpen }) {
  return (
    <header className="topbar">
      <button
        className="menu-button"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Mở menu"
      >
        ☰
      </button>
      <div className="topbar-title">TRƯỜNG ĐẠI HỌC QUY NHƠN</div>
      <div className="topbar-subtitle">Hệ thống quản lý & kiểm tra hồ sơ tuyển sinh</div>
    </header>
  )
}

