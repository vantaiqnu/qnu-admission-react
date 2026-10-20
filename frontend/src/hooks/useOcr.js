import { useCallback, useState } from 'react'
import { recognizeImage } from '../services/ocrService'

export function useOcr() {
  const [result, setResult] = useState('')
  const [status, setStatus] = useState('idle')
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')

  const runOcr = useCallback(async (image) => {
    if (!image) return

    setStatus('processing')
    setProgress(0)
    setResult('')
    setError('')

    try {
      const text = await recognizeImage(image, ({ progress }) => {
        setProgress(Math.round(progress * 100))
      })
      setResult(text)
      setStatus(text ? 'success' : 'empty')
    } catch (ocrError) {
      setStatus('error')
      setError(ocrError instanceof Error ? ocrError.message : 'Không thể nhận dạng nội dung ảnh.')
    }
  }, [])

  const reset = useCallback(() => {
    setResult('')
    setStatus('idle')
    setProgress(0)
    setError('')
  }, [])

  return { result, status, progress, error, runOcr, reset }
}

