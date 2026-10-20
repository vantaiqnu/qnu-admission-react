export default function OcrResult({ source, status, progress, result, error }) {
  if (!source && status === 'idle') return null

  return (
    <section className="ocr-result card" aria-live="polite">
      <div className="ocr-result-heading">
        <h3>Nội dung nhận dạng</h3>
        <span className="muted">Chỉ xem trước, chưa lưu vào hồ sơ</span>
      </div>
      {status === 'processing' && (
        <div className="ocr-progress">
          <p>Đang tải dữ liệu ngôn ngữ và nhận dạng ảnh ({progress}%)...</p>
          <progress value={progress} max="100" />
        </div>
      )}
      {status === 'error' && <p className="form-error" role="alert">{error}</p>}
      {status === 'empty' && <p className="muted">Không tìm thấy nội dung chữ rõ ràng trong ảnh.</p>}
      {status === 'success' && <pre className="ocr-text">{result}</pre>}
    </section>
  )
}

