const operationLabels = {
  upload: 'tiếp nhận hồ sơ',
  approve: 'phê duyệt hồ sơ',
  supplement: 'yêu cầu bổ sung hồ sơ',
}

export default function Login({ onSuccess, onSwitch, onHome, pendingOperation }) {
  return (
    <main className="auth-layout">
      <section className="auth-brand-panel">
        <button className="auth-home-logo" type="button" onClick={onHome} aria-label="Về trang chủ QNU">
          <img src="/logo.png" alt="Logo Trường Đại học Quy Nhơn" />
        </button>
        <p className="auth-eyebrow">TRƯỜNG ĐẠI HỌC QUY NHƠN</p>
        <h1>Cổng tuyển sinh QNU</h1>
        <p className="auth-brand-copy">Hệ thống tiếp nhận và theo dõi hồ sơ tuyển sinh.</p>
      </section>
      <section className="auth-card" aria-labelledby="login-title">
        <div className="auth-card-heading">
          <p className="auth-eyebrow">TÀI KHOẢN</p>
          <h2 id="login-title">Đăng nhập</h2>
          <p>Đăng nhập để tiếp tục.</p>
        </div>
        {pendingOperation && <div className="auth-pending" role="status">Vui lòng đăng nhập để {operationLabels[pendingOperation] || 'tiếp tục thao tác'}.</div>}
        <form onSubmit={event => { event.preventDefault(); onSuccess() }}>
          <label htmlFor="login-email">Email</label>
          <input id="login-email" name="email" type="email" autoComplete="email" placeholder="name@example.com" required />
          <label htmlFor="login-password">Mật khẩu</label>
          <input id="login-password" name="password" type="password" autoComplete="current-password" placeholder="Nhập mật khẩu" required />
          <button className="primary auth-submit" type="submit">Đăng nhập</button>
        </form>
        <p className="auth-switch">Chưa có tài khoản? <button type="button" className="auth-link" onClick={() => onSwitch('register')}>Đăng ký</button></p>
        <p className="auth-home-link"><button type="button" className="auth-link" onClick={onHome}>Về trang chủ</button></p>
      </section>
    </main>
  )
}
