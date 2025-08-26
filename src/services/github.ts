import type { GitHubUser } from '../types'

const BASE = 'https://api.github.com'

export async function fetchUser(username: string): Promise<GitHubUser> {
  const res = await fetch(`${BASE}/users/${encodeURIComponent(username)}`, {
    headers: { 'Accept': 'application/vnd.github+json' }
  })

  if (res.status === 404) {
    throw new Error('Not Found')
  }
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || 'Request failed')
  }
  return res.json()
}
