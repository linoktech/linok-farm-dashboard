import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Users, Droplet, Bell, FileText, Settings, Sun, Moon, LogOut } from 'lucide-react'

const links = [
  { to: '/overview', label: 'Overview', icon: LayoutDashboard },
  { to: '/herd', label: 'Herd', icon: Users },
  { to: '/quality', label: 'Quality', icon: Droplet },
  { to: '/tasks', label: 'Tasks & Alerts', icon: Bell },
  { to: '/reports', label: 'Reports', icon: FileText },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function NavBar() {
  const navigate = useNavigate()
  const user = localStorage.getItem('linok_user')
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark')

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function handleLogout() {
    localStorage.removeItem('linok_user')
    navigate('/login')
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="brand">Linok</div>
        <div className="sidebar-subtitle">Farm Management</div>
        {user && <div className="sidebar-user">{JSON.parse(user).email}</div>}
      </div>
      <nav className="sidebar-nav">
        {links.map((l) => {
          const Icon = l.icon
          return (
            <NavLink key={l.to} to={l.to} className={({isActive}) => isActive ? 's-active' : 's-link'}>
              <Icon size={18} style={{marginRight: '10px', display: 'inline-block', verticalAlign: 'middle'}} />
              <span style={{verticalAlign: 'middle'}}>{l.label}</span>
            </NavLink>
          )
        })}
      </nav>
      <div className="sidebar-bottom">
        <button className="btn small secondary" onClick={toggleTheme} style={{marginBottom:'8px', display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center'}}>
          {theme === 'dark' ? <><Sun size={16} /> Light Mode</> : <><Moon size={16} /> Dark Mode</>}
        </button>
        <button className="btn small secondary" onClick={handleLogout} style={{display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center'}}>
          <LogOut size={16} /> Logout
        </button>
      </div>
    </aside>
  )
}
