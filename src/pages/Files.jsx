import { useMemo, useState } from 'react'

export default function Files({ files }) {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('Tất cả')

  const filtered = useMemo(() => {
    return files.filter((f) => {
      const matchSearch = !search || f.name.toLowerCase().includes(search.toLowerCase())
      const matchStatus = status === 'Tất cả' || f.status === status
      return matchSearch && matchStatus
    })
  }, [files, search, status])

  return (
    <>
      <div className="crumb">Trang chủ / Hồ sơ tuyển sinh</div>
      <h2>Danh sách hồ sơ tuyển sinh</h2>

      <div className="filters">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm kiếm tên file..."
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Tất cả">Tất cả</option>
          <option value="Đang xử lý">Đang xử lý</option>
        </select>
      </div>

      <div className="card table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tên file</th>
              <th>Loại giấy tờ</th>
              <th>Kích thước</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((f) => (
                <tr key={f.id}>
                  <td>{f.name}</td>
                  <td>{f.type}</td>
                  <td>{(f.size / 1024).toFixed(1)} KB</td>
                  <td>
                    <span className="badge yellow">{f.status}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="table-empty">
                  Chưa có hồ sơ nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

