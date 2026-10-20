const mockStudentData = {
  fullName: 'Trần Minh Anh',
  initials: 'TMA',
  dateOfBirth: '12/05/2007',
  gender: 'Nữ',
  ethnicity: 'Kinh',
  birthplace: 'Quy Nhơn, Bình Định',
  phone: '0901 234 567',
  email: 'minhanh.demo@example.com',
  address: '123 Đường Mẫu, Phường Demo, TP. Quy Nhơn, Tỉnh Bình Định',
}

function AvatarCard({ student }) {
  return (
    <div className="card profile-avatar-card">
      <div className="avatar-wrapper">
        <div className="avatar-circle">{student.initials}</div>
      </div>
      <h3 className="profile-user-name">{student.fullName}</h3>
      <div className="profile-subtext">Thí sinh</div>
    </div>
  )
}

function InfoCard({ student }) {
  const fields = [
    ['Họ và tên', student.fullName],
    ['Ngày sinh', student.dateOfBirth],
    ['Giới tính', student.gender],
    ['Dân tộc', student.ethnicity],
    ['Nơi sinh', student.birthplace],
    ['Số điện thoại', student.phone],
    ['Email', student.email],
    ['Địa chỉ liên lạc', student.address, true],
  ]

  return (
    <div className="card profile-info-card">
      <div className="info-group">
        <h4 className="group-title">THÔNG TIN THÍ SINH</h4>
        <div className="info-grid">
          {fields.map(([label, value, fullWidth]) => (
            <div className={`info-item${fullWidth ? ' full-width' : ''}`} key={label}>
              <span className="info-label">{label}</span>
              <span className="info-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Profile() {
  return (
    <>
      <div className="crumb">Trang cá nhân / Thông tin cá nhân</div>
      <h2>Thông tin thí sinh</h2>

      <div className="profile-layout-grid">
        <AvatarCard student={mockStudentData} />
        <InfoCard student={mockStudentData} />
      </div>
    </>
  )
}
