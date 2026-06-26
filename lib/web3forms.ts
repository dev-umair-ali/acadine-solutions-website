export const WEB3FORMS_KEY = 'a0a6aee4-8b23-40a5-874e-6cfeb40c8dd9'

export const WEB3FORMS_RECIPIENT = 'info@acadine.io'

type Web3FormsPayload = Record<string, string | number | boolean | undefined>

export type Web3FormsResult = {
  success: boolean
  message?: string
}

export async function submitToWeb3Forms(payload: Web3FormsPayload): Promise<Web3FormsResult> {
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        botcheck: false,
        ...payload,
      }),
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
  } catch {
    return {
      success: false,
      message: `Network error — the form could not reach the submission service. Please email ${WEB3FORMS_RECIPIENT} directly.`,
    }
  }
}
