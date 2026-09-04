export const WEB3FORMS_KEY = 'a0a6aee4-8b23-40a5-874e-6cfeb40c8dd9'

export const WEB3FORMS_RECIPIENT = 'info@acadine.io'

type Web3FormsPayload = Record<string, string | number | boolean | undefined>

export type Web3FormsResult = {
  success: boolean
  message?: string
}

const SUBMIT_TIMEOUT_MS = 20000

export async function submitToWeb3Forms(payload: Web3FormsPayload): Promise<Web3FormsResult> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS)

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        ...payload,
      }),
      signal: controller.signal,
    })

    let data: Web3FormsResult
    try {
      data = (await res.json()) as Web3FormsResult
    } catch {
      return {
        success: false,
        message: `Unexpected response from form service (${res.status}). Please email ${WEB3FORMS_RECIPIENT} directly.`,
      }
    }

    if (!data.success && !data.message) {
      return {
        success: false,
        message: `Submission failed (${res.status}). Please email ${WEB3FORMS_RECIPIENT} directly.`,
      }
    }

    return data
  } catch (error) {
    const timedOut = error instanceof DOMException && error.name === 'AbortError'
    return {
      success: false,
      message: timedOut
        ? `The request took too long, likely due to a slow connection. Please try again or email ${WEB3FORMS_RECIPIENT} directly.`
        : `Network error. The form could not reach the submission service. Please email ${WEB3FORMS_RECIPIENT} directly.`,
    }
  } finally {
    clearTimeout(timeoutId)
  }
}
