import { useState } from 'react'

export default function Register({ onSwitch, onHome }) {
  const [status, setStatus] = useState('')

  const submit = event => {
    event.preventDefault()
    const values = new FormData(event.currentTarget)
    if (values.get('password') !== values.get('confirm-password')) {
      setStatus('Mật khẩu xác nhận không khớp.')
      return
    }
    setStatus('Bản demo chưa tạo tài khoản thật. Hãy chuyển sang đăng nhập để thử luồng giao diện.')
  }
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
      <section className="auth-card" aria-labelledby="register-title">
        <div className="auth-card-heading">
          <p className="auth-eyebrow">TÀI KHOẢN</p>
          <h2 id="register-title">Đăng ký</h2>
          <p>Tạo thông tin đăng ký để xem thử giao diện.</p>
        </div>
        <form onSubmit={submit}>
          <label htmlFor="register-name">Họ và tên</label>
          <input id="register-name" name="name" type="text" autoComplete="name" placeholder="Nhập họ và tên" required />
          <label htmlFor="register-email">Email</label>
          <input id="register-email" name="email" type="email" autoComplete="email" placeholder="name@example.com" required />
          <label htmlFor="register-password">Mật khẩu</label>
          <input id="register-password" name="password" type="password" autoComplete="new-password" placeholder="Tạo mật khẩu" required />
          <label htmlFor="register-confirm-password">Xác nhận mật khẩu</label>
          <input id="register-confirm-password" name="confirm-password" type="password" autoComplete="new-password" placeholder="Nhập lại mật khẩu" required />
          <button className="primary auth-submit" type="submit">Đăng ký</button>
        </form>
        {status && <p className="auth-pending" role="status">{status}</p>}
        <p className="auth-switch">Đã có tài khoản? <button type="button" className="auth-link" onClick={() => onSwitch('login')}>Đăng nhập</button></p>
        <p className="auth-home-link"><button type="button" className="auth-link" onClick={onHome}>Về trang chủ</button></p>
      </section>
    </main>
  )
}
