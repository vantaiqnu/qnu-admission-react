import { createWorker } from 'tesseract.js'

const OCR_LANGUAGES = 'vie+eng'

export async function recognizeImage(image, onProgress) {
  const worker = await createWorker(OCR_LANGUAGES, 1, {
    logger: (message) => {
      if (message.status && typeof message.progress === 'number') {
        onProgress?.({ status: message.status, progress: message.progress })
      }
    },
  })

  try {
    const { data } = await worker.recognize(image)
    return data.text.trim()
  } finally {
    await worker.terminate()
  }
}

