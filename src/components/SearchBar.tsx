import React from 'react'

interface Props {
  onSearch: (username: string) => void
  loading?: boolean
}

const SearchBar: React.FC<Props> = ({ onSearch, loading }) => {
  const [value, setValue] = React.useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value.trim()) return
    onSearch(value.trim())
  }

  return (
    <form className="search" onSubmit={submit} role="search">
      <label htmlFor="q" className="sr-only">Search GitHub username</label>
      <input
        id="q"
        type="text"
        placeholder="Search GitHub username…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Searching…' : 'Search'}
      </button>
    </form>
  )
}

export default SearchBar
