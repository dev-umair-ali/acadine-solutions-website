export const WEB3FORMS_KEY = 'a0a6aee4-8b23-40a5-874e-6cfeb40c8dd9'

export const WEB3FORMS_RECIPIENT = 'info@acadine.io'

type Web3FormsPayload = Record<string, string | number | boolean | undefined>

export async function submitToWeb3Forms(payload: Web3FormsPayload) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      ...payload,
    }),
  })

  return res.json() as Promise<{ success: boolean; message?: string }>
}
