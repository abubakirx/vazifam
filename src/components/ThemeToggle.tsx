import React from 'react'

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = React.useState<string>(
    document.documentElement.getAttribute('data-theme') || 'light'
  )

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <button className="toggle" onClick={toggle} aria-label="Toggle theme">
      {theme === 'light' ? 'DARK' : 'LIGHT'}
    </button>
  )
}

export default ThemeToggle
