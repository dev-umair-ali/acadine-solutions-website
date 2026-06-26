export const WEB3FORMS_KEY = '912c7711-ef10-4272-83af-630dc7fe9486'

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
