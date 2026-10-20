import { useEffect, useRef, useState } from 'react'

export default function CameraCapture({ onCapture, onClose }) {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    const startCamera = async () => {
      if (!navigator.mediaDevices?.getUserMedia) {
        setError('Trình duyệt không hỗ trợ truy cập camera.')
        return
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: 'environment' } },
          audio: false,
        })
        if (!active) {
          stream.getTracks().forEach((track) => track.stop())
          return
        }
        streamRef.current = stream
        videoRef.current.srcObject = stream
      } catch {
        setError('Không thể mở camera. Hãy cấp quyền camera hoặc dùng HTTPS/localhost.')
      }
    }

    startCamera()

    return () => {
      active = false
      streamRef.current?.getTracks().forEach((track) => track.stop())
    }
  }, [])

  const capture = () => {
    const video = videoRef.current
    if (!video || video.readyState < 2) return

    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext('2d').drawImage(video, 0, 0)
    canvas.toBlob((blob) => {
      if (blob) onCapture(new File([blob], `camera-${Date.now()}.jpg`, { type: 'image/jpeg' }))
    }, 'image/jpeg', 0.92)
  }

  return (
    <div className="camera-panel">
      <video ref={videoRef} autoPlay playsInline muted className="camera-preview" />
      {error && <p className="form-error" role="alert">{error}</p>}
      <div className="camera-actions">
        <button type="button" className="primary" onClick={capture} disabled={Boolean(error)}>
          Chụp ảnh và OCR
        </button>
        <button type="button" className="secondary" onClick={onClose}>Đóng camera</button>
      </div>
    </div>
  )
}

