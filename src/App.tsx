import React from 'react'
import ThemeToggle from './components/ThemeToggle'
import SearchBar from './components/SearchBar'
import UserCard from './components/UserCard'
import { fetchUser } from './services/github'
import type { GitHubUser } from './types'

const App: React.FC = () => {
  const [user, setUser] = React.useState<GitHubUser | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    // Load a default user to showcase layout
    handleSearch('octocat')
  }, [])

  const handleSearch = async (username: string) => {
    setLoading(true)
    setError(null)
    try {
      const u = await fetchUser(username)
      setUser(u)
    } catch (e: any) {
      if (e?.message === 'Not Found') setError('No results')
      else setError('Something went wrong. Try again later.')
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="row space-between" style={{marginBottom: 24}}>
        <div className="title">devfinder</div>
        <ThemeToggle />
      </div>

      <SearchBar onSearch={handleSearch} loading={loading} />

      <div style={{height: 16}} />

      {error && (
        <div className="card" role="alert">{error}</div>
      )}

      {user && !error && (
        <UserCard user={user} />
      )}
    </div>
  )
}

export default App
